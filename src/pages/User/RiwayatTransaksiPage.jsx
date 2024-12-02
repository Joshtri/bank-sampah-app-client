import React, { useState } from 'react'
import RiwayatTransaksi from '../../components/User/RiwayatTransaksi'
import LayoutUser from '../LayoutUser';

export default function RiwayatTransaksiPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Default tertutup di mobile

  // Fungsi untuk toggle sidebar di mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <LayoutUser isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
        <RiwayatTransaksi/>
    </LayoutUser>
  )
}
