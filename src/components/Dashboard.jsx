import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LayoutUser from '../pages/LayoutUser'; // Import LayoutUser component
import { FaChartLine } from 'react-icons/fa';
import useUserProfile from '../hooks/useUserProfile';  // Import custom hook

function Dashboard() {
  const userProfile = useUserProfile();  // Use custom hook to get user profile

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

      {/* Profile Information */}
      <section className="bg-white shadow-sm p-6 rounded-md mb-8">
        <h3 className="text-2xl font-semibold text-green-700">Profil Pengguna</h3>
        <div className="mt-4">
          <p className="text-lg">
            <strong>Email:</strong> {userProfile.id}
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
