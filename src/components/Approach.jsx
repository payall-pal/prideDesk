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
        <div ref={approachRef} className='approach h-[30vw] rounded-2xl w-full text-black bg-white px-[4vw] py-[3vw] '>


            <div className='h-[15vw] w-[93vw] pl-[1vw] flex '>

                <div className='h-full w-1/4 flex gap-4'>
                    <div className='h-[1vw] w-[0.2vw] bg-orange-800 mt-[0.7vw]'></div>
                    <h4 className='text-[1.4vw] font-medium'>pridedesk</h4>
                </div>


                <div className='h-full w-3/4 flex flex-col gap-[1.2vw] mt-[6vw]  mr-[vw]'>
                    <h2 className='w-[55vw] text-[1.9vw] font-medium leading-normal mt-[0.5vw] '>
                         &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;Our approach is simple: <span className=''>we focus on functionality, speed, clarity, ensuring that every project serves a clear <br /> purpose without unnecessary complexity.</span></h2>
                </div>

            </div>

            
        </div>
    )
}

export default Approach
