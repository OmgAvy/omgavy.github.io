import React from 'react'
import Nav from '../components/Nav/Nav'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import TabTitle from '../components/TabTitle'
import AboutMe from '../components/AboutMe/AboutMe'

const Home = () => {
  TabTitle('Home')

  return (
    <>
      <Nav />
      <Header />      
      <AboutMe />
      <Footer />
    </>
  )
}

export default Home