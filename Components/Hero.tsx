import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect'
import Image from 'next/image'
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Photo from './Photo'
import Stats from './Stats'

const Hero = () => {
  return (
    <section className='h-full'>
        <div id='home' className="md:h-[90vh] h-[100%] bg-[#000022] mt-[10vh] bg-cover bg-center">
        <Particle/>
            <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[5rem] md:gap-[15rem] h-[100%] items-center'>
                <div className='order-2 xl:order-none md:mt-[-100px]'>
                    <h1 className='text-[35px] md:text-[40px] text-white font-bold'>
                        HI, I`M <span className='text-yellow-400'>BUI DUY PHUONG!</span>
                    </h1>
                    <TextEffect/>
                    <p className='mt-[1.5rem] text-[15px] text-[#eae8e892]'>
                        I come from Vietnam, the city of Buon Ma Thuot. 
                        My current job is Backend Nodejs. 
                        I have 1 year of experience in Nodejs, Nextjs, Reactjs, Javascript and Typescript, databases MySQL, SqlLite, MongoDB, FireBase, 
                        responsible work ethic, ability to learn and get used to new working environments
                    </p>
                    <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                        <a href="/cv/CV-Bui_Duy_Phuong.pdf" download>
                            <button className='px-[1rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold 
                            uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
                                <p>Download CV</p>
                                <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
                            </button>
                        </a>
                        <button className='flex items-center space-x-2'>
                            <PlayCircleIcon className='w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]'/>
                            <p className='text-[20px] font-semibold text-white'>Watch The Video</p>
                        </button>
                    </div>
                </div>

                {/* <div className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]'>
                    <Image src="/images/u1.jpg" alt="user" layout="fill" className='object-cover rounded-full'/>
                </div> */}

                <div className='order-1 xl:order-none mb-8 xl:mb-0 mt-[3rem] md:mt-[-100px]'>
                    <Photo/>
                </div>
                
            </div>
            <div className='md:mt-[-130px] mt-[20px] w-full '>
                    <Stats/>
            </div>
        </div>
    </section>
  )
}

export default Hero