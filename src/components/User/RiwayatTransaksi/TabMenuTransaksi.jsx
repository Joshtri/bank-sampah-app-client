import React from 'react';
import { FaCheckCircle, FaClock, FaTimesCircle, FaBan, FaList } from 'react-icons/fa';

function TabMenuTransaksi({ activeTab, setActiveTab }) {
  return (
    <div className="flex space-x-4 mb-8">
      {/* Semua */}
      <button
        onClick={() => setActiveTab('all')}
        className={`py-2 px-4 rounded-lg font-semibold transition ${
          activeTab === 'all' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
        }`}
      >
        <FaList className="inline-block mr-1" /> Semua
      </button>

      {/* Success */}
      <button
        onClick={() => setActiveTab('success')}
        className={`py-2 px-4 rounded-lg font-semibold transition ${
          activeTab === 'success' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
        }`}
      >
        <FaCheckCircle className="inline-block mr-1" /> Success
      </button>

      {/* Pending */}
      <button
        onClick={() => setActiveTab('pending')}
        className={`py-2 px-4 rounded-lg font-semibold transition ${
          activeTab === 'pending' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
        }`}
      >
        <FaClock className="inline-block mr-1" /> Pending
      </button>

      {/* Failed */}
      <button
        onClick={() => setActiveTab('failed')}
        className={`py-2 px-4 rounded-lg font-semibold transition ${
          activeTab === 'failed' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
        }`}
      >
        <FaTimesCircle className="inline-block mr-1" /> Failed
      </button>

      {/* Cancelled */}
      <button
        onClick={() => setActiveTab('cancelled')}
        className={`py-2 px-4 rounded-lg font-semibold transition ${
          activeTab === 'cancelled' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
        }`}
      >
        <FaBan className="inline-block mr-1" /> Cancelled
      </button>
    </div>
  );
}

export default TabMenuTransaksi;
