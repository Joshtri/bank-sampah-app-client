// ModalNotification.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

function ModalNotification({ isVisible, onClose, message }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        className="bg-white rounded-lg p-6 max-w-sm w-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center">
          <FaCheckCircle className="text-green-500 text-5xl mb-4" />
          <p className="text-lg font-semibold text-center mb-4">{message}</p>
          <p className="text-sm text-gray-600 text-center mb-6">
            Hasil timbangan akan disesuaikan saat berada di lokasi pengepul.
          </p>
          <button
            className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
            onClick={onClose}
          >
            Tutup
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default ModalNotification;
