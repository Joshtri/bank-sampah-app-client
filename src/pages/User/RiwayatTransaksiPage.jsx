import React, { useEffect, useState } from 'react'
import RiwayatTransaksi from '../../components/User/RiwayatTransaksi/RiwayatTransaksi'
import LayoutUser from '../LayoutUser';

export default function RiwayatTransaksiPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Default tertutup di mobile

  // Fungsi untuk toggle sidebar di mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures this runs only once when the component mounts
  return (
    <LayoutUser isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
        <RiwayatTransaksi/>
    </LayoutUser>
  )
}
