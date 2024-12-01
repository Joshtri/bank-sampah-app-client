import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika untuk mendaftarkan akun
    console.log('Form data:', formData);
  };

  return (
    <div className="bg-green-50 min-h-screen flex items-center justify-center mt-10">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-600 text-center mb-6">
          Buat Akun
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="nama"
              className="block text-gray-700 font-medium mb-2"
            >
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
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
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
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Kata Sandi
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Masukkan kata sandi"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-medium mb-2"
            >
              Konfirmasi Kata Sandi
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Ulangi kata sandi"
              required
            />
          </div>
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
