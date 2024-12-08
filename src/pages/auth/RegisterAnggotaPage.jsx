// import React from 'react'
import Layout from '../Layout'
import RegisterAnggota from '../../components/auth/RegisterAnggota'
import { useEffect } from 'react';

function RegisterPage() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures this runs only once when the component mounts
  return (
    <Layout>
        <RegisterAnggota/>
    </Layout>
  )
}

export default RegisterPage