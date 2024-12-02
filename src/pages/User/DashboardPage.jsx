import React, { useState } from 'react'
import Dashboard from '../../components/Dashboard'
import LayoutUser from '../LayoutUser'

function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Default tertutup di mobile

    // Fungsi untuk toggle sidebar di mobile
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  return (
    <LayoutUser isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
        <Dashboard/>
    </LayoutUser>
  )
}

export default DashboardPage