import React from 'react'
import resume from '../../assets/resume.png'
import { ImDownload3 } from 'react-icons/im'
import { BsChat } from 'react-icons/bs'
import { AiOutlineEyeInvisible } from 'react-icons/ai'


const CV = () => {
  return (
    <div className='resume'>
      <button className='btn-double'>Resume
        <a href={resume} title='download' download > <ImDownload3 /></a>
        <a href={resume} title='view'>  <AiOutlineEyeInvisible /></a>
      </button>
      <a href="/contact" className='btn btn-primary'>Talk <BsChat /></a>
    </div>
  )
}

export default CV