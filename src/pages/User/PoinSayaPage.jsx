import React, { useState } from 'react'
import Layout from '../Layout'
import PoinSaya from '../../components/User/PoinSaya'
import LayoutUser from '../LayoutUser';

export default function PoinSayaPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Default tertutup di mobile

  // Fungsi untuk toggle sidebar di mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    // <Layout>
    <LayoutUser isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
        <PoinSaya/>
    </LayoutUser>
    // </Layout>
  )
}
