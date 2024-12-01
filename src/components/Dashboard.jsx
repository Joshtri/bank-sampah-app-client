import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaTrash, FaList, FaTags, FaUserAlt, FaMapMarkerAlt, FaBook } from 'react-icons/fa';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Default tertutup di mobile

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-green-50">
      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-0 left-0 h-screen w-64 bg-green-700 text-white shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-64'
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4 border-b border-green-600">
          <h2 className="text-2xl font-bold text-center">Bank Sampah</h2>
        </div>
        <nav className="mt-4">
          <ul className="space-y-2">
            <li>
              <Link
                to="/transaksi-baru"
                className="flex items-center p-4 hover:bg-green-800 rounded-md"
              >
                <FaTrash className="mr-3" />
                Transaksi Baru
              </Link>
            </li>
            <li>
              <Link
                to="/riwayat-transaksi"
                className="flex items-center p-4 hover:bg-green-800 rounded-md"
              >
                <FaList className="mr-3" />
                Riwayat Transaksi
              </Link>
            </li>
            <li>
              <Link
                to="/kategori-sampah"
                className="flex items-center p-4 hover:bg-green-800 rounded-md"
              >
                <FaTags className="mr-3" />
                Kategori Sampah
              </Link>
            </li>
            <li>
              <Link
                to="/poin-saya"
                className="flex items-center p-4 hover:bg-green-800 rounded-md"
              >
                <FaUserAlt className="mr-3" />
                Poin Saya
              </Link>
            </li>
            <li>
              <Link
                to="/artikel-edukasi"
                className="flex items-center p-4 hover:bg-green-800 rounded-md"
              >
                <FaBook className="mr-3" />
                Artikel Edukasi
              </Link>
            </li>
            <li>
              <Link
                to="/lokasi-bank-sampah"
                className="flex items-center p-4 hover:bg-green-800 rounded-md"
              >
                <FaMapMarkerAlt className="mr-3" />
                Lokasi Bank Sampah
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between md:justify-end">
          <button
            onClick={toggleSidebar}
            className="text-green-700 text-2xl md:hidden focus:outline-none"
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <h1 className="hidden md:block text-xl font-bold text-green-700 mr-auto ml-4">
            Dashboard
          </h1>
          <div>
            <Link
              to="/profil"
              className="text-green-700 hover:text-green-800 font-medium mx-4"
            >
              Profil Saya
            </Link>
            <button
              onClick={() => alert('Anda telah logout!')}
              className="bg-green-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-800"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Welcome Section */}
        <main className="flex-1 container mx-auto px-6 py-8">
          <section className="text-center mb-8">
            <h2 className="text-3xl font-bold text-green-700">
              Selamat Datang, [Nama User]!
            </h2>
            <p className="text-gray-700 mt-2">
              Kelola transaksi, lihat riwayat sampah, dan jadilah bagian dari lingkungan bersih dan hijau.
            </p>
          </section>

          {/* Features Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-green-700">Transaksi Baru</h3>
              <p className="text-gray-600 mt-2">Tambah transaksi sampah Anda.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-green-700">Riwayat Transaksi</h3>
              <p className="text-gray-600 mt-2">Lihat riwayat transaksi Anda.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-green-700">Kategori Sampah</h3>
              <p className="text-gray-600 mt-2">Jelajahi kategori sampah.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
