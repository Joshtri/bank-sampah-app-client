import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Untuk navigasi setelah registrasi
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function RegisterPengepul() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    kataSandi: '',
    noTelepon: '',
    alamat: '',
    namaBankSampah: '',
    deskripsiBankSampah: '',
    dokumenPrasyarat: null, // Untuk mengunggah dokumen
    lokasi: null, // Tambahkan lokasi untuk menyimpan koordinat {latitude, longitude}
    lokasiUrl:null,
    provinsi: '',
    kabupaten: '',
    kecamatan: '',
    kelurahan: '',
  });

  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [subdistricts, setSubdistricts] = useState([]);

  useEffect(() => {
    // Fetch provinces on component mount
    axios.get('https://nt-territory-api.vercel.app/api/provinsi').then((response) => {
      setProvinces(response.data);
    });
  }, []);

  useEffect(() => {
    if (formData.provinsi) {
      // Fetch cities when a province is selected
      axios.get(`https://nt-territory-api.vercel.app/api/kabupaten/${formData.provinsi}`).then((response) => {
        setCities(response.data);
        setDistricts([]);
        setSubdistricts([]);
      });
    }
  }, [formData.provinsi]);

  useEffect(() => {
    if (formData.kabupaten) {
      // Fetch districts when a city is selected
      axios.get(`https://nt-territory-api.vercel.app/api/kecamatan/${formData.kabupaten}`).then((response) => {
        setDistricts(response.data);
        setSubdistricts([]);
      });
    }
  }, [formData.kabupaten]);

  useEffect(() => {
    if (formData.kecamatan) {
      // Fetch subdistricts when a district is selected
      axios.get(`https://nt-territory-api.vercel.app/api/kelurahan/${formData.kecamatan}`).then((response) => {
        setSubdistricts(response.data);
      });
    }
  }, [formData.kecamatan]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, dokumenPrasyarat: file }));
  };
  
  const handleLocationSelect = (location) => {
    setFormData((prevData) => ({
      ...prevData,
      lokasi: location,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi kataSandi minimal 6 karakter
    if (formData.kataSandi.length < 6) {
      alert('Kata sandi harus memiliki minimal 6 karakter');
      return;
    }

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }


    for (const key in formData) {
        if (key === 'lokasi') {
          // Kirim lokasi sebagai JSON string
          formDataToSend.append(key, JSON.stringify(formData[key]));
        } else {
          formDataToSend.append(key, formData[key]);
        }
    }

    try {
      // Mengirim data form ke backend
      const response = await axios.post('http://localhost:5000/api/v1/pengepul', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log('Pengepul registered:', response.data);

      // Setelah sukses, arahkan pengguna ke halaman status atau login
      alert('Pendaftaran berhasil! Status pendaftaran Anda sedang diproses.');
      navigate('/masuk'); // Pengalihan ke halaman login
    } catch (error) {
      console.error('Terjadi kesalahan saat pendaftaran:', error.response?.data || error.message);

      // Menampilkan pesan error jika ada
      if (error.response) {
        alert(`Error: ${error.response.data.error || 'Terjadi kesalahan pada server'}`);
      } else {
        alert('Terjadi kesalahan, silakan coba lagi.');
      }
    }
  };

    // Komponen untuk menangkap lokasi klik pada peta
  function LocationMarker() {
    const map = useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        handleLocationSelect({ latitude: lat, longitude: lng });
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return formData.lokasi ? (
      <Marker position={[formData.lokasi.latitude, formData.lokasi.longitude]}></Marker>
    ) : null;
  }

  return (
<div className="bg-green-50 min-h-screen mt-10 flex items-center justify-center">
  <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-4xl">
    <h1 className="text-2xl font-bold text-green-600 text-center mb-6">
      Daftar sebagai Pengepul
    </h1>
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nama */}
        <div>
          <label htmlFor="nama" className="block text-gray-700 font-medium mb-2">
            Nama
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Masukkan nama Anda"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Masukkan email Anda"
            required
          />
        </div>

        {/* Kata Sandi */}
        <div>
          <label htmlFor="kataSandi" className="block text-gray-700 font-medium mb-2">
            Kata Sandi
          </label>
          <input
            type="password"
            id="kataSandi"
            name="kataSandi"
            value={formData.kataSandi}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Masukkan kata sandi"
            required
          />
        </div>

        {/* Nomor Telepon */}
        <div>
          <label htmlFor="noTelepon" className="block text-gray-700 font-medium mb-2">
            Nomor Telepon
          </label>
          <input
            type="tel"
            id="noTelepon"
            name="noTelepon"
            value={formData.noTelepon}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Masukkan nomor telepon Anda"
            required
          />
        </div>

        {/* Alamat */}
        <div className="md:col-span-2">
          <label htmlFor="alamat" className="block text-gray-700 font-medium mb-2">
            Alamat
          </label>
          <textarea
            id="alamat"
            name="alamat"
            value={formData.alamat}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Masukkan alamat Anda"
            required
          />
        </div>

        {/* Nama Bank Sampah */}
        <div>
          <label htmlFor="namaBankSampah" className="block text-gray-700 font-medium mb-2">
            Nama Bank Sampah
          </label>
          <input
            type="text"
            id="namaBankSampah"
            name="namaBankSampah"
            value={formData.namaBankSampah}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Masukkan nama bank sampah Anda"
            required
          />
        </div>

        {/* Deskripsi Bank Sampah */}
        <div>
          <label htmlFor="deskripsiBankSampah" className="block text-gray-700 font-medium mb-2">
            Deskripsi Bank Sampah
          </label>
          <textarea
            id="deskripsiBankSampah"
            name="deskripsiBankSampah"
            value={formData.deskripsiBankSampah}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Jelaskan kegiatan atau layanan bank sampah Anda"
            required
          />
        </div>

        {/* Provinsi */}
        <div>
            <label htmlFor="provinsi" className="block text-gray-700 font-medium mb-2">Provinsi</label>
            <select
            id="provinsi"
            name="provinsi"
            value={formData.provinsi}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            required
            >
            <option value="">Pilih Provinsi</option>
            {provinces.map((provinsi) => (
                <option key={provinsi.id} value={provinsi.id}>{provinsi.nama}</option>
            ))}
            </select>
        </div>

        {/* Kabupaten */}
        <div>
            <label htmlFor="kabupaten" className="block text-gray-700 font-medium mb-2">Kabupaten/Kota</label>
            <select
            id="kabupaten"
            name="kabupaten"
            value={formData.kabupaten}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            required
            >
            <option value="">Pilih Kabupaten/Kota</option>
            {cities.map((kabupaten) => (
                <option key={kabupaten.id} value={kabupaten.id}>{kabupaten.nama}</option>
            ))}
            </select>
        </div>

        {/* Kecamatan */}
        <div>
            <label htmlFor="kecamatan" className="block text-gray-700 font-medium mb-2">Kecamatan</label>
            <select
            id="kecamatan"
            name="kecamatan"
            value={formData.kecamatan}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            required
            >
            <option value="">Pilih Kecamatan</option>
            {districts.map((kecamatan) => (
                <option key={kecamatan.id} value={kecamatan.id}>{kecamatan.nama}</option>
            ))}
            </select>
        </div>

        {/* Kelurahan */}
        <div>
            <label htmlFor="kelurahan" className="block text-gray-700 font-medium mb-2">Kelurahan</label>
            <select
            id="kelurahan"
            name="kelurahan"
            value={formData.kelurahan}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            required
            >
            <option value="">Pilih Kelurahan</option>
            {subdistricts.map((kelurahan) => (
                <option key={kelurahan.id} value={kelurahan.id}>{kelurahan.nama}</option>
            ))}
            </select>
        </div>

        {/* Pilih Lokasi */}
        {/* Map or Google Maps URL */}
        <div className="md:col-span-2">
            <label htmlFor="lokasi" className="block text-gray-700 font-medium mb-2">Pilih Lokasi Anda</label>
            <div className="flex flex-col gap-4">
            <div className="h-64 w-full border border-gray-300 rounded-lg overflow-hidden">
                <MapContainer
                center={[-10.1788, 123.5977]} // Koordinat Kupang
                zoom={12}
                className="h-full w-full"
                >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker />
                </MapContainer>
            </div>
            <small className="text-gray-600 block">Klik pada peta untuk memilih lokasi bank sampah Anda.</small>
            <div className="flex items-center gap-2">
                <small className="text-gray-600">Buka Google Maps, beri tanda titik lokasi Anda, lalu klik tombol 'Bagikan' atau 'Share' dan salin tautan tersebut. Tempelkan tautan tersebut di kolom ini.</small>
            </div>
            <div className="flex items-center gap-2">
                <label htmlFor="lokasiUrl" className="block text-gray-700 font-medium">Atau masukkan URL Google Maps</label>
                <input
                type="url"
                id="lokasiUrl"
                name="lokasiUrl"
                value={formData.lokasiUrl}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Masukkan URL titik lokasi dari Google Maps"
                />
            </div>
            </div>
        </div>

        {/* Unggah Dokumen Prasyarat */}
        {/* Unggah Dokumen Prasyarat */}
        <div className="mb-4">
        <label htmlFor="dokumenPrasyarat" className="block text-gray-700 font-medium mb-2">
            Unggah Berkas Prasyarat
        </label>
        <small className="text-gray-600">
            Mohon unggah dokumen berikut dalam format PDF, JPG, atau PNG (maksimal 5MB):
        </small>
        <ul className="list-disc ml-5 text-gray-600 mt-2">
            <li>
            <strong>Surat Izin Usaha:</strong> Bukti izin operasional resmi, seperti Surat Keterangan Usaha (SKU) atau dokumen lain yang relevan.
            </li>
            <li>
            <strong>Kartu Tanda Penduduk (KTP):</strong> Foto atau salinan identitas resmi pemilik usaha.
            </li>
            <li>
            <strong>Bukti Domisili atau Alamat Bank Sampah:</strong> Dokumen seperti surat domisili RT/RW atau bukti sewa tempat.
            </li>
            <li>
            <strong>Foto Tempat Usaha:</strong> Gambar lokasi fisik bank sampah Anda untuk validasi (opsional).
            </li>
            <li>
            <strong>Formulir Pernyataan:</strong> Dokumen pernyataan komitmen mengikuti aturan sistem Eco Bank (jika disediakan).
            </li>
        </ul>
        <input
            type="file"
            id="dokumenPrasyarat"
            name="dokumenPrasyarat"
            onChange={handleFileChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 mt-3"
            required
        />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 mt-6"
      >
        Daftar sebagai Pengepul
      </button>
    </form>
    <p className="text-center text-sm text-gray-500 mt-4">
      Sudah punya akun?{' '}
      <a href="/masuk" className="text-green-600 hover:underline">
        Masuk
      </a>
    </p>
  </div>
</div>

  );
}

export default RegisterPengepul;
