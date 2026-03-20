import { useEffect, useRef } from 'react'
import ProjectCard from './ProjectCard'
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
        {
            image: "https://i.pinimg.com/736x/47/f8/e2/47f8e26c1bc6380cfad136b59b4ba524.jpg",
            name: "App Development"
        },
        {
            image: "https://i.pinimg.com/736x/d4/6b/8e/d46b8e9bade1efc477becdbbf0a77edf.jpg",
            name: "Social Media"
        },
        {
            image: "https://i.pinimg.com/1200x/35/d6/89/35d6894b50e38ea69d6cac0d36efc7d0.jpg",
            name: "Content creation"
        },
    ]

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {

        const mm = gsap.matchMedia()

        //desktop
        mm.add("(min-width: 1024px)", () =>{

            //desktop

            gsap.from(".project-card", {
            x: 100,
            duration: 1,
            opacity: 0,
            stagger:0.3,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".project-card",
                start: "top 90%",
                end: "top 20%",
                scrub: 3,
                toggleActions: "play none none reverse",   
            }
        })
        })
        
        mm.add("(min-width: 1024px)", ()=>{
            gsap.from(".project-name", {
            x: 100,
            duration: 1,
            opacity: 0,
            stagger: 0.3,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".project-card",
                start: "top 90%",
                end: "top 20%",
                scrub: 3,
                toggleActions: "play none none reverse",
            }
        })
        })
        
        //phone
        
        mm.add("(max-width: 1023px)",() =>{

            gsap.from(".project-card", {
            x: 100,
            duration: 1,
            opacity: 0,
            stagger:0.3,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".project-card",
                start: "top 90%",
                end: "top -120%",
                scrub: 3,
                toggleActions: "play none none reverse",   
            }
        })
        })

         mm.add("(max-width: 1023px)", ()=>{
            gsap.from(".project-name", {
            x: 100,
            duration: 1,
            opacity: 0,
            stagger: 0.4,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".project-card",
                start: "top 90%",
                end: "top -120%",
                scrub: 3,
                toggleActions: "play none none reverse",
            }
        })
        })




    }, [])





    return (
        <div className='projects lg:h-[75vw] h-[516vw] text-white/80 w-screen text-white flex flex-col'>

            <div className='h-[15vw] w-full flex  lg:mx-[7vw] mx-[4vw]'>
                <h6 className='h-[15vw] w-[22vw] text-white/50 font-medium'>01</h6>
                <div className='h-[15vw] w-[33vw] pt-6'> <h1 className='text-[6vw] text-white/90 '>Pro<span className='text-orange-800'>ject</span>s.</h1> </div>
                <p className='h-[15vw] lg:block hidden lg:w-[36vw] w-[50vw] text-start mt-[6vw] font-medium lg:ml-[7vw] lg:text-[1vw]  text-[2.9vw]'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  Here are some of our recent works <br />in branding, websites, and applications</p>
            </div>
            <p className='h-[15vw] lg:hidden block  w-full font-medium ml-[12vw]  text-[3vw]'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  Here are some of our recent works </p>
            

            <div className='h-[35vw] w-[92vw] flex flex-wrap lg:gap-[6vw]  mx-[5vw] px-[0.5vw] py-[2vw] '>
                {projects.map((project, index) => (
                    <ProjectCard key={index} image={project.image} name={project.name} index={index} />
                ))}

            </div>

        </div>

    )
}

export default Projects
