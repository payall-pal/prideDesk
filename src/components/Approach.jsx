import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'

const Approach = () => {

    const approachRef = useRef([])
    const chartRef = useRef([])
    useGSAP(() => {
        gsap.to(approachRef.current, {
            backgroundColor: "black",
            color:"white",
            duration: 0.4,
            delay: 0.3,
            scrollTrigger: {
                trigger: ".approach",
                start: "top 64%",
                end: "top 20%",
                scrub: 3,
            }
        })
    })

    

    return (
        <div ref={approachRef} className='approach lg:h-[30vw] h-[100vw] rounded-2xl w-full text-black bg-white lg:px-[4vw] px-[9vw] lg:py-[3vw] py-[10vw] '>


            <div className=' pl-[1vw] lg:flex lg:flex-row flex flex-col'>

                <div className='lg:h-full lg:w-1/4 h-[10vw] w-full flex gap-4 '>
                    <div className='lg:h-[1vw] lg:w-[0.2vw] h-[4vw] w-[0.6vw] mt-[2vw] bg-orange-800 lg:mt-[0.7vw]'></div>
                    <h4 className='lg:text-[1.4vw] text-[5vw] font-medium'>pridedesk</h4>
                </div>


                <div className='h-full lg:w-3/4   lg:mt-[2vw] mt-[6vw]  '>
                    <h2 className='lg:w-[60vw] w-full lg:text-[2vw] text-[6vw] lg:text-start font-medium leading-normal mt-[0.5vw] '>
                         <span className='lg:block  hidden'>&nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; </span> 
                           &nbsp; &nbsp;Our approach is simple: 
                           <span className=''> we focus on functionality, speed, clarity, ensuring that every project serves a clear  purpose without un- necessary complexity.</span>
                           </h2>
                </div>

            </div>

        </div>
    )
}

export default Approach
