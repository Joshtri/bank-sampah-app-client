import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { FaTrash } from 'react-icons/fa'; // Ikon React Icons
import 'leaflet/dist/leaflet.css';
import './map.css';

const trashMarkerIcon = new L.DivIcon({
  html: `<div style="font-size: 24px; color: green;"><i>${FaTrash().props.children}</i></div>`,
  className: '',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

function JoinUsWithMap() {
  const [showModal, setShowModal] = useState(false); // State untuk modal
  const bankSampahLocations = [
    { id: 1, name: "Bank Sampah Kupang", position: [-10.1788, 123.5820] },
    { id: 2, name: "Bank Sampah Ende", position: [-8.8440, 121.6625] },
    { id: 3, name: "Bank Sampah Maumere", position: [-8.6217, 122.2110] },
    { id: 4, name: "Bank Sampah Labuan Bajo", position: [-8.4871, 119.8857] },
    { id: 5, name: "Bank Sampah Rote", position: [-10.7417, 123.0623] },
  ];

  const handleJoinClick = () => {
    setShowModal(true); // Tampilkan modal saat tombol diklik
  };

  const handleCloseModal = () => {
    setShowModal(false); // Sembunyikan modal
  };

  return (
    <div className="bg-green-50 py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Title Section */}
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Mari Bergabung Bersama Kami
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Bergabunglah dengan Bank Sampah di Nusa Tenggara Timur untuk mendukung lingkungan yang bersih dan hijau.
        </p>
        {/* Map Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-[300px] w-full"> {/* Ubah tinggi dari 500px menjadi 300px */}
            <MapContainer
              center={[-8.6573, 121.0794]} // Pusat NTT
              zoom={7}
              className="h-full w-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {bankSampahLocations.map((location) => (
                <Marker
                  key={location.id}
                  position={location.position}
                  icon={trashMarkerIcon}
                >
                  <Popup>{location.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
        {/* Call-to-Action */}
        <div className="mt-8">
          <button
            onClick={handleJoinClick}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition duration-300"
          >
            Bergabung Sekarang
          </button>
        </div>
      </div>

      {/* Modal Pilihan */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative z-50">
            <h3 className="text-xl font-bold text-green-700 mb-4">Pilih Jenis Keanggotaan</h3>
            <p className="text-gray-600 mb-6">Silakan pilih peran Anda untuk bergabung dengan Eco Bank.</p>
            <div className="space-y-4">
              {/* Pilihan: Pengepul */}
              <a
                href="/buat-akun/pengepul"
                className="block bg-green-600 text-white text-center px-4 py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition duration-300"
              >
                Daftar sebagai Pengepul
              </a>
              {/* Pilihan: Masyarakat */}
              <a
                href="/buat-akun/masyarakat"
                className="block bg-blue-600 text-white text-center px-4 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300"
              >
                Daftar sebagai Masyarakat
              </a>
            </div>
            {/* Tombol Tutup */}
            <button
              onClick={handleCloseModal}
              className="mt-6 bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-700 transition duration-300"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default JoinUsWithMap;
