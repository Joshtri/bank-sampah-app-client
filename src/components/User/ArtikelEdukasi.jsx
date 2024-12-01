import React from 'react';
import { FaBookOpen, FaArrowRight } from 'react-icons/fa';

const articles = [
  {
    id: 1,
    title: 'Pentingnya Daur Ulang Sampah Plastik',
    description: 'Pelajari bagaimana sampah plastik dapat didaur ulang untuk mengurangi dampak negatif terhadap lingkungan.',
    image: 'https://source.unsplash.com/400x300/?recycle,plastic',
    link: '/artikel/1',
  },
  {
    id: 2,
    title: 'Sampah Organik: Cara Mengubahnya Menjadi Kompos',
    description: 'Sampah organik bisa diubah menjadi pupuk kompos yang bermanfaat untuk tanaman. Simak caranya!',
    image: 'https://source.unsplash.com/400x300/?organic,waste',
    link: '/artikel/2',
  },
  {
    id: 3,
    title: 'Manfaat Ekonomi dari Pengelolaan Sampah',
    description: 'Tahukah Anda bahwa sampah dapat menjadi sumber penghasilan? Temukan manfaat ekonominya di sini.',
    image: 'https://source.unsplash.com/400x300/?economy,waste',
    link: '/artikel/3',
  },
  {
    id: 4,
    title: 'Mengurangi Sampah di Rumah Tangga',
    description: 'Langkah-langkah sederhana yang bisa dilakukan untuk mengurangi sampah di rumah Anda.',
    image: 'https://source.unsplash.com/400x300/?reduce,waste',
    link: '/artikel/4',
  },
];

function ArtikelEdukasi() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center py-10 px-6">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-green-700 flex items-center justify-center">
          <FaBookOpen className="mr-2 text-green-500" />
          Artikel Edukasi
        </h1>
        <p className="text-gray-600 mt-2">
          Temukan berbagai artikel menarik tentang pengelolaan sampah dan manfaatnya untuk lingkungan.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {articles.map((article, index) => (
          <div
            key={article.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105 duration-300"
          >
            {/* Image Section */}
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            {/* Content Section */}
            <div className="p-4">
              <h3 className="text-xl font-bold text-green-700 mb-2">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {article.description}
              </p>
              <a
                href={article.link}
                className="flex items-center text-green-600 hover:text-green-800 font-medium"
              >
                Baca Selengkapnya <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtikelEdukasi;
