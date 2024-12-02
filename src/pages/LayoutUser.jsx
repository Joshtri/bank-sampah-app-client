import React from 'react';
import Sidebar from '../components/partialsUser/Sidebar';  // Import Sidebar
import Navbar from '../components/partialsUser/Navbar';    // Import Navbar

export default function LayoutUser({ isSidebarOpen, toggleSidebar, children }) {
  return (
    <div className="flex min-h-screen bg-green-50">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-6 py-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
