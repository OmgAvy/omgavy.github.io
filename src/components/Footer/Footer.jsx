import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'
import {AiFillYoutube, AiFillGithub ,AiFillRedditCircle, AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer id='footer'>
      <Link to="/" className='footer__logo' title='avy' >αβγ</Link>
      <ul className="permalinks">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/#about">About</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="footer__socials">
        <a href="https://youtube.com/@omgavy"><AiFillYoutube/></a>
        <a href="https://github.com/omgavy"><AiFillGithub/></a>
        <a href="https://instagram.com/omgavy"><AiFillInstagram/></a>
        <a href="https://reddit.com/u/omgavy"><AiFillRedditCircle/></a>
        <a href="https://twitter.com/omgavy"><AiFillTwitterCircle/></a>
      </div>

      <div className="footer__copyright">
        <small>Since 2022 . . . </small><br />
        <small>No rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer