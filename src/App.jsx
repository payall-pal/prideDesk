import Navbar2 from './components/Navbar2'
import GiveReview from './components/GiveReview'
import ProjectDetails from './components/ProjectDetails'
import Teamlead from './components/Teamlead'
import ApplyCard from './components/ApplyCard'
import App2 from './App2'
import { Routes, Route } from 'react-router-dom'



const App = () => {
  return (


    <div className='overflow-hidden w-[99.1vw] bg-black'>

      <Navbar2 />
      <Routes>
        <Route path='/projectDetails/:id' element={<ProjectDetails />}/>
        <Route path='/givereview' element={<GiveReview />}/>
        <Route path='/apply' element={<ApplyCard />}/>
        <Route path='/teamlead' element={<Teamlead />} />
        <Route path='/contact' element={<Footer />} />
        <Route path='/' element={<App2 />} />
      </Routes>

    </div>


  )
}

export default App
