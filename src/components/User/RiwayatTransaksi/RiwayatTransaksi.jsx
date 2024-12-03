// src/components/RiwayatTransaksi.js

import React, { useState, useEffect } from 'react';
import { FaTrash, FaCalendarAlt, FaCoins, FaSpinner } from 'react-icons/fa';
import useUserProfile from '../../../hooks/useUserProfile'; // Import custom hook
import axios from 'axios';
import DetailTransaksi from '../RiwayatTransaksi/DetailTransaksi';  // Import the new TransactionDetail component

function RiwayatTransaksi() {
  const userProfile = useUserProfile();
  
  // State for holding transaction data
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);  // Error state
  const [selectedTransaction, setSelectedTransaction] = useState(null);  // For detail view

  // Fetch transaction data based on userProfile.id
  useEffect(() => {
    if (userProfile.id) {
      const fetchTransactions = async () => {
        setLoading(true);
        setError(null);
        
        try {
          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/transaksi/user/${userProfile.id}`);
          setTransactions(response.data);  // Set the transaction data
        } catch (err) {
          setError('Gagal mengambil data transaksi.');  // Error handling
        } finally {
          setLoading(false);
        }
      };
      
      fetchTransactions();
    }
  }, [userProfile.id]);  // Fetch when userProfile.id changes

  // If loading, show loading indicator
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span>Loading...</span>
      </div>
    );
  }

  // If error, show error message
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span>{error}</span>
      </div>
    );
  }

  // Handle click on a transaction to view details
  const handleTransactionClick = (transaction) => {
    setSelectedTransaction(transaction);
  };

  // Handle closing the detail view
  const handleCloseDetails = () => {
    setSelectedTransaction(null);
  };

  // Helper function to get the status color
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
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center px-6 py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        {/* Header */}
        <h1 className="text-2xl md:text-3xl font-bold text-green-700 mb-6 text-center flex items-center justify-center">
          <FaTrash className="text-green-500 mr-3" />
          Riwayat Transaksi
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          Berikut adalah daftar transaksi sampah yang telah Anda lakukan.
        </p>

        {/* Table Header */}
        <div className="grid grid-cols-4 text-gray-700 font-semibold border-b pb-3 mb-4">
          <div>Tanggal</div>
          <div>Jenis Sampah</div>
          <div>Berat (kg)</div>
          <div>Total Harga</div>
        </div>

        {/* List of Transactions */}
        <div className="space-y-4">
          {transactions.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-4 items-center bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition duration-300 transform hover:scale-105 relative"
              onClick={() => handleTransactionClick(item)} // Click to see details
            >
              <div className="flex items-center space-x-2 text-gray-600">
                <FaCalendarAlt className="text-green-500" />
                <span>{new Date(item.tanggalTransaksi).toLocaleDateString()}</span> {/* Format date */}
              </div>
              <div className="text-gray-700 font-medium">
                {item.itemTransaksi.map(trans => trans.itemSampah.kategoriSampah.nama).join(', ')}
              </div>
              <div className="text-gray-700 font-medium">
                {item.itemTransaksi.reduce((total, trans) => total + trans.kuantitas, 0)} kg
              </div>
              <div className="text-green-700 font-bold">
                Rp {item.totalTransaksi.toLocaleString()}
              </div>

              {/* Status Indicator */}
              <div
                className={`absolute top-2 right-2 text-center px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(item.statusTransaksi)}`}
              >
                {item.statusTransaksi === 'pending' ? (
                  <FaSpinner className="animate-spin inline-block mr-2" />
                ) : null}
                {item.statusTransaksi.charAt(0).toUpperCase() + item.statusTransaksi.slice(1)}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-8 bg-green-100 p-4 rounded-lg shadow-inner">
          <h3 className="text-green-700 font-bold mb-2 text-lg">Ringkasan:</h3>
          <p className="text-gray-600">
            Total transaksi: <span className="font-bold">{transactions.length}</span>
          </p>
          <p className="text-gray-600">
            Total pendapatan:{" "}
            <span className="font-bold text-green-700">
              Rp{" "}
              {transactions.reduce((total, item) => total + item.totalTransaksi, 0).toLocaleString()}
            </span>
          </p>
        </div>
      </div>

      {/* Transaction Detail Modal */}
      {selectedTransaction && (
        <DetailTransaksi
          transaction={selectedTransaction}
          onClose={handleCloseDetails}
        />
      )}
    </div>
  );
}

export default RiwayatTransaksi;
