
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { Link } from 'react-router-dom'





const Hero2 = () => {

    const gsapRef = useRef([])
    const pRef = useRef([])
    const containerRef = useRef([])
    const boxRef = useRef([])

    useGSAP(() => {
        gsap.to(gsapRef.current, {
            y: 9,
            duration: 0.6,
            delay: 2.4,
            opacity: 85,
            stagger: 0.2

        })
    })
    useGSAP(() => {
        gsap.from(pRef.current, {
            x: -7,
            duration: 0.7,
            delay: 2.2,
            opacity: 0,
            stagger: 1


        })
    })
    useGSAP(() => {
        gsap.from(containerRef.current, {
            duration: 1,
            delay: 2.1,
            opacity: 0,
            stagger: 0.25

        })
    })
    useGSAP(() => {
        gsap.from(boxRef.current, {
            duration: 1,
            delay: 2.1,
            opacity: 0,
            stagger: 0.25

        })
    })

    return (
        <div className='lg:h-[50vw] h-[104vw] w-[99.1vw] rounded-2xl flex flex-col bg-[black] text-[grey]'>

            <div className='h-1/2 w-full flex items-center relative  gap-[8vw] mt-[16vw] '>
                <div className='text-end flex flex-col leading-tight ml-[16vw] mt-[2vw]'>
                    <h1 ref={el => gsapRef.current[0] = el} className='lg:text-[10vw]  text-[13vw] text-[grey] opacity-0 mr-[4vw]'>Pridedesk</h1>
                    <h4 ref={el => gsapRef.current[1] = el} className='lg:text-[4vw] text-orange-800 text-[6vw] mr-[4vw] opacity-0'>Agency</h4>
                </div>
                <div className=' absolute w-[80vw] lg:text-[0.9vw]  text-white/60 text-[2.8vw]  flex flex-col lg:gap-3  lg:left-[67vw] opacity-0 lg:opacity-100 top-0 lg:top-[3vw]'>
                    <h4 ref={el => containerRef.current[0] = el}>Bra<span className='text-orange-800'>ndin</span>g & ide<span className='text-orange-800'>nti</span>ty</h4>
                    <h4 ref={el => containerRef.current[1] = el}>Social Me<span className='text-orange-800'>dia MArk</span>eting</h4>
                    <h4 ref={el => containerRef.current[2] = el}>Web Design <span className='text-orange-800'>and</span> Development</h4>
                    <h4 ref={el => containerRef.current[3] = el}>SEO Op<span className='text-orange-800'>timiz</span>ation</h4>
                </div>
            </div>

            <div className='h-1/2 w-full flex  relative items-end lg:mb-[0.1vw] lg:mx-[0.1vw] mx-[1vw] mb-[4vw]'>
                <div className='flex items-end justify-between w-2/3 px-5 py-[3vw] pl-[6vw]'>
                    <p ref={el => pRef.current[0] = el} className='lg:w-[24vw] lg:text-[1vw] w-1/2 text-[3vw]  absolute left-[5vw]'> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;  No generic strategies. No empty promises. <br /> Just <span className=' lg:text-[1.1vw] text-[3.6vw] text-orange-800'>Branding, Marketing</span> and <span className=' lg:text-[1.1vw] text-[3.6vw] text-orange-800'>technology</span> that  help <br /> your business grow and stand out.</p>
                    <div ref={el => boxRef.current[0] = el} className='text-white/80 w-[10vw] absolute left-[50vw] '>
                        
                        <a className='cursor-pointer text-white/80 lg:text-[1.1vw] text-[3.9vw] font-medium tracking-[0.1vw] flex items-center gap-2' href="#projects">
                        <h5  className='lg:text-[0.9vw] text-[3.96vw] font-medium tracking-[0.1vw] active:scale-95'>View Projects</h5>
                         <i class="ri-arrow-right-up-line"></i>
                        </a>
                    </div>
                    
                </div>


                <div className='flex items-center right-[3vw] bottom-[2.5vw] pr-[5vw] gap-7 rounded-lg text-white/80 absolute '>
                    <div className='flex flex-col items-center text-center relative active:scale-95 '>
                        <h2 className='absolute right-0 bottom-[2.6vw] lg:text-[1vw] text-[3.9vw] font-medium tracking-[0.1vw]'>Start</h2>
                        <h2 className='absolute right-[0.5vw] bottom-[1.3vw] lg:text-[1vw] text-[3.9vw] font-medium tracking-[0.1vw]'>a</h2>
                        <h2 className='absolute right-[-2.3vw] bottom-0 lg:text-[1vw] text-[3.9vw] font-medium tracking-[0.1vw]'>project</h2>
                    </div>
                    <div className=' absolute bottom-0 right-[0.7vw] bg-black text-xl cursor-pointer text-white/80 h-[1.6vw] w-[1.6vw] flex items-center justify-between  rounded-full'>

                        <a href="#contact"><i class="ri-arrow-right-up-line"></i></a>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Hero2
