import React from 'react';
import { FaRecycle, FaLeaf, FaBox, FaGlassWhiskey, FaAppleAlt } from 'react-icons/fa';

const categories = [
  {
    id: 1,
    name: 'Plastik',
    description: 'Sampah plastik dapat didaur ulang menjadi barang baru.',
    icon: <FaRecycle className="text-green-700 text-3xl" />,
    bgColor: 'bg-green-50',
  },
  {
    id: 2,
    name: 'Organik',
    description: 'Sampah organik bisa diubah menjadi kompos untuk pertanian.',
    icon: <FaLeaf className="text-green-700 text-3xl" />,
    bgColor: 'bg-green-100',
  },
  {
    id: 3,
    name: 'Kertas',
    description: 'Sampah kertas dapat diolah kembali menjadi produk baru.',
    icon: <FaBox className="text-green-700 text-3xl" />,
    bgColor: 'bg-green-50',
  },
  {
    id: 4,
    name: 'Kaca',
    description: 'Kaca bekas dapat dilebur dan dibentuk kembali.',
    icon: <FaGlassWhiskey className="text-green-700 text-3xl" />,
    bgColor: 'bg-green-100',
  },
  {
    id: 5,
    name: 'Sisa Makanan',
    description: 'Sisa makanan dapat dimanfaatkan sebagai pakan ternak.',
    icon: <FaAppleAlt className="text-green-700 text-3xl" />,
    bgColor: 'bg-green-50',
  },
];

function KategoriSampah() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center py-10 px-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-green-700 flex items-center justify-center">
          <FaRecycle className="mr-2 text-green-500" />
          Kategori Sampah
        </h1>
        <p className="text-gray-600 mt-2">
          Pelajari berbagai jenis sampah dan cara pengolahannya.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ${category.bgColor} p-6 flex flex-col items-center text-center`}
          >
            {/* Icon */}
            <div className="mb-4">{category.icon}</div>
            {/* Name */}
            <h3 className="text-xl font-bold text-green-700 mb-2">{category.name}</h3>
            {/* Description */}
            <p className="text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KategoriSampah;
