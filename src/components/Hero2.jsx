
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'





const Hero2 = () => {

    const gsapRef = useRef([])
    const pRef = useRef([])
    const containerRef = useRef([])
    const boxRef = useRef([])

    useGSAP(() => {
        gsap.to(gsapRef.current, {
            y: 9,
            duration: 0.6,
            delay: 0.5,
            opacity: 85,
            stagger: 0.2

        })
    })
    useGSAP(() => {
        gsap.from(pRef.current, {
            x: -7,
            duration: 0.7,
            delay: 0.2,
            opacity: 0,
            stagger:1


        })
    })
    useGSAP(() => {
        gsap.from(containerRef.current, {
            duration: 1,
            delay: 0.1,
            opacity: 0,
            stagger: 0.25

        })
    })
    useGSAP(() => {
        gsap.from(boxRef.current, {
            duration: 1,
            delay: 0.1,
            opacity: 0,
            stagger: 0.25

        })
    })

    return (
        <div className='h-screen w-[99.1vw] rounded-2xl flex flex-col bg-[black] text-[grey]'>

            <div className='h-1/2 w-full flex items-center justify-center gap-[8vw] mt-[6vw]'>
                <div className='text-end flex flex-col leading-tight '>
                    <h1 ref={el => gsapRef.current[0] = el} className='text-[10vw] text-[grey] opacity-0 mr-[4vw]'>Pridedesk</h1>
                    <h4 ref={el => gsapRef.current[1] = el} className='text-orange-800 text-5xl mr-[4vw] opacity-0'>Agency</h4>
                </div>
                <div className='w-[12vw] flex flex-col gap-3 mt-[1.4vw]  '>
                    <h4 ref={el => containerRef.current[0] = el}>Bra<span className='text-orange-800'>ndin</span>g & ide<span className='text-orange-800'>nti</span>ty</h4>
                    <h4 ref={el => containerRef.current[1] = el}>Social Me<span className='text-orange-800'>dia MArk</span>eting</h4>
                    <h4 ref={el => containerRef.current[2] = el}>Web Design <span className='text-orange-800'>and</span> Development</h4>
                    <h4 ref={el => containerRef.current[3] = el}>SEO Op<span className='text-orange-800'>timiz</span>ation</h4>
                </div>
            </div>

            <div className='h-1/2 w-full flex items-end'>
                <div className='flex items-end justify-between w-2/3 px-5 py-[3vw] pl-[6vw]'>
                    <p ref={el => pRef.current[0] = el} className='w-[24vw] '> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;  No generic strategies. No empty promises. <br /> Just <span className=' text-lg text-orange-800'>Branding, Marketing</span> and <span className=' text-lg text-orange-800'>technology</span> that  help <br /> your business grow and stand out.</p>
                    <h5 ref={el => boxRef.current[0] = el} className='text-orange-800'> @2025 Pridedesk Studio</h5>
                </div>
                <div  className='flex py-[3vw] px-[4vw]'>
                    <div  className='h-[6vw] w-[6vw] bg-white/80 rounded-xl flex  items-center justify-center'>
                        <img className=' h-[5.7vw] w-[5.7vw] object-cover  rounded-2xl' src="https://images.unsplash.com/photo-1770548037928-a29bfacc84ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" alt="not foound" />
                    </div>
                    <div className='h-[6vw] w-[11vw] text-[black] bg-white/80 rounded-xl py-[1vw] px-[1.5vw]'>
                        <div className='flex items-end gap-1'><h6 className='text-[0.72vw] font-medium'>Team Lead</h6>  <h6 className='text-gray-500 text-[0.6vw] font-medium'>Sweden</h6></div>
                        <h2 className='text-lg font-medium'>Lauren Thompson</h2>
                        <div className='bg-black flex justify-between items-center rounded-2xl w-[6vw] px-[0.6vw] mt-[0.4vw] text-white'>
                            <button>Let's talk</button>
                            <div className='h-[0.6vw] w-[0.6vw] rounded-full bg-white'></div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero2
