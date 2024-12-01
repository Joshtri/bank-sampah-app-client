import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { FaTrash } from 'react-icons/fa'; // Impor ikon React Icons
import 'leaflet/dist/leaflet.css';

// Buat ikon marker kustom menggunakan React Icons
const trashMarkerIcon = new L.DivIcon({
  html: `<div style="font-size: 24px; color: green;"><i>${FaTrash().props.children}</i></div>`,
  className: '', // Hilangkan kelas default Leaflet untuk styling
  iconSize: [30, 30], // Ukuran ikon
  iconAnchor: [15, 30], // Titik anchor (tengah ikon)
  popupAnchor: [0, -30], // Posisi popup relatif terhadap ikon
});

function JoinUsWithMap() {
  const bankSampahLocations = [
    { id: 1, name: "Bank Sampah Kupang", position: [-10.1788, 123.5820] },
    { id: 2, name: "Bank Sampah Ende", position: [-8.8440, 121.6625] },
    { id: 3, name: "Bank Sampah Maumere", position: [-8.6217, 122.2110] },
    { id: 4, name: "Bank Sampah Labuan Bajo", position: [-8.4871, 119.8857] },
    { id: 5, name: "Bank Sampah Rote", position: [-10.7417, 123.0623] },
  ];

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
          <div className="h-[500px] w-full">
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
                  icon={trashMarkerIcon} // Gunakan ikon React Icons
                >
                  <Popup>{location.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
        {/* Call-to-Action */}
        <div className="mt-8">
          <a
            href="/buat-akun"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition duration-300"
          >
            Bergabung Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}

export default JoinUsWithMap;
