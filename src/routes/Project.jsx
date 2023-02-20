import React from 'react'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import Projects from '../Projects/Projects'
import TabTitle from '../components/TabTitle'
import ToDo from '../Projects/ToDo'
import CaliHousePrice from '../Projects/CaliHousePrice'


const Project = () => {
  TabTitle('Project')

  return (
    <>
      <Nav />
      <ToDo />
      <CaliHousePrice />
      <Projects />
      <Footer />
    </>
  )
}

export default Project