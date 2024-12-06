import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaTrash, FaList, FaTags, FaUserAlt, FaMapMarkerAlt, FaBook } from 'react-icons/fa';

export default function Sidebar({ isSidebarOpen, toggleSidebar }) {
  return (
    <aside
      className={`fixed md:relative top-0 left-0 min-h-screen w-64 bg-green-700 text-white shadow-lg transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-64'
      } md:translate-x-0 transition-transform duration-300 ease-in-out z-50 overflow-y-auto`} // Menggunakan min-h-screen untuk memastikan sidebar setinggi layar
    >
      <div className="p-4 border-b border-green-600">
        <h2 className="text-2xl font-bold text-center">Eco Bank</h2>
      </div>
      <nav className="mt-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/transaksi-baru"
              className="flex items-center p-4 hover:bg-green-800 rounded-md"
            >
              <FaBars className="mr-3" />
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
  );
}
