import React from 'react'
import './header.css'
import CV from './CV'
import HeaderSocial from './HeaderSocials'
import img from './../../assets/goal.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className='header__left'>
          <img src={img} alt='me' />
        </div>
        <div className='header__right'>
          <h3>Hello I'm</h3>
          <h1>Avinash Prajapati</h1>
          <h5>get in touch...</h5>
          {/* <h3 className="text-light">Data Analyst</h3> */}
          <HeaderSocial />
          <CV />
        </div>
      </div>
      <div className='scroll__down'>
        <p>... scroll down ...</p>
      </div>
    </header>
  )
}

export default Header;