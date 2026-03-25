
import Hero2 from './components/Hero2'
import Projects from './components/Projects'
import Services from './components/Services'
import About2 from './components/About2'
import Experiences from './components/Experiences'
import Approach from './components/Approach'
import Pricing from './components/Pricing'
import Team from './components/Team'
import Faq from './components/Faq'
import Footer from './components/Footer'
import ProjectDetails from './components/ProjectDetails'


const App2 = () => {
  return (
    <div>
      
      <section id="home">
        <Hero2 />
      </section>

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
      <Footer />
      <ProjectDetails />
      

      
    </div>
  )
}















export default App2
