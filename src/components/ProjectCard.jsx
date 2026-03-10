import { useEffect } from "react"
import gsap from 'gsap'


const ProjectCard = ({ index, name, image }) => {



  return (

    <div  className=' h-[22vw] w-[26vw] rounded-lg  flex flex-col gap-4'>
      <h2 className='project-name text-2xl font-semibold'>{name}</h2>
      <img className='project-card h-[20vw] w-[30vw] rounded-lg object-cover' src={image} alt="" />

    </div>

  )
}

export default ProjectCard
