// import Navbar2 from './components/Navbar2'
// import Home from './components2/Home'
// import Quote from './components2/Quote'
import Teamlead from './components/Teamlead'
import App2 from './App2'
import { Routes, Route } from 'react-router-dom'
import Navbar2 from './components/Navbar2'
import Home from './components2/Home'
import Krishn from './components2/krishn'
import Home2 from './components2/Home2'
import CircularGallery from './components2/CircularGallery'

// import Footer from "./components/Footer"
// import CircularGallery from "./components2/CircularGallery"




const App = () => {
  return (

      // <div>
      //   <CircularGallery />
      //   <Footer />
      // </div>
    

    <div className='overflow-hidden w-[99.1vw] bg-black'>

      <Navbar2 />

      <Routes>
        <Route path='/teamlead' element={<Teamlead />} />
        <Route path='/' element={<App2 />} />
      </Routes>

    </div>



    //   Krishn


      // <div className='bg-black overflow-hidden w-[99vw]'>
      // <Home />
      // <Home2 />
      // <Krishn />
      // <CircularGallery />
      // </div>



  )
}

export default App
