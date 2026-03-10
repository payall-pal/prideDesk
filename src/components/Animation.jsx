import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'



const Projects = () => {


    const projects = [
        {

            image: "https://i.pinimg.com/736x/78/08/4c/78084cbc246fba79b7baa7d0b2f1c42c.jpg",
            name: "Website"
        },
        {
            image: "https://i.pinimg.com/736x/fd/82/21/fd82218b82ad9fb08bd2742a4857701b.jpg",
            name: "SEO"
        },
        {
            image: "https://i.pinimg.com/736x/01/cf/a0/01cfa0608d13ac97cb9c105fb0ff6d9c.jpg",
            name: "Branding"
        },
    ]

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.from(".project-card2", {
            y: 100,
            duration: 20,
            delay: 9,
            opacity: 0,
            stagger: 9,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".project-card2",
                start: "top 70%",
                end: "top 10%",
                scrub: 3,
                toggleActions: "play none none reverse"
            }

        })



    }, [])





    return (
        <div className='min-h-[200vw] w-screen  flex flex-col'>
            <div className='h-[15vw] w-full flex  mx-[7vw]'>
                <h6 className='h-[15vw] w-[22vw] text-gray-500 font-medium'>01</h6>
                <div className='h-[15vw] w-[33vw] pt-6'> <h1 className='text-[6vw] '>Projects.</h1> <div className='h-[0.1vw] w-[12vw] bg-black'></div></div>
                <p className='h-[15vw] w-[36vw] text-start mt-[6vw]  font-medium ml-[7vw] text-[1vw]'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  Here are some of our recent works <br />in branding, websites, and applications</p>
            </div>

            <div className='h-[15vw] w-full flex  mx-[7vw]'>
                <h6 className='h-[15vw] w-[22vw] text-gray-500 font-medium'>01</h6>
                <div className='h-[15vw] w-[33vw] pt-6'> <h1 className='text-[6vw] '>Projects.</h1> <div className='h-[0.1vw] w-[12vw] bg-black'></div></div>
                <p className='h-[15vw] w-[36vw] text-start mt-[6vw]  font-medium ml-[7vw] text-[1vw]'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  Here are some of our recent works <br />in branding, websites, and applications</p>
            </div>

            <div className='h-[100vw] bg-blue-50 w-[92vw] flex flex-col  mx-[5vw] px-[0.5vw] py-[2vw] '>
                <div className=' h-[40vw] w-full  rounded-lg  flex flex-col gap-4'>
                    <img className='project-card2 h-[40vw] w-[80vw] rounded-lg object-cover' src={image} alt="" />

                </div>

            </div>



        </div>

    )
}

export default Projects
