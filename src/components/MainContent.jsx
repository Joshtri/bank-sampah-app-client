import React from 'react';
import { Link } from 'react-router-dom';
import { FaRecycle, FaTrashAlt, FaMoneyBillWave, FaHandsHelping, FaLeaf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function MainContent() {

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
            Solusi Anda untuk pengelolaan sampah yang ramah lingkungan dan bernilai ekonomi, khususnya di NTT.
          </motion.p>
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

      {/* Inspirasi Bank Sampah */}
      <SectionWithAnimation>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
              Inspirasi dari Bank Sampah
            </h2>
            <p className="text-center text-gray-700 mb-12">
              Lihat bagaimana pengelolaan sampah dapat menciptakan manfaat ekonomi dan lingkungan.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Gambar 1 */}
              <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                <img
                  src="https://dlh.semarangkota.go.id/wp-content/uploads/2021/02/Bank-sampah-image-nu.or_.id.jpg"
                  alt="Bank Sampah Komunitas"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-green-700">Bank Sampah Komunitas</h3>
                  <p className="text-gray-600 text-sm">
                    Contoh pengelolaan sampah berbasis komunitas yang sukses mendukung lingkungan bersih.
                  </p>
                </div>
              </div>

              {/* Gambar 2 */}
              <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                <img
                  src="https://cdn.antaranews.com/cache/800x533/2020/12/21/WhatsApp-Image-2020-12-21-at-18.19.24.jpeg"
                  alt="Inisiatif Hijau"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-green-700">Inisiatif Hijau</h3>
                  <p className="text-gray-600 text-sm">
                    Gerakan masyarakat untuk mendaur ulang sampah menjadi barang yang bernilai.
                  </p>
                </div>
              </div>

              {/* Gambar 3 */}
              <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                <img
                  src="https://www.bankbjb.co.id/blog-content/uploads/2021/09/Bank-Sampah.jpg"
                  alt="Pengelolaan Sampah Kota"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-green-700">Pengelolaan Sampah Kota</h3>
                  <p className="text-gray-600 text-sm">
                    Program pengelolaan sampah di kota yang membantu mengurangi limbah ke TPA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionWithAnimation>

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
                  src="https://cdn.antaranews.com/cache/800x533/2021/12/16/sampah_kupang.jpg"
                  alt="Sampah Menumpuk di Kupang"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-red-700 mb-2">Sampah di Kota Kupang</h3>
                  <p className="text-gray-600 text-sm">
                    Setiap hari, sampah yang menumpuk di Kota Kupang semakin bertambah. Sampah plastik dan limbah rumah tangga tersebar di berbagai titik yang seharusnya tidak ada sampah.
                  </p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                <img
                  src="https://www.mongabay.co.id/wp-content/uploads/2019/08/sampah_di_sungai.jpg"
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
