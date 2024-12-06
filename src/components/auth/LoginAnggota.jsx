import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginAnggota() {
  const navigate = useNavigate();  // Untuk navigasi setelah login berhasil
  const [formData, setFormData] = useState({
    email: '',
    kataSandi: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Fungsi untuk menangani login
  const handleLogin = async (e) => {
    e.preventDefault();  // Mencegah reload halaman ketika form disubmit

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/anggota/login`, {
        email: formData.email,
        kataSandi: formData.kataSandi,
      });

      // Cek jika response berhasil dan token ada
      if (response.data.token) {
        // Simpan token ke localStorage
        localStorage.setItem('token', response.data.token);
        
        // Menampilkan pesan sukses atau arahkan ke halaman dashboard
        console.log('Login berhasil', response.data.message);

        // Arahkan ke halaman dashboard setelah login sukses
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      setError('Email atau kata sandi salah');
    }
  };

  return (
    <div className="bg-green-50 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-600 text-center mb-6">
          Masuk
        </h1>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
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

          <div className="mb-4">
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

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            Masuk
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Belum punya akun?{' '}
          <a href="/buat-akun" className="text-green-600 hover:underline">
            Daftar
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginAnggota;
