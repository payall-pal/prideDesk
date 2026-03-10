

const Hero = () => {
    return (
        <div className="relative bg-black min-h-screen text-white pr-[4vw]">


            <div className="">
                <h1 className="absolute left-[15vw] top-[6vw] text-[13vw]">PRI</h1>
                <h1 className="absolute left-[27vw] top-[18vw] text-[13vw]">DE</h1>
                <h1 className="absolute left-[38vw] top-[29vw] text-[13vw]">SK</h1>
            </div>

            <button className=" absolute text-xl px-[4vw] pb-2 py-1 text-white top-[37vw] left-[10vw]">Start a project</button>

            <p className="absolute w-[33vw] text-end top-[17vw] right-4 text-xl font-light mr-7">We transform ideas into compelling visual and digital experiences that capture attention and build connections.</p>

            <div className="flex flex-col absolute right-[5vw] top-[29vw] items-end mr-7">
                <h4 className="text-4xl">20+</h4>
                <h4 className="text-xl">Projects Done</h4>

                <h4 className="text-4xl mt-[1.5vw]">100+</h4>
                <h4 className="text-xl">Positive Reviews</h4>

                <h4 className="text-4xl mt-[1.5vw]">10+</h4>
                <h4 className="text-xl">Collabrations</h4>
            </div>


        </div>
    )
}


export default Hero
