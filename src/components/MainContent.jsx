import React from 'react';
import { Link } from 'react-router-dom';
import { FaRecycle, FaTrashAlt, FaMoneyBillWave } from 'react-icons/fa';
import { motion } from 'framer-motion';

function MainContent() {
  return (
    <div className="bg-green-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Selamat Datang di EcoBank
          </motion.h1>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Solusi Anda untuk pengelolaan sampah yang ramah lingkungan dan bernilai ekonomi.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/buat-akun"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition duration-300"
            >
              Mulai Sekarang
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tentang Layanan */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center text-green-700 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Tentang Layanan Kami
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            {/* Transaksi Mudah */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 text-center"
              whileHover={{ scale: 1.05 }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <FaRecycle className="text-green-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-green-600 mb-4">Transaksi Mudah</h3>
              <p>Kelola transaksi sampah Anda dengan mudah dan cepat melalui platform kami yang ramah pengguna.</p>
            </motion.div>

            {/* Kategori Sampah */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 text-center"
              whileHover={{ scale: 1.05 }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <FaTrashAlt className="text-green-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-green-600 mb-4">Kategori Sampah</h3>
              <p>Jelajahi berbagai kategori sampah dan dapatkan nilai ekonomi dari sampah Anda.</p>
            </motion.div>

            {/* Keuntungan Ekonomi */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 text-center"
              whileHover={{ scale: 1.05 }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <FaMoneyBillWave className="text-green-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-green-600 mb-4">Keuntungan Ekonomi</h3>
              <p>Tukarkan sampah Anda untuk mendapatkan uang tunai atau insentif lainnya.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold text-green-700 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Mulai Kelola Sampah Anda Hari Ini
          </motion.h2>
          <motion.p
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Bergabunglah bersama kami untuk menciptakan lingkungan yang lebih bersih dan bernilai ekonomi.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/transaksi"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition duration-300"
            >
              Lihat Transaksi
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default MainContent;
