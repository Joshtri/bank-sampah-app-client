import React, { useState } from 'react'
import TransaksiBaru from '../../components/User/TransaksiBaru'
import LayoutUser from '../LayoutUser';

export default function TransaksiBaruPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Default tertutup di mobile

  // Fungsi untuk toggle sidebar di mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <LayoutUser isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
        <TransaksiBaru/>
    </LayoutUser>
  )
}
