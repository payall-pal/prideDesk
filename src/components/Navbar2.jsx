import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar2 = () => {



  const [hover, setHover] = useState(false)
  const [hover1, setHover1] = useState(false)
  const [hover2, setHover2] = useState(false)
  const [hover3, setHover3] = useState(false)




  const navRef = useRef([])
  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -7,
      duration: 0.6,
      delay: 0.5,
      opacity: 0
    })
  })





  return (
    <div className='fixed z-10 w-full flex items-center  text-white justify-between pb-[0.7vw] pt-[2vw] px-[3vw]'>
      <h4 ref={el => navRef.current[0] = el} className='font-mono text-xl'>PRIDEDESK</h4>
      <div ref={el => navRef.current[1] = el} className='flex gap-[2vw] font-medium text-xl'>



        
        </div>
        <div className='active:scale-95'>
          <Link onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)} >About</Link>
          <div className={`transition-opacity duration-300  h-[0.08vw] w-full bg-white ${hover1 ? "opacity-100" : "opacity-0"}`}>

          </div>
        </div>
        <div className='active:scale-95'>
          <Link onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)} >projects</Link>
          <div className={`transition-opacity duration-300  h-[0.08vw] w-full bg-white ${hover2 ? "opacity-100" : "opacity-0"}`}>

          </div>
        </div>
        <div className='active:scale-95' >
          <Link onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)} >Contact</Link>
          <div className={`transition-opacity duration-300  h-[0.08vw] w-full bg-white ${hover3 ? "opacity-100" : "opacity-0"}`}>

          </div>
        </div>

        
        <i class="ri-menu-3-line"></i>

      </div>
   
  )
}

export default Navbar2
