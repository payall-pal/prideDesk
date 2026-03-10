import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='fixed z-10 h-[7vw] w-full text-white flex items-center justify-between px-[6vw] pt-[1vw] '>
            <div className='relative'>
                <h4 className='absolute text-2xl'>P</h4>
                <h4 className='absolute text-2xl text-orange-700 top-4 left-2'>D</h4>
            </div>
            <div className='flex items-center gap-7 text-lg  uppercase'>
                

                <Link to='/'>About</Link>
                <Link to='/work'>Work</Link>
                <Link to='/services'>Services</Link>
                
               
            </div>
            <div className=''>
                <button className='text-lg uppercase'>Book Call</button>
            </div>
        </div>
    )
}

export default Navbar
