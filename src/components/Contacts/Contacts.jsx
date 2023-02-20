import React, { useRef } from 'react'
import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp, BsDiscord} from 'react-icons/bs'
import emailjs from 'emailjs-com'


const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_exco30c', 'template_s7awoqs', form.current, 'aKVETwDctUpJXAsjZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h1>Contact</h1>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h6>unavailable</h6>
            <a href="mailto:dummy@gam.com" target="_blank" rel='noreferrer'>send a mail</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Message</h4>
            <h6>whatsapp</h6>
            <a href="https://wa.me/+918369427935" target="_blank" rel='noreferrer'>send a message</a>
          </article>

          <article className="contact__option">
            <BsDiscord className='contact__option-icon'/>
            <h4>Message</h4>
            <h6>discord</h6>
            <a href="https://discordapp.com/users/611516000638337029" target="_blank" rel='noreferrer'>send a message</a>
          </article>

          {/* <article className="contact__option">
            <FiPhoneCall className='contact__option-icon'/>
            <h4>Call</h4>
            <h5>+93435345565</h5>
            <a href="tel:+91234566892" target="_blank">call us</a>
          </article> */}

        </div>
        {/* END OF CONTACT */}
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea  name="message" rows="10" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts