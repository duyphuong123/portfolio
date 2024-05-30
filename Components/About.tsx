import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import React from 'react'
import Image from 'next/image'


const About = () => {
  return (
    <div id='about' className='bg-[#000022] pb-[3rem] pt-[6rem] md:pt-[8rem]'>
        <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[5rem] md:gap-[15rem] items-center'>
            <div>
                <h1 className='text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]'>
                    ABOUT ME
                </h1>
                <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white'>
                    Transforming <span className='text-yellow-400'>Visions</span>
                </h2>
                <div className='mb-[3rem] flex items-center md:space-x-10'>
                    <span className='w-[100px] hidden md:block h-[5px] bg-slate-500 rounded-sm'></span>
                    <p className='text-[19px] text-slate-400 w-[80%]'>
                    With a solid foundation in programming from my studies and internships, I am confident that I can 
                    contribute effectively to the programmer position. I am always willing to learn and improve to develop 
                    myself and contribute to the success of the company.
                    </p>
                </div>
                {/* <button className='px-[2rem py-[1rem] text-[18px] font-bold 
                    uppercase text-black flex items-center space-x-2'>
                    <PlayCircleIcon className='w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]'/>
                    <p className='text-[20px] font-semibold text-white'>Watch The Video</p>
                </button> */}
                <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold 
                    uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
                        <p>Download CV</p>
                        <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
                </button>
            </div>

            <div data-aos="fade-left" className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative'>
                <Image src={"/images/about.jpg"}
                    alt='user'
                    layout='fill'
                    objectFit='contain'
                    className='relative z-[11] w-[100%] h-[100%] object-contain'
                />

                <div className='absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]'></div>
            </div>
        </div>
    </div>
  )
}

export default About