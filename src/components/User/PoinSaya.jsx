import React, { useState, useEffect } from 'react';
import { FaCoins } from 'react-icons/fa';

function PoinSaya() {
  const [points, setPoints] = useState(0); // Poin awal
  const [displayPoints, setDisplayPoints] = useState(0); // Poin animasi

  // Simulasi pengambilan poin dari server
  useEffect(() => {
    const fetchedPoints = 1500; // Contoh poin yang diambil dari server
    const animationDuration = 2000; // Durasi animasi dalam milidetik
    let currentPoints = 0;

    const interval = setInterval(() => {
      currentPoints += 50; // Tambah poin secara bertahap
      if (currentPoints >= fetchedPoints) {
        clearInterval(interval);
        setDisplayPoints(fetchedPoints);
      } else {
        setDisplayPoints(currentPoints);
      }
    }, animationDuration / (fetchedPoints / 50));

    setPoints(fetchedPoints);
  }, []);

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center px-6 py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
          Poin Saya
        </h1>
        <p className="text-gray-600 mb-6">
          Berikut adalah jumlah poin yang telah Anda kumpulkan dari transaksi.
        </p>

        {/* Poin Display */}
        <div className="relative bg-green-100 p-6 rounded-lg shadow-inner">
          <FaCoins className="absolute text-yellow-500 text-5xl -top-8 left-1/2 transform -translate-x-1/2" />
          <p className="text-5xl md:text-6xl font-bold text-green-700">
            {displayPoints}
          </p>
          <p className="text-sm text-gray-500 mt-2">Total Poin Anda</p>
        </div>

        {/* Info Section */}
        <div className="mt-8 text-left">
          <h2 className="text-lg font-bold text-green-700 mb-2">Manfaatkan Poin Anda</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Tukar poin dengan voucher belanja.</li>
            <li>Gunakan poin untuk donasi lingkungan.</li>
            <li>Nikmati hadiah eksklusif lainnya.</li>
          </ul>
        </div>

        {/* Call to Action */}
        <button
          onClick={() => alert('Segera datang!')}
          className="mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-transform duration-300 transform hover:scale-105"
        >
          Lihat Penawaran
        </button>
      </div>
    </div>
  );
}

export default PoinSaya;
