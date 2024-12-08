// import React from 'react'
import Layout from '../Layout'
import LoginAnggota from '../../components/auth/LoginAnggota'
import { useEffect } from 'react';

function LoginPage() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures this runs only once when the component mounts
  return (
    <Layout>
        {/* <MainContent/> */}
        <LoginAnggota/>
    </Layout>
  )
}

export default LoginPage