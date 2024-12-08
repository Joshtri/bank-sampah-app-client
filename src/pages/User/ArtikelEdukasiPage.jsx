import React, { useEffect } from 'react'
import ArtikelEdukasi from '../../components/User/ArtikelEdukasi'
import LayoutUser from '../LayoutUser'

export default function ArtikelEdukasiPage() {

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures this runs only once when the component mounts
  return (
    <LayoutUser>
        <ArtikelEdukasi/>
    </LayoutUser>
  )
}
