import React from 'react'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import TabTitle from '../components/TabTitle'
import AboutMe from '../components/AboutMe/AboutMe'


const About = () => {
  TabTitle('About')

  return (
    <>
      <Nav />
      <AboutMe />
      <Footer />
    </>
  )
}

export default About