import React, { useState, useEffect } from 'react';
import { FaTrash, FaCalendarAlt, FaMapMarkedAlt, FaTruck } from 'react-icons/fa';
import useUserProfile from '../../../hooks/useUserProfile';
import axios from 'axios';
import DetailTransaksi from '../RiwayatTransaksi/DetailTransaksi';
import StatusIndicator from '../../shared/StatusIndicator';
import TabMenuTransaksi from './TabMenuTransaksi'; // Import TabMenuTransaksi

function RiwayatTransaksi() {
  const userProfile = useUserProfile();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [activeTab, setActiveTab] = useState('all'); // Menyimpan status tab aktif

  // Fetch transaction data based on userProfile.id
  useEffect(() => {
    if (userProfile.id) {
      const fetchTransactions = async () => {
        setLoading(true);
        setError(null);

        try {
          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/transaksi/user/${userProfile.id}`);
          setTransactions(response.data);
        } catch (err) {
          setError('Gagal mengambil data transaksi.');
        } finally {
          setLoading(false);
        }
      };

      fetchTransactions();
    }
  }, [userProfile.id]);

  // Filter transaksi berdasarkan tab aktif
  const filteredTransactions = transactions.filter((transaction) =>
    activeTab === 'all' ? true : transaction.statusTransaksi === activeTab
  );

  // Handle click on a transaction to view details
  const handleTransactionClick = (transaction) => {
    setSelectedTransaction(transaction);
  };

  // Handle closing the detail view
  const handleCloseDetails = () => {
    setSelectedTransaction(null);
  };

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

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center px-6 py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">


        {/* Header */}
        <h1 className="text-lg md:text-2xl font-bold text-green-700 mb-4 flex items-center justify-center">
          <FaTrash className="text-green-500 mr-3" />
          Riwayat Transaksi
        </h1>

        
        {/* Divider */}
        <hr className="my-6 border-gray-300 w-full" />

        {/* Tab Menu Transaksi */}
        <TabMenuTransaksi activeTab={activeTab} setActiveTab={setActiveTab} />


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
          {filteredTransactions.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105 relative"
            >
              <div className="grid grid-cols-5 gap-4 items-center">
                {/* Tanggal Transaksi */}
                <div className="flex items-center space-x-2 text-gray-600">
                  <FaCalendarAlt className="text-green-500" />
                  <span>{new Date(item.tanggalTransaksi).toLocaleDateString()}</span>
                </div>

                {/* Jenis Sampah */}
                <div className="text-gray-700 font-medium">
                  {item.itemTransaksi.map((trans) => trans.itemSampah.kategoriSampah.nama).join(', ')}
                </div>

                {/* Berat Sampah */}
                <div className="text-gray-700 font-medium">
                  {item.itemTransaksi.reduce((total, trans) => total + trans.kuantitas, 0)} kg
                </div>

                {/* Total Harga */}
                <div className="text-green-700 font-bold">
                  Rp {item.totalTransaksi.toLocaleString()}
                </div>

                {/* Status */}
                <StatusIndicator status={item.statusTransaksi} />
              </div>

              {/* Informasi Pengepul */}
              <div className="mt-2 text-sm text-gray-500 flex items-center justify-between border-t pt-2">
                <span>
                  <strong>Pengepul:</strong> {item.pengepul?.namaBankSampah || 'N/A'}
                </span>
                <span className="text-green-600">
                  <FaMapMarkedAlt className="inline-block mr-1" />
                  {item.pengepul?.lokasi || 'Lokasi tidak tersedia'}
                </span>
              </div>

              {/* Button Antar Sekarang dan Lihat Detail */}
              <div className="mt-4 text-end flex justify-end items-center space-x-4">
                {item.statusTransaksi !== 'success' && item.pengepul?.lokasiUrl && (
                  <a
                    href={item.pengepul.lokasiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-green-600 text-white py-1 px-3 text-sm rounded-lg shadow-md hover:bg-green-700 transition-transform transform hover:scale-105"
                  >
                    <FaTruck className="mr-2" /> Antar Sekarang
                  </a>
                )}
                <button
                  onClick={() => handleTransactionClick(item)}
                  className="inline-flex items-center justify-center bg-blue-600 text-white py-1 px-3 text-sm rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
                >
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-8 bg-green-100 p-4 rounded-lg shadow-inner">
          <h3 className="text-green-700 font-bold mb-2 text-lg">Ringkasan:</h3>
          <p className="text-gray-600">
            Total transaksi: <span className="font-bold">{filteredTransactions.length}</span>
          </p>
          <p className="text-gray-600">
            Total pendapatan:{" "}
            <span className="font-bold text-green-700">
              Rp{" "}
              {filteredTransactions.reduce((total, item) => total + item.totalTransaksi, 0).toLocaleString()}
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
