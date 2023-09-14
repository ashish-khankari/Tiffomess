import React from 'react'
import What from '../LandingPage/WhatTheySay/What'
import ServiceForm from '../LandingPage/Service_Form/ServiceForm'
import Sect4 from '../LandingPage/Sect4/Sect4'
import Header from '../LandingPage/Header/Header'
import Menu from '../LandingPage/Menu/Menu'
import HeadSection from '../LandingPage/HeadSection/HeadSection'
import Dishes from '../LandingPage/Dishes/Dishes'
const Home = () => {
  return (
    <div>
      <Header />
      <HeadSection/>
      <Dishes/>
      <Sect4 />
      <Menu/>
      <What />
      <ServiceForm />
    </div>
  )
}

export default Home