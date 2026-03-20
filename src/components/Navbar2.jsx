import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Hero2 from './Hero2'
import ProjectCard from './ProjectCard'
import Projects from './Projects'
// import Menu from './Menu'

const Navbar2 = () => {


  
  // const [activee, setActivee] = useState(false)
  const [hover, setHover] = useState(false)
  const [hover1, setHover1] = useState(false)
  const [hover2, setHover2] = useState(false)
  const [hover3, setHover3] = useState(false)




  const navRef = useRef([])
  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -7,
      duration: 0.6,
      delay: 3,
      opacity: 0
    })
  })





  return (
    <div className='fixed  w-full  flex items-center  text-white/80 justify-between lg:pb-[0.7vw] lg:pt-[2vw] pt-[4vw] lg:px-[3vw] px-[5.5vw]'>
      <h4 ref={el => navRef.current[0] = el} className='font-mono lg:text-[1.1vw] text-[3.7vw]'> PRIDEDESK</h4>
     <div className='lg:block hidden'>
       <div ref={el => navRef.current[1] = el} className='flex gap-[12vw]  mr-[3vw] lg:text-[0.95vw] '>

          <div className=' cursor-pointer active:scale-95'>
            <a href='#home' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >Home</a>
            <div className={`transition-opacity  duration-300  h-[0.08vw] w-full bg-white/80 ${hover ? "opacity-100" : "opacity-0"}`}>
            </div>

          </div>

          <div className='active:scale-95'>
            <a href='#about' onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)} >About</a>
            <div className={`transition-opacity duration-300  h-[0.08vw] w-full bg-white/80 ${hover1 ? "opacity-100" : "opacity-0"}`}>

            </div>
          </div>

          <div className='active:scale-95'>
            <a href='#projects' onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)} >Projects</a>
            <div className={`transition-opacity duration-300  h-[0.08vw] w-full bg-white/80 ${hover2 ? "opacity-100" : "opacity-0"}`}>

            </div>
          </div>

          <div className='active:scale-95' >
            <a href='#contact' onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)} >Contact</a>
            <div className={`transition-opacity duration-300  h-[0.08vw] w-full bg-white/80 ${hover3 ? "opacity-100" : "opacity-0"}`}>

            </div>
          </div>


          
      </div>
     </div>


      




      {/* <div className='cursor-pointer'>
        <i class="ri-menu-3-line"></i>

      </div> */}

    </div>
  )
}

export default Navbar2
