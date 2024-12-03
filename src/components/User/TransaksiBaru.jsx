import React, { useState, useEffect } from 'react';
import { FaTrash, FaCartPlus, FaTrashAlt } from 'react-icons/fa'; // New icons
import { motion } from 'framer-motion'; // Animation library
import useUserProfile from '../../hooks/useUserProfile.js';
import axios from 'axios';  // Import axios

function TransaksiBaru() {
  const [quantity, setQuantity] = useState(0); // Jumlah sampah (kg)
  const [pricePerKg, setPricePerKg] = useState(0); // Harga per kg
  const [itemSampahList, setItemSampahList] = useState([]); // List of waste items
  const [selectedItemSampah, setSelectedItemSampah] = useState(''); // Selected waste item
  const [cart, setCart] = useState([]); // Cart to hold selected items
  const userProfile = useUserProfile();  // Mendapatkan profil pengguna

  // Fetch the list of waste items (itemSampah) from the API
  useEffect(() => {
    const fetchItemSampah = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/item/sampah`);
        if (response.data.status === 'success' && Array.isArray(response.data.data)) {
          setItemSampahList(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching item sampah data', error);
      }
    };

    fetchItemSampah();
  }, []);

  // Handle the selection of waste item and set price per kg
  const handleItemSampahChange = (e) => {
    const selectedId = e.target.value;
    setSelectedItemSampah(selectedId);

    const selectedItem = itemSampahList.find(item => item.id === selectedId);
    setPricePerKg(selectedItem ? selectedItem.hargaPerKg : 0);
  };

  // Fungsi untuk menghitung total harga berdasarkan quantity dan harga per kg
  const handleQuantityChange = (e) => {
    const value = e.target.value ? parseInt(e.target.value) : 0;
    setQuantity(value);
  };

  // Fungsi untuk menambah item ke cart
  const handleAddToCart = () => {
    if (!selectedItemSampah || quantity <= 0) {
      alert("Please select an item and enter a valid quantity.");
      return;
    }

    // Find the selected item
    const selectedItem = itemSampahList.find(item => item.id === selectedItemSampah);
    if (!selectedItem) return;

    const totalPrice = quantity * selectedItem.hargaPerKg;

    // Add the item to the cart
    setCart([...cart, {
      itemId: selectedItem.id,
      itemName: selectedItem.nama,
      pricePerKg: selectedItem.hargaPerKg,
      quantity,
      total: totalPrice
    }]);

    // Reset the selected item and quantity after adding to the cart
    setSelectedItemSampah('');
    setQuantity(0);
  };

  // Fungsi untuk menghapus item dari cart
  const handleRemoveFromCart = (itemId) => {
    setCart(cart.filter(item => item.itemId !== itemId));
  };

  // Fungsi untuk submit transaksi
  const handleSubmit = async () => {
    if (!userProfile || !userProfile.id) {
      alert("User not found. Please log in.");
      return;
    }

    if (cart.length === 0) {
      alert("Please add at least one item to the cart.");
      return;
    }

    // Menyusun data transaksi
    const transaksiData = {
      totalTransaksi: cart.reduce((acc, item) => acc + item.total, 0),
      itemTransaksi: cart.map(item => ({
        itemSampahId: item.itemId,
        quantity: item.quantity
      }))
    };

    // Membuat request ke API untuk membuat transaksi baru dengan axios
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/transaksi/user/${userProfile.id}/create`, transaksiData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Jika transaksi berhasil
      alert(`Transaksi berhasil! Total transaksi Anda senilai Rp ${transaksiData.totalTransaksi.toLocaleString()}.`);
      setCart([]); // Clear the cart after successful transaction
    } catch (error) {
      console.error('Error creating transaksi:', error);
      alert('Terjadi kesalahan saat memproses transaksi.');
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-6 py-10">
      <motion.div 
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-xl"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-green-700 mb-6 text-center flex items-center justify-center">
          <FaTrash className="text-green-500 mr-3" />
          Transaksi Baru
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          Tambahkan data transaksi sampah Anda dan dapatkan keuntungan.
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Input: Jenis Sampah */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Jenis Sampah</label>
            <select
              value={selectedItemSampah}
              onChange={handleItemSampahChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              <option value="">Pilih Jenis Sampah</option>
              {itemSampahList.length > 0 ? (
                itemSampahList.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.nama} - Rp {item.hargaPerKg} per kg
                  </option>
                ))
              ) : (
                <option disabled>No Item Sampah Available</option>
              )}
            </select>
          </div>

          {/* Input: Berat Sampah */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Berat Sampah (kg)</label>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="0"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Masukkan berat sampah Anda"
            />
          </div>

          {/* Button to Add to Cart */}
          <motion.button
            type="button"
            onClick={handleAddToCart}
            className="w-full bg-green-700 text-white px-4 py-3 rounded-lg font-semibold shadow-md hover:bg-green-800 transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCartPlus className="mr-2 inline" />
            Tambah ke Keranjang
          </motion.button>

          {/* Display Cart */}
          <div className="mt-6">
            <h2 className="text-xl font-bold text-green-700">Keranjang</h2>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.itemId} className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                  <span>{item.itemName} - {item.quantity} kg</span>
                  <span>Rp {item.total.toLocaleString()}</span>
                  <motion.button
                    onClick={() => handleRemoveFromCart(item.itemId)}
                    className="text-red-500 hover:text-red-700"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaTrashAlt />
                  </motion.button>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-green-700 text-white px-4 py-3 rounded-lg font-semibold shadow-md hover:bg-green-800 transition-transform transform hover:scale-105 mt-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Proses Transaksi
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default TransaksiBaru;
