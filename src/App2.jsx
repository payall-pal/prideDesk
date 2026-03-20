
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
import Contact from './components/Contact'
import Footer from './components/Footer'


const App2 = () => {
  return (
    <div>
      
      <section id="home">
        <Hero2 />
      </section>
      {/* <Clients /> */}
      <section id="projects">
        <Projects />
      </section>
      <section id="services">
      <Services />
      </section>
      
      <section id='about'>
      <About2 />
        </section>
      <Approach />
      <Experiences />
      <Pricing />
      <Team />
      <Faq />
      <section id="contact">
        <Footer />
        </section>
      

      
    </div>
  )
}















export default App2
