import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LayoutUser from '../pages/LayoutUser';
import { FaChartLine, FaStar } from 'react-icons/fa';
import useUserProfile from '../hooks/useUserProfile';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const userProfile = useUserProfile();
  const [pengepulList, setPengepulList] = useState([]);
  const [selectedPengepul, setSelectedPengepul] = useState(null); // Untuk pengepul yang dipilih
  const [showModal, setShowModal] = useState(false); // State untuk modal
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPengepulData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/pengepul-diterima`);
        setPengepulList(response.data.data);
      } catch (error) {
        console.error('Error fetching pengepul data:', error);
      }
    };

    fetchPengepulData();
  }, []);

  // Fungsi untuk membuka modal
  const handlePilihPengepul = (pengepul) => {
    setSelectedPengepul(pengepul);
    setShowModal(true);
  };

  // Fungsi untuk menutup modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Fungsi untuk navigasi ke transaksi baru
  const handleConfirm = () => {
    navigate('/transaksi-baru', { state: { selectedPengepul } }); // Kirim data pengepul ke halaman transaksi baru
  };

  return (
    <>
      {/* Welcome Section */}
      <section className="text-center mb-8">
        <h2 className="text-3xl font-bold text-green-700">
          Selamat Datang, {userProfile && userProfile.nama ? userProfile.nama : 'Pengguna'}!
        </h2>
        <p className="text-gray-700 mt-2">
          Kelola transaksi, lihat riwayat sampah, dan jadilah bagian dari lingkungan bersih dan hijau.
        </p>
      </section>

      {/* Pengepul List Section */}
      <section className="bg-white shadow-sm p-6 rounded-md mb-8">
        <h3 className="text-2xl font-semibold text-green-700">Pilih Pengepul</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pengepulList.map((pengepul) => (
            <div
              key={pengepul.id}
              className="border rounded-md p-4 shadow hover:shadow-lg transition transform hover:scale-105"
            >
              <img
                src={pengepul.thumbnailPengapul || 'https://via.placeholder.com/150'}
                alt={pengepul.nama}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-bold text-green-700">{pengepul.nama}</h4>
              <p className="text-gray-700 mt-2">
                <strong>Rating:</strong> {pengepul.rating || 'N/A'} <FaStar className="inline text-yellow-500 ml-1" />
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Lokasi:</strong> {pengepul.alamat || 'Lokasi tidak tersedia'}
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Deskripsi:</strong> {pengepul.deskripsiBankSampah || 'Tidak ada deskripsi'}
              </p>
              <button
                className="bg-green-700 text-white px-4 py-2 mt-4 rounded-md hover:bg-green-800"
                onClick={() => handlePilihPengepul(pengepul)} // Buka modal
              >
                Pilih Pengepul
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Konfirmasi */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Konfirmasi Transaksi</h3>
            <p className="text-gray-600 mb-6">
              Apakah Anda yakin ingin melakukan transaksi dengan pengepul{' '}
              <span className="font-bold text-green-700">{selectedPengepul?.nama}</span>?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                onClick={handleCloseModal}
              >
                Batal
              </button>
              <button
                className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800"
                onClick={handleConfirm}
              >
                Ya, Lanjutkan
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;
