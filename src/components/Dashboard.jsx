import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LayoutUser from '../pages/LayoutUser'; // Import LayoutUser component
import { FaChartLine, FaStar } from 'react-icons/fa';
import useUserProfile from '../hooks/useUserProfile';  // Import custom hook

function Dashboard() {
  const userProfile = useUserProfile();  // Use custom hook to get user profile
  const [pengepulList, setPengepulList] = useState([
    {
      id: 1,
      nama: 'Pengepul A',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 4.5,
      location: 'Jl. Soekarno Hatta No. 12',
      experience: '5 tahun',
    },
    {
      id: 2,
      nama: 'Pengepul B',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 4.0,
      location: 'Jl. Diponegoro No. 8',
      experience: '3 tahun',
    },
    {
      id: 3,
      nama: 'Pengepul C',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 4.7,
      location: 'Jl. Gajah Mada No. 5',
      experience: '7 tahun',
    },
    {
      id: 4,
      nama: 'Pengepul D',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 4.3,
      location: 'Jl. Sudirman No. 10',
      experience: '4 tahun',
    },
  ]);

  useEffect(() => {
    // Fetch pengepul data from API
    const fetchPengepulData = async () => {
      try {
        const response = await axios.get('/api/pengepul');
        setPengepulList(response.data);
      } catch (error) {
        console.error('Error fetching pengepul data:', error);
      }
    };

    // Uncomment the line below when using real API data
    // fetchPengepulData();
  }, []);

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
            <div key={pengepul.id} className="border rounded-md p-4 shadow hover:shadow-lg transition transform hover:scale-105">
              <img src={pengepul.imageUrl} alt={pengepul.nama} className="w-full h-40 object-cover rounded-md mb-4" />
              <h4 className="text-xl font-bold text-green-700">{pengepul.nama}</h4>
              <p className="text-gray-700 mt-2">
                <strong>Rating:</strong> {pengepul.rating} / 5 <FaStar className="inline text-yellow-500 ml-1" />
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Lokasi:</strong> {pengepul.location}
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Pengalaman:</strong> {pengepul.experience}
              </p>
              <button className="bg-green-700 text-white px-4 py-2 mt-4 rounded-md hover:bg-green-800">
                Pilih Pengepul
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Profile Information */}
      <section className="bg-white shadow-sm p-6 rounded-md mb-8">
        <h3 className="text-2xl font-semibold text-green-700">Profil Pengguna</h3>
        <div className="mt-4">
          <p className="text-lg">
            <strong>Email:</strong> {userProfile.email}
          </p>
          <p className="text-lg">
            <strong>No. Telepon:</strong> {userProfile.noTelepon}
          </p>
          <p className="text-lg">
            <strong>Alamat:</strong> {userProfile.alamat}
          </p>
        </div>
      </section>

      {/* Grafik Riwayat Transaksi */}
      <section className="bg-white shadow-sm p-6 rounded-md mb-8">
        <h3 className="text-2xl font-semibold text-green-700">Grafik Riwayat Transaksi</h3>
        <div className="mt-4">
          <p className="text-lg">
            <FaChartLine className="mr-2" />
            Grafik atau statistik transaksi sampah Anda akan tampil di sini.
          </p>
        </div>
      </section>

      {/* Program Penukaran Poin */}
      <section className="bg-white shadow-sm p-6 rounded-md mb-8">
        <h3 className="text-2xl font-semibold text-green-700">Program Penukaran Poin</h3>
        <div className="mt-4">
          <p className="text-lg">
            Tukarkan poin Anda untuk mendapatkan berbagai hadiah menarik!
          </p>
          <button className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800">
            Lihat Hadiah
          </button>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
