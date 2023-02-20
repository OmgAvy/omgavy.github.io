import React, { useState } from 'react'
import './nav.css'
import { Link } from 'react-router-dom';
import { RiMenuFill, RiHome2Line } from 'react-icons/ri'
import { FaTimes } from 'react-icons/fa'
import { BsFillChatLeftTextFill } from 'react-icons/bs'
import { AiOutlineProject } from 'react-icons/ai'




const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click)

  return (
    <nav className='navbar'>
      <Link to='/'>αβγ</Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li><Link to="/" title='Home'><RiHome2Line/></Link></li>
        <li><Link to="/project" title='Project'><AiOutlineProject/></Link></li>
        <li><Link to="/contact" title='Contact'><BsFillChatLeftTextFill/></Link></li>

      </ul>
      <div className="menu-bar" onClick={handleClick} >
        {click ?
          (<FaTimes className='menu-bar-icon' />) :
          (<RiMenuFill className='menu-bar-icon' />)
        }
      </div>
    </nav>
  )
};

export default Nav

