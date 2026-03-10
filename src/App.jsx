import React from 'react'
import Navbar2 from './components/Navbar2'
import Hero2 from './components/Hero2'
import Clients from './components/Clients'
import Projects from './components/Projects'
import Why from './components/Why'
import Services from './components/Services'
import About2 from './components/About2'
import Experiences from './components/Experiences'
import Approach from './components/Approach'
import Pricing from './components/Pricing'
import Team from './components/Team'
import Faq from './components/Faq'
import Trends from './components/Trends'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Animation from './components/Animation'


const App = () => {
  return (
    <div className='overflow-hidden w-[99.1vw] bg-gray-200'>



      <Navbar2  />
      <Hero2 />
      <Clients />
      <Projects />
      <Why />
      <Services />
      <About2 />
      <Experiences />
      <Approach />
      <Pricing />
      <Team />
      <Faq />
      <Contact />
      <Footer />
      
    </div>
  )
}

export default App
