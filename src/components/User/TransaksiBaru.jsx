import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

function TransaksiBaru() {
  const [quantity, setQuantity] = useState(0); // Jumlah sampah (kg)
  const [pricePerKg] = useState(3000); // Harga per kg
  const [total, setTotal] = useState(0); // Total harga

  // Fungsi untuk menghitung total
  const handleQuantityChange = (e) => {
    const value = e.target.value ? parseInt(e.target.value) : 0;
    setQuantity(value);
    setTotal(value * pricePerKg);
  };

  // Fungsi untuk submit transaksi
  const handleSubmit = () => {
    alert(`Transaksi berhasil! Anda menjual ${quantity} kg sampah senilai Rp ${total.toLocaleString()}.`);
    setQuantity(0);
    setTotal(0);
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-6 py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-xl">
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
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              <option value="plastik">Plastik</option>
              <option value="kertas">Kertas</option>
              <option value="logam">Logam</option>
              <option value="kaca">Kaca</option>
              <option value="organik">Organik</option>
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

          {/* Output: Total Harga */}
          <div className="bg-green-100 p-4 rounded-lg shadow-inner flex items-center justify-between">
            <span className="text-gray-700 font-medium">Total Harga</span>
            <span className="text-xl font-bold text-green-700">
              Rp {total.toLocaleString()}
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-green-700 text-white px-4 py-3 rounded-lg font-semibold shadow-md hover:bg-green-800 transition-transform transform hover:scale-105"
          >
            Proses Transaksi
          </button>
        </form>
      </div>
    </div>
  );
}

export default TransaksiBaru;
