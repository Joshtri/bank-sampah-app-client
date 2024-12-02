import React, { useState } from 'react'
import KategoriSampah from '../../components/User/KategoriSampah'
import LayoutUser from '../LayoutUser';

export default function KategoriSampahPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Default tertutup di mobile

  // Fungsi untuk toggle sidebar di mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <LayoutUser isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
        <KategoriSampah/>
    </LayoutUser>
  )
}
