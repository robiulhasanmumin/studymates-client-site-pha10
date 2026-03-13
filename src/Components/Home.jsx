import React from 'react'
 import Banner from './Banner'
import TopStudyPartners from './TopStudyPartners'
 import HowItWorks from './HowItWorks'
import Statistics from './Stat'
import Testimonials from './TestMonials'
import ContactUs from './Contact'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TopStudyPartners></TopStudyPartners>
      <HowItWorks></HowItWorks>
      <Statistics></Statistics>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
     </div>
  )
}

export default Home