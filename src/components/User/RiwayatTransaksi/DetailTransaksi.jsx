// src/components/DetailTransaksi.js

import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const DetailTransaksi = ({ transaction, onClose }) => {
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
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Detail Transaksi</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 mb-4 float-right"
        >
          Close
        </button>

        <div className="space-y-4">
          <p><strong>Tanggal:</strong> {new Date(transaction.tanggalTransaksi).toLocaleString()}</p>
          <p><strong>Status:</strong> <span className={`${getStatusColor(transaction.statusTransaksi)} px-2 py-1 rounded-full text-xs font-semibold`}>{transaction.statusTransaksi === 'pending' ? <FaSpinner className="animate-spin inline-block mr-2" /> : null}{transaction.statusTransaksi.charAt(0).toUpperCase() + transaction.statusTransaksi.slice(1)}</span></p>
          <p><strong>Total Transaksi:</strong> Rp {transaction.totalTransaksi.toLocaleString()}</p>
          
          <div className="mt-4">
            <strong>Items Transaksi:</strong>
            <ul className="space-y-2 mt-2">
              {transaction.itemTransaksi.map((item, index) => (
                <li key={index}>
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
