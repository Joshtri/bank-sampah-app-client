import PropTypes from 'prop-types'
import CustomNavbar from '../components/partials/CustomNavbar'
import Footer from '../components/partials/Footer'
// import React from 'react'

function Layout({children}) {
  return (
    <>
        <CustomNavbar/>
            <div className=''>
                {children}
            </div>
        <Footer/>
    </>
  )

}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout