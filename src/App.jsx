import Navbar2 from './components/Navbar2'
import Home from './components2/Home'
import Krishn from './components2/Krishn'
import Quote from './components2/Quote'
import Teamlead from './components/Teamlead'
import App2 from './App2'
import { Routes, Route } from 'react-router-dom'



const App = () => {
  return (

    <div className='overflow-hidden w-[99.1vw] bg-black'>

      <Navbar2 />

      <Routes>
        <Route path='/teamlead' element={<Teamlead />} />
        <Route path='/' element={<App2 />} />
      </Routes>




    </div>




  )
}

export default App
