import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRecycle, FaTrashAlt, FaMoneyBillWave, FaHandsHelping, FaLeaf } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import Typical from 'react-typical';
// import { Typed } from 'react-typed'; // Coba cara ini
import Typewriter from 'typewriter-effect';

function MainContent() {
  const [showFirstParagraph, setShowFirstParagraph] = useState(true);

  // Interval untuk mengatur pergantian paragraf
  // Interval untuk mengatur pergantian paragraf
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstParagraph((prev) => !prev); // Toggle paragraf
    }, 8000); // Ganti setiap 5 detik
    return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  }, []);
  
  const SectionWithAnimation = ({ children }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    );
  };
  return (
    <div className="bg-green-50 min-h-screen">
{/* Hero Section */}
<section className="bg-green-600 text-white py-20 relative">
      <div className="container mx-auto px-4 text-center">
        {/* Animasi Typing */}
        {/* Animasi Typing */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        <h3 className="text-4xl font-bold mb-4">
          <Typewriter
            options={{
              strings: ['Selamat Datang di NatureCare', 'Solusi Digital Bank Sampah Anda'],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </h3>
        </motion.div>

        {/* Paragraf Tambahan */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-lg mb-6">
            NatureCare adalah platform digital inovatif yang membantu masyarakat, pengepul, dan pemerintah dalam mengelola sampah dengan cara yang lebih cerdas, efisien, dan ramah lingkungan.
          </p>
        </motion.div>

        {/* Tombol CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            to="/buat-akun/masyarakat"
            className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition duration-300"
          >
            Mulai Sekarang
          </Link>
        </motion.div>
      </div>
    </section>

      {/* Inspirasi Dibuatnya NatureCare */}
      <section className="py-16">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
            Inspirasi Dibuatnya NatureCare
          </h2>
          <p className="text-center text-gray-700 mb-12">
            NatureCare terinspirasi dari berbagai inisiatif pengelolaan sampah yang telah berhasil mendukung keberlanjutan lingkungan dan memberikan manfaat ekonomi bagi masyarakat.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gambar 1 */}
            <motion.div
              className="rounded-lg overflow-hidden shadow-lg bg-white"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <img
                src="https://dlh.semarangkota.go.id/wp-content/uploads/2021/02/Bank-sampah-image-nu.or_.id.jpg"
                alt="Bank Sampah Komunitas"
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-green-700">Bank Sampah Komunitas</h3>
                <p className="text-gray-600 text-sm">
                  Komunitas lokal yang berhasil mengubah sampah menjadi sumber daya berharga, menjadi inspirasi dalam pengembangan platform NatureCare.
                </p>
              </div>
            </motion.div>

            {/* Gambar 2 */}
            <motion.div
              className="rounded-lg overflow-hidden shadow-lg bg-white"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://klikhijau.com/wp-content/uploads/2022/12/Peduli-Warga-di-Kelurahan-Sudiang-Raya-Kota-Makassar-Bentuk-Bank-Sampah_11zon-768x576.jpeg"
                alt="Inisiatif Hijau"
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-green-700">Bank Sampah Unit Bragi Indah</h3>
                <p className="text-gray-600 text-sm">
                  Gerakan masyarakat dalam mendaur ulang sampah yang menginspirasi kami untuk menciptakan platform yang mempermudah kolaborasi pengelolaan sampah.
                </p>
              </div>
            </motion.div>

            {/* Gambar 3 */}
            <motion.div
              className="rounded-lg overflow-hidden shadow-lg bg-white"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src="https://www.bhuanajaya.desa.id/wp-content/uploads/images/bank-sampah-desa.webp"
                alt="Pengelolaan Sampah Kota"
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-green-700">Bank Sampah Bligo Beriman</h3>
                <p className="text-gray-600 text-sm">
                  Upaya pengelolaan sampah di kota yang mengurangi limbah dan meningkatkan kesadaran masyarakat, menjadi inspirasi besar untuk NatureCare.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>


      {/* Masalah Sampah di Kota Kupang */}
      <SectionWithAnimation>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-red-700 mb-8">
              Sampah yang Semakin Menumpuk di NTT, Khususnya di Kota Kupang
            </h2>
            <p className="text-center text-gray-700 mb-12">
              Sampah yang tidak dikelola dengan baik menjadi masalah besar di Kota Kupang. Banyak sampah yang tidak pada tempatnya, mencemari lingkungan, dan menurunkan kualitas hidup masyarakat.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                <img
                  src="https://rakyatntt.com/wp-content/uploads/2022/10/sampah-dekat-rujab-walkot.jpg"
                  alt="Sampah Menumpuk di Kupang"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-red-700 mb-2">Sampah menumpuk dekat rumah jabatan walikota Kupang</h3>
                  <p className="text-gray-600 text-sm">
                    Setiap hari, sampah yang menumpuk di Kota Kupang semakin bertambah. Sampah plastik dan limbah rumah tangga tersebar di berbagai titik yang seharusnya tidak ada sampah.
                  </p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                <img
                  src="https://asset-2.tstatic.net/kupang/foto/bank/images/jalur-40-kupang-3.jpg"
                  alt="Sampah di Sungai"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-red-700 mb-2">Dampak Terhadap Lingkungan</h3>
                  <p className="text-gray-600 text-sm">
                    Banyak sampah yang berakhir di sungai dan laut, mengancam ekosistem pesisir dan kesehatan masyarakat. Dengan pengelolaan yang tepat, kita bisa mengurangi dampak ini.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionWithAnimation>


      {/* Manfaat Penyaluran Sampah di NTT */}
      <section className="bg-green-100 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center text-green-700 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Manfaat Penyaluran Sampah ke Pengepul di NTT
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
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 text-center"
              whileHover={{ scale: 1.05 }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <FaRecycle className="text-green-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-green-600 mb-4">Menjaga Kebersihan Lingkungan</h3>
              <p>Pengelolaan sampah yang tepat akan membantu menjaga kebersihan lingkungan di NTT dan sekitarnya.</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 text-center"
              whileHover={{ scale: 1.05 }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <FaHandsHelping className="text-green-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-green-600 mb-4">Mendukung Perekonomian Lokal</h3>
              <p>Penyaluran sampah ke pengepul dapat menciptakan lapangan kerja dan memberikan penghasilan bagi masyarakat NTT.</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 text-center"
              whileHover={{ scale: 1.05 }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <FaLeaf className="text-green-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-green-600 mb-4">Mengurangi Dampak Lingkungan</h3>
              <p>Penanganan sampah yang baik mengurangi risiko pencemaran lingkungan, khususnya di wilayah pesisir NTT.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tentang Layanan */}
      <section className="py-16" id="tentang-layanan">
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
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 text-center"
              whileHover={{ scale: 1.05 }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <FaRecycle className="text-green-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-green-600 mb-4">Transaksi Mudah</h3>
              <p>Kelola transaksi sampah Anda dengan mudah dan cepat melalui platform kami yang ramah pengguna.</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 text-center"
              whileHover={{ scale: 1.05 }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <FaTrashAlt className="text-green-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-green-600 mb-4">Kategori Sampah</h3>
              <p>Jelajahi berbagai kategori sampah dan dapatkan nilai ekonomi dari sampah Anda.</p>
            </motion.div>
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
    </div>
  );
}

export default MainContent;
