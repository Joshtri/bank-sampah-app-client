// src/components/DetailTransaksi.js

import React from 'react';
import { FaSpinner, FaTimesCircle } from 'react-icons/fa';

const DetailTransaksi = ({ transaction, onClose }) => {
  // Function to determine the status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-300 text-yellow-800'; // Yellow for pending
      case 'completed':
        return 'bg-green-300 text-green-800'; // Green for completed
      case 'failed':
        return 'bg-red-300 text-red-800'; // Red for failed
      default:
        return 'bg-gray-300 text-gray-800'; // Default for unknown statuses
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-50 flex items-center justify-center">
      {/* Card container */}
      <div className="bg-white rounded-lg shadow-xl w-full sm:w-4/5 md:w-2/3 lg:w-1/2 p-6 transform transition-all">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-green-700">Detail Transaksi</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <FaTimesCircle size={24} />
          </button>
        </div>

        {/* Transaction Information */}
        <div className="space-y-6">
          {/* Transaction Date */}
          <p className="text-lg text-gray-700">
            <strong>Tanggal:</strong> {new Date(transaction.tanggalTransaksi).toLocaleString()}
          </p>

          {/* Transaction Status */}
          <p className="text-lg text-gray-700">
            <strong>Status:</strong>
            <span
              className={`${getStatusColor(transaction.statusTransaksi)} px-3 py-1 rounded-full text-xs font-semibold inline-block ml-2`}
            >
              {transaction.statusTransaksi === 'pending' ? (
                <FaSpinner className="animate-spin inline-block mr-2" />
              ) : null}
              {transaction.statusTransaksi.charAt(0).toUpperCase() + transaction.statusTransaksi.slice(1)}
            </span>
          </p>

          {/* Total Transaction */}
          <p className="text-lg text-gray-700">
            <strong>Total Transaksi:</strong> Rp {transaction.totalTransaksi.toLocaleString()}
          </p>

          {/* Items List */}
          <div className="mt-4">
            <h3 className="text-xl text-green-700 font-semibold">Items Transaksi</h3>
            <ul className="space-y-4 mt-2">
              {transaction.itemTransaksi.map((item, index) => (
                <li key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <p><strong>Nama Sampah:</strong> {item.itemSampah.nama}</p>
                  <p><strong>Kategori:</strong> {item.itemSampah.kategoriSampah.nama}</p>
                  <p><strong>Kuantitas:</strong> {item.kuantitas} kg</p>
                  <p><strong>Total Harga:</strong> Rp {item.totalHarga.toLocaleString()}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTransaksi;
