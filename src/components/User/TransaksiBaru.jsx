import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import useUserProfile from '../../hooks/useUserProfile.js';
import axios from 'axios';
import LoadingButton from '../LoadingButton.jsx';
import { FaRecycle, FaCartPlus, FaTrash, FaPaperPlane } from 'react-icons/fa';
import ModalNotification from '../shared/ModalNotification.jsx';

function TransaksiBaru() {
  const location = useLocation();
  const userProfile = useUserProfile();
  const [isLoading, setIsLoading] = useState(false); // State untuk loading status
  const [isModalVisible, setIsModalVisible] = useState(false); // State untuk modal
  const [modalMessage, setModalMessage] = useState(''); // State untuk pesan modal


  // Fetch pengepul from state (if redirected from dashboard)
  const selectedPengepulFromState = location.state?.selectedPengepul || null;

  const [pengepulList, setPengepulList] = useState([]); // List of available pengepul
  const [selectedPengepul, setSelectedPengepul] = useState(selectedPengepulFromState); // Selected pengepul
  const [itemSampahList, setItemSampahList] = useState([]); // List of items for selected pengepul
  const [selectedItemSampah, setSelectedItemSampah] = useState(''); // Selected item
  const [quantity, setQuantity] = useState(0); // Quantity
  const [cart, setCart] = useState([]); // Cart for items

  // Fetch pengepul list from API
  useEffect(() => {
    const fetchPengepul = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/pengepul-diterima`);
        setPengepulList(response.data.data || []);
      } catch (error) {
        console.error('Error fetching pengepul data:', error);
      }
    };

    fetchPengepul();
  }, []);

  // Fetch item sampah based on selected pengepul
  useEffect(() => {
    const fetchItemSampah = async () => {
      if (!selectedPengepul) return;

      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/item/sampah?pengepulId=${selectedPengepul.id}`);
        setItemSampahList(response.data.data || []);
      } catch (error) {
        console.error('Error fetching item sampah data:', error);
      }
    };

    fetchItemSampah();
  }, [selectedPengepul]);

  const handleAddToCart = () => {
    if (!selectedItemSampah || quantity <= 0) {
      alert('Please select an item and enter a valid quantity.');
      return;
    }

    const selectedItem = itemSampahList.find((item) => item.id === selectedItemSampah);
    if (!selectedItem) return;

    const totalPrice = quantity * selectedItem.hargaPerKg;

    setCart([...cart, {
      itemId: selectedItem.id,
      itemName: selectedItem.nama,
      pricePerKg: selectedItem.hargaPerKg,
      quantity,
      total: totalPrice,
    }]);

    setSelectedItemSampah('');
    setQuantity(0);
  };

  const handleRemoveFromCart = (itemId) => {
    setCart(cart.filter((item) => item.itemId !== itemId));
  };

  const handleSubmit = async () => {
    setIsLoading(true);  // Set loading ke true saat login dimulai

    if (!userProfile || !userProfile.id) {
      alert('User not found. Please log in.');
      return;
    }

    if (!selectedPengepul) {
      alert('Please select a pengepul.');
      return;
    }

    if (cart.length === 0) {
      alert('Please add at least one item to the cart.');
      return;
    }

    const transaksiData = {
      anggotaId: userProfile.id,
      pengepulId: selectedPengepul.id,
      totalTransaksi: cart.reduce((sum, item) => sum + item.total, 0),
      itemTransaksi: cart.map((item) => ({
        itemSampahId: item.itemId,
        kuantitas: parseFloat(item.quantity),
        totalHarga: parseFloat(item.total),
      })),
    };

    console.log('Transaksi Data to Submit:', transaksiData);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/transaksi/${userProfile.id}/create`,
        transaksiData,
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.data.status === 'success') {
        setModalMessage('Transaksi berhasil!');
        setIsModalVisible(true);
        // alert('Transaksi berhasil!');
        setCart([]);
      } else {
        alert('Error creating transaksi: ' + response.data.message);
      }
    } catch (error) {
      console.error('Error creating transaksi:', error.response?.data || error);
      alert('Terjadi kesalahan saat memproses transaksi.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-green-50 flex flex-col items-center justify-center px-6 py-10">
      {/* Modal Notification */}
      <ModalNotification
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        message={modalMessage}
      />
      {/* Pengepul Selection */}
      <h2 className="text-xl font-bold text-green-700 mb-4 flex items-center">
        <FaRecycle className="mr-2" /> Pilih Pengepul
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
        {pengepulList.map((pengepul) => (
          <motion.div
            key={pengepul.id}
            className={`p-4 border rounded-lg shadow-md ${
              selectedPengepul?.id === pengepul.id ? 'border-green-500 bg-green-50' : 'border-gray-300'
            }`}
            onClick={() => setSelectedPengepul(pengepul)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <img src={pengepul.thumbnailPengapul || '/placeholder.png'} alt="Pengepul Thumbnail" className="w-full h-40 object-cover rounded-md mb-3" />
            <h3 className="text-lg font-bold text-gray-800">{pengepul.namaBankSampah || pengepul.nama}</h3>
            <p className="text-sm text-gray-600">{pengepul.deskripsiBankSampah}</p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Rating:</strong> {pengepul.rating || 'N/A'}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Form */}
      {selectedPengepul && (
        <motion.div
          className="bg-white shadow-lg rounded-lg p-8 w-full max-w-xl mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-bold text-green-700 mb-4">Transaksi dengan {selectedPengepul.namaBankSampah || selectedPengepul.nama}</h3>

          {/* Select Item Sampah */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Jenis Sampah</label>
            <select
              value={selectedItemSampah}
              onChange={(e) => setSelectedItemSampah(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              <option value="">Pilih Jenis Sampah</option>
              {itemSampahList.map((item) => (
                <option key={item.id} value={item.id}>
                    {item.nama} - Rp {item.hargaPerKg.toLocaleString('id-ID')} per kg
                </option>
              ))}
            </select>
          </div>

          {/* Quantity */}
          <div className="mt-4">
            <label className="block text-gray-700 font-medium mb-2">Berat Sampah (kg)</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="0"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Masukkan berat sampah Anda"
            />
          </div>

          {/* Add to Cart */}
          <motion.button
            type="button"
            onClick={handleAddToCart}
            className="w-full bg-green-700 text-white px-4 py-3 rounded-lg font-semibold shadow-md hover:bg-green-800 transition-transform transform hover:scale-105 mt-4 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCartPlus className="mr-2" /> Tambah ke Keranjang
          </motion.button>

          {/* Cart */}
          {cart.length > 0 && (
            <div className="mt-6">
              <h4 className="text-lg font-bold text-green-700">Keranjang</h4>
              <ul className="space-y-2">
                {cart.map((item) => (
                  <li key={item.itemId} className="bg-gray-100 p-3 rounded-lg flex justify-between items-center">
                    <span>{item.itemName} - {item.quantity} kg</span>
                    <span>Rp {item.total.toLocaleString()}</span>
                    <button
                      onClick={() => handleRemoveFromCart(item.itemId)}
                      className="text-red-500 hover:text-red-700 ml-4 flex items-center"
                    >
                      <FaTrash className="mr-1" /> Hapus
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <LoadingButton
            type="button"
            onClick={handleSubmit}
            isLoading={isLoading}
          >
            <FaPaperPlane className="mr-2" /> Proses Transaksi
          </LoadingButton>
        </motion.div>
      )}
    </div>
  );
}

export default TransaksiBaru;
