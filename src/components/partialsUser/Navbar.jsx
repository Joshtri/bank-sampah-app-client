import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar({ isSidebarOpen, toggleSidebar }) {
  return (
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
          onClick={() => {
            localStorage.removeItem('token'); // Hapus token saat logout
            window.location.href = '/login'; // Redirect ke halaman login setelah logout
          }}
          className="bg-green-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-800"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
