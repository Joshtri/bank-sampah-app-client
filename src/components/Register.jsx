import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Untuk navigasi setelah registrasi

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    kataSandi: '',
    noTelepon: '',
    alamat: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi kataSandi minimal 6 karakter
    if (formData.kataSandi.length < 6) {
      alert("kataSandi harus memiliki minimal 6 karakter");
      return;
    }

    try {
      // Mengirim data form ke backend
      const response = await axios.post('http://localhost:5000/api/v1/anggota', formData);

      console.log('Member registered:', response.data);
      
      // Setelah sukses, arahkan pengguna ke halaman login atau halaman lainnya
      alert('Pendaftaran berhasil!');
      navigate('/masuk');  // Pengalihan ke halaman login setelah sukses registrasi
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

  return (
    <div className="bg-green-50 min-h-screen flex items-center justify-center mt-10">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-600 text-center mb-6">
          Buat Akun
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Nama */}
          <div className="mb-4">
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
          <div className="mb-4">
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

          {/* No Telepon */}
          <div className="mb-4">
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
          <div className="mb-4">
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

          {/* kataSandi */}
          <div className="mb-4">
            <label htmlFor="kataSandi" className="block text-gray-700 font-medium mb-2">
              Kata Sandi
            </label>
            <input
              type="text"
              id="kataSandi"
              name="kataSandi"
              value={formData.kataSandi}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Masukkan kata sandi"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            Daftar
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

export default Register;
