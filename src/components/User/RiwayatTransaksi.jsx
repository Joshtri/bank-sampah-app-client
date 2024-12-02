import React, { useState } from 'react';
import { FaTrash, FaCalendarAlt, FaCoins } from 'react-icons/fa';
import LayoutUser from '../../pages/LayoutUser';

const dummyData = [
  {
    id: 1,
    date: '2024-11-30',
    type: 'Plastik',
    weight: 5,
    total: 15000,
  },
  {
    id: 2,
    date: '2024-11-29',
    type: 'Kertas',
    weight: 3,
    total: 9000,
  },
  {
    id: 3,
    date: '2024-11-28',
    type: 'Logam',
    weight: 2,
    total: 12000,
  },
  {
    id: 4,
    date: '2024-11-27',
    type: 'Kaca',
    weight: 7,
    total: 21000,
  },
];


  
function RiwayatTransaksi() {

  return (

    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center px-6 py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        {/* Header */}
        <h1 className="text-2xl md:text-3xl font-bold text-green-700 mb-6 text-center flex items-center justify-center">
          <FaTrash className="text-green-500 mr-3" />
          Riwayat Transaksi
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          Berikut adalah daftar transaksi sampah yang telah Anda lakukan.
        </p>

        {/* Table Header */}
        <div className="grid grid-cols-4 text-gray-700 font-semibold border-b pb-3 mb-4">
          <div>Tanggal</div>
          <div>Jenis Sampah</div>
          <div>Berat (kg)</div>
          <div>Total Harga</div>
        </div>

        {/* List of Transactions */}
        <div className="space-y-4">
          {dummyData.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-4 items-center bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition duration-300 transform hover:scale-105"
            >
              <div className="flex items-center space-x-2 text-gray-600">
                <FaCalendarAlt className="text-green-500" />
                <span>{item.date}</span>
              </div>
              <div className="text-gray-700 font-medium">{item.type}</div>
              <div className="text-gray-700 font-medium">{item.weight} kg</div>
              <div className="text-green-700 font-bold">
                Rp {item.total.toLocaleString()}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-8 bg-green-100 p-4 rounded-lg shadow-inner">
          <h3 className="text-green-700 font-bold mb-2 text-lg">Ringkasan:</h3>
          <p className="text-gray-600">
            Total transaksi: <span className="font-bold">{dummyData.length}</span>
          </p>
          <p className="text-gray-600">
            Total pendapatan:{" "}
            <span className="font-bold text-green-700">
              Rp{" "}
              {dummyData.reduce((total, item) => total + item.total, 0).toLocaleString()}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RiwayatTransaksi;
