import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import RegisterAnggotaPage from './pages/auth/RegisterAnggotaPage'
import LoginAnggotaPage from './pages/auth/LoginAnggotaPage'
import DashboardPage from './pages/User/DashboardPage'
import PoinSayaPage from './pages/User/PoinSayaPage'
import TransaksiBaruPage from './pages/User/TransaksiBaruPage'
import RiwayatTransaksiPage from './pages/User/RiwayatTransaksiPage'
import ArtikelEdukasiPage from './pages/User/ArtikelEdukasiPage'
import KategoriSampahPage from './pages/User/KategoriSampahPage'


import ProtectedRoute from './components/ProtectedRoute'
import RegisterPengepulPage from './pages/auth/RegisterPengepulPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path="/buat-akun/masyarakat" element={<RegisterAnggotaPage />} />
          <Route path="/masuk" element={<LoginAnggotaPage />} />

          <Route path='/buat-akun/pengepul' element={<RegisterPengepulPage/>}/>

          <Route path='/dashboard'element={<ProtectedRoute element={DashboardPage}/>}/>

          <Route path='/poin-saya' element={<ProtectedRoute element={PoinSayaPage}/>}/>
          <Route path='/transaksi-baru' element={<ProtectedRoute element={TransaksiBaruPage}/>}/>
          <Route path='/riwayat-transaksi' element={<ProtectedRoute element={RiwayatTransaksiPage}/>}/>

          <Route path='/artikel-edukasi' element={<ProtectedRoute element={ArtikelEdukasiPage}/>}/>
          {/* <Route path='/artikel-edukasi' element={<ArtikelEdukasiPage/>}/> */}
          <Route path='/kategori-sampah' element={<ProtectedRoute element={KategoriSampahPage}/>}/>

          {/* Rute wildcard untuk halaman 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
