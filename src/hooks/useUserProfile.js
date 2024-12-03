// src/hooks/useUserProfile.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useUserProfile = () => {
  const [userProfile, setUserProfile] = useState({
    id: '',
    nama: '',
    email: '',
    noTelepon: '',
    alamat: '',
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token tidak ditemukan. Silakan login terlebih dahulu.');
      return;
    }

    console.log('Diperoleh token:', token);

    fetchUserProfile(token);
  }, []);

  const fetchUserProfile = async (token) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/user-profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Response Data:', response.data); // Debugging


      // Validasi data
      if (response.data && response.data.nama) {
        setUserProfile({
          id: response.data.id,
          nama: response.data.nama,
          email: response.data.email,
          noTelepon: response.data.noTelepon,
          alamat: response.data.alamat,
        });
        console.log(response.data.id);  
      } else {
        console.error('Data profil tidak valid:', response.data);
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat mengambil data profil:', error);
    }
  };

  return userProfile;
};

export default useUserProfile;
