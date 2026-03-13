


const ServiceCard = ({ title, description, index, activeIndex, setActiveIndex, skills }) => {
  const isActive = activeIndex === index

  const handleClick = () => {
    setActiveIndex(isActive ? null : index)
  }



  return (
    <div className={`cursor-pointer h-[5vw] px-[0.2vw] relative transition-all border-b border-black/50 duration-500 ease-in-out ${isActive ? "h-[10vw]" : "h-[5vw]"} bg-gray-300 text-black rounded flex justify-center flex-col `}>



      <div className={`transition-opacity duration-300 h-full  ${isActive ? "opacity-0" : "opacity-100"} text-lg flex items-start justify-between  `}>
        <h4 className='h-full w-1/4 '>{index}</h4>

        <div className='h-full w-3/4 flex items-center justify-between'>
          <h4 >{title}</h4>
          <div onClick={handleClick} className=' border rounded-full px-[0.28vw] mr-[1.3vw] mb-[1vw]'> <i class="ri-add-line"></i></div>
        </div>
      </div>





      <div className={`absolute w-[93vw] flex items-start h-full  justify-between  transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"} `}>
        <h4 className={`h-full w-1/4 text-lg `}>{index}</h4>

        <div className='h-full w-3/4 flex'>

          <div className='h-full w-[20vw]'>
            <h4 className={`text-[2vw] `}>{title}</h4>
            <p className={`w-[17vw] text-[1vw] font-medium`}>{description}</p>
          </div>

          <div className='h-full w-[40vw] flex flex-col gap-2 text-gray-300'>
            <h6>Categories</h6>
            <div className='flex items-center gap-[2vw]'>
              {skills.map((elem, idx) => (
                <h1 className='bg-black/10 rounded-3xl px-[1.2vw] py-[0.2vw] pb-[0.24vw] text-black text-lg ' key={idx}>{elem}</h1>
              ))}
            </div>
          </div>
          

        </div>
        <div onClick={handleClick} className={`border rounded-full px-[0.28vw] mt-[1vw] ml-[1vw] transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}> <i class="ri-subtract-line"></i></div>
      </div>



    </div>
  )
}

export default ServiceCard
