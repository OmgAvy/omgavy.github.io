import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi';
import {FaKaggle} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a  rel="noopener noreferrer" href="https://www.linkedin.com/in/avinash-prajapati-05b05a1bb/" target="_blank"><BsLinkedin/></a>
        <a rel="noopener noreferrer" href="https://github.com/omgavy" target="_blank"><FaGithub/></a>
        <a title='kaggle' rel="noopener noreferrer" href="https://kaggle.com/omgavy" target="_blank"><FaKaggle/></a>
        <a  rel="noopener noreferrer" href="https://twitter.com/omgavy" target="_blank"><FiTwitter/></a>
    </div>
  )
}

export default HeaderSocials