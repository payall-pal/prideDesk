import { useState } from "react"
import Answer from "./Answer"



const Faq = () => {

    const [activefaq, setActivefaq] = useState(null)

    const faqData = [
        {
            question: "How does the monthly subscritpion model work?",
            ans: "We build modern, fast and scalable websites."
        },
        {
            question: "How long does it take to build a website?",
            ans: "We build modern, fast and scalable websites."
        },
        {
            question: "Can you redesign my existing website?",
            ans: "We build modern, fast and scalable websites.lorem1  We build modern, fast and scalable websites."
        },
        {
            question: "Do you offer custom websites or use templates?",
            ans: "We build modern, fast and scalable custom websites or use templates websites."
        },
        {
            question: "What's included in your SEO services?",
            ans: "We build modern, fast and  included in your scalable  included in your websites."
        },
        {
            question: "How do I get started?",
            ans: "We build modern, uild modern, fast and scalable w fast and scalable websites."
        }
    ]




    return (
        <div className='lg:h-[50vw] h-[230vw] w-full  bg-gray-200 px pt-[6vw] px-[6vw] lg:py-0 py-[6vw] flex lg:flex-row flex-col'>

             <div className="lg:h-full h-[50vw] lg:w-1/2 lg:p-0 px-[2vw]">
                <h1 className="lg:text-[5.4vw] text-[17vw] lg:font-medium tracking-wide">FAQs</h1>
                <p className="lg:text-[0.9vw] text-black/60 font-medium text-[4.6vw] lg:ml-0 ml-[5vw]">Having doubt, let us solve some for you
                     <span className="lg:block hidden">that are previously <br /> asked by our clients</span></p>
            </div>
            
            <div className="lg:w-1/2  flex flex-col gap-2 lg:mt-0 mt-[15vw] ">
                {faqData.map((faq, idx) => (
                    <Answer key={idx} idx={idx} question={faq.question} ans={faq.ans} activefaq={activefaq} setActivefaq={setActivefaq} />
                ))}
            </div>

        </div>
    )
}

export default Faq




























{/* <div className='flex flex-col gap-4 w-full bg-blue-600'>
                {faqData.map((faq, idx) =>(
                    <Answer key={idx} title={faq.title} description={faq.description} skills={faq.skills} idx={idx} activefaq={activefaq} setActivefaq={setActivefaq}
                     />
                ))}

            </div> */}

