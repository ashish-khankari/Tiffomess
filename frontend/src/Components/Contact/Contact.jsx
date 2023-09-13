import React from 'react'
import './Contact.css'
import Header from '../LandingPage/Header/Header'

const Contact = () => {
  return (
    <div className='contact'>
      <Header/>
      <div className='headerSection'>
        <div className='header'>
          <div className='heading1'>
            <h1>Contact Us </h1>
          </div>
          <div className='heading2'>
              <p>We’d love to hear from you! Please don’t hesitate
                <span> to reach out to us with any questions, comments,</span> or concerns – we’re here to help.</p>
          </div>
        </div>

      </div>

      <div className="ourLocation">
        <p className='title'>OUR LOCATION</p>
        <p className='address'>City Center Mall, Nashik, Maharashtra</p>
        <p className='info'>Order your Tiffin service from Tiffome today and experience the flavors of home. Simply
          <div> <span>visit our website to place your order and enjoy the convenience of our Tiffin delivery</span> </div>
          service.</p>

          <button>Rate Us</button>

          <p>Get in Touch:</p>
          <p>+91 7387285044</p>
          <a href="mailto:" className='mail'>ashishkhankari0922@gmail.com</a>
      </div>



      <div className="contact-container">
        <div className="image-container">
          <img src="https://images.pexels.com/photos/17870831/pexels-photo-17870831/free-photo-of-salad-in-box-next-to-laptop.jpeg" alt="Salad and Laptop" />
        </div>
        <div className="form-container">
          <h1>Send Us A Message</h1>
          <p>If you have any questions or feedback, please fill out the contact form on our website, and we will get back to you as soon as possible.</p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder='Enter Name*' />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder='Enter Verified Email*'/>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" required placeholder='Add a Message*' />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className="footer">

      </div>
    </div>
  )
}

export default Contact