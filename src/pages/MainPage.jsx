// import React from 'react'
import { useEffect } from 'react';
import JoinUsWithMap from '../components/JoinUsWithMap'
import MainContent from '../components/MainContent'
import Layout from './Layout'

function MainPage() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures this runs only once when the component mounts
  return (
    <Layout>
        <MainContent/>
        <JoinUsWithMap />
    </Layout>
  )
}

export default MainPage