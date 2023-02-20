import React from 'react'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import Contacts from '../components/Contacts/Contacts'
import TabTitle from '../components/TabTitle'



const Contact = () => {
  TabTitle('Contact')
  return (
    <>
      <Nav />
      <Contacts />
      <Footer />
    </>
  )
}

export default Contact