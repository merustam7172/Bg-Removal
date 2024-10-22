import React from 'react'
import Header from '../components/Header'
import BgSlider from '../components/BgSlider'
import Testimonials from '../components/Testimonials'
import Upload from '../components/Upload'
import Steps from '../components/Steps'

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <BgSlider/>
      <Testimonials/>
      <Upload/>

    </div>
  )
}

export default Home
