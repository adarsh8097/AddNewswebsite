import React from 'react'
import Header from '@/pages/Navbar';
import Footer from './Footer';
import RightSideContent from './RightSideContent';

const Layout = ({  children }) => {
  return (
    <div>
       <Header/>
       <main>{ children }</main>
      <Footer/>
       </div>
  )
}

export default Layout ;
