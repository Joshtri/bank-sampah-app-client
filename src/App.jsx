import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/User/DashboardPage'
import PoinSayaPage from './pages/User/PoinSayaPage'
import TransaksiBaruPage from './pages/User/TransaksiBaruPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path="/buat-akun" element={<RegisterPage />} />
          <Route path="/masuk" element={<LoginPage />} />
          <Route path='/dashboard'element={<DashboardPage/>}/>

          <Route path='/poin-saya' element={<PoinSayaPage/>}/>
          <Route path='/transaksi-baru' element={<TransaksiBaruPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
