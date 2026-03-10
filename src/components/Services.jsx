import { useRef, useState } from 'react'
import ServiceCard from './ServiceCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Services = () => {

    const [activeIndex, setActiveIndex] = useState(null)

    const servicesData = [
        {
            title: "Branding",
            description: "We create brands that stand out and connect",
            skills: ["Brand Identity & logo design", "Brand strategy & positing", "Visual strategy & positioning"]

        },
        {
            title: "App Development",
            description: "We build modern, fast and scalable websites.",
            skills: ["buildzz", "app", "technologies", "thinks"]


        },
        {
            title: "Branding",
            description: "We build modern, fast and scalable websites.",
            skills: ["brand", "front-end", "startup", "team"]


        },
        {
            title: "Content Creation",
            description: "We build modern, fast and scalable websites.",
            skills: ["cursor", "seo", "border"]


        }
    ]


    const divRef = useRef()
    useGSAP(() => {
        gsap.from(divRef.current, {
            y: -20,
            duration: 1,
            delay: 0.5,
            opacity: 0,
            scrollTrigger: {
                trigger: ".trigger1",
                start: "top 55%",
                end: "top 10%",
                scrub: 3
            }

        })
    })


    const [hover, setHover] = useState(false)


    const buttonRef = useRef(false)



    return (
        <section className='trigger1 w-full min-h-screen bg-gray-800 p-10 relative '>
            <div  className='h-[10vw] w-[93vw] text-white flex  gap-2'>
                <div ref={divRef} className='h-full w-1/4 flex gap-3 '>
                    <div className='h-[1vw] w-[0.2vw] mt-[0.17vw] bg-orange-800'></div>
                <h4 className=' text-lg font-semibold'>What we do</h4>
                </div>
                <h2 className='h-full w-3/4 text-[6vw] mr-[5vw]'>Services.</h2>
            </div>

            <div className='flex flex-col gap-4'>
                {servicesData.map((service, index) => (
                    <ServiceCard
                        key={index} title={service.title} description={service.description} skills={service.skills} index={index} activeIndex={activeIndex} setActiveIndex={setActiveIndex}
                    />
                ))}

            </div>

            <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={` transition-opacity duration-300  ${hover ? "bg-white/60" : "bg-white/70"} active:scale-95 h-[2.4vw] w-[9vw] font-medium flex items-center justify-between absolute py-[0.3vw] px-[0.7vw] rounded-4xl  left-[25.7vw] mt-[2vw]`}>
                <button className='cursor-pointer text-lg'> Get started</button>
                <div className='h-[1.65vw] w-[1.65vw] bg-black flex items-center justify-center text-lg text-white rounded-full'><i class="ri-arrow-right-up-line"></i></div>
            </div>


        </section>
    )
}

export default Services
