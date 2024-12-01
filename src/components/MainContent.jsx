import React from 'react';
import { Link } from 'react-router-dom';

function MainContent() {
  return (
    <div className="bg-green-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Selamat Datang di EcoBank</h1>
          <p className="text-lg mb-6">
            Solusi Anda untuk pengelolaan sampah yang ramah lingkungan dan bernilai ekonomi.
          </p>
          <Link
            to="/buat-akun"
            className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition duration-300"
          >
            Mulai Sekarang
          </Link>
        </div>
      </section>

      {/* Tentang Layanan */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
            Tentang Layanan Kami
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Transaksi Mudah</h3>
              <p>
                Kelola transaksi sampah Anda dengan mudah dan cepat melalui platform kami yang ramah pengguna.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Kategori Sampah</h3>
              <p>
                Jelajahi berbagai kategori sampah dan dapatkan nilai ekonomi dari sampah Anda.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Keuntungan Ekonomi</h3>
              <p>
                Tukarkan sampah Anda untuk mendapatkan uang tunai atau insentif lainnya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            Mulai Kelola Sampah Anda Hari Ini
          </h2>
          <p className="mb-6">
            Bergabunglah bersama kami untuk menciptakan lingkungan yang lebih bersih dan bernilai ekonomi.
          </p>
          <Link
            to="/transaksi"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition duration-300"
          >
            Lihat Transaksi
          </Link>
        </div>
      </section>
    </div>
  );
}

export default MainContent;
