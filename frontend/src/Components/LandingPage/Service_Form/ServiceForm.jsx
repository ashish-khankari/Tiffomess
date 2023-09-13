import React from 'react'
import './ServiceForm.css'

const ServiceForm = () => {
  return (
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
  )
}

export default ServiceForm