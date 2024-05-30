import { XMarkIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { Link } from 'react-scroll';

interface Props {
    nav: boolean;
    closeNav: () => void;
}

const MobileNav = ({nav, closeNav}: Props) => {
    const navAnimation = nav ? "translate-x-0"  : "translate-x-[-100%]";

  return (
    <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#000022]`}>
        <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
            <Link onClick={closeNav} to="home" smooth={true} className='nav-link-mobile'>HOME</Link>
            <Link onClick={closeNav} to="about" smooth={true} className='nav-link-mobile'>ABOUT</Link>
            <Link onClick={closeNav} to="services" smooth={true} className='nav-link-mobile'>SERVICES</Link>
            <Link onClick={closeNav} to="skill" smooth={true} className='nav-link-mobile'>SKILL</Link>
            <Link onClick={closeNav} to="project" smooth={true} className='nav-link-mobile'>PROJECT</Link>
            {/* <Link onClick={closeNav} to="blog" smooth={true} className='nav-link-mobile'>BLOG</Link> */}
            <Link onClick={closeNav} to="contact" smooth={true} className='nav-link-mobile'>CONTACT</Link>
        </div>

        <div onClick={closeNav} className='absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-green-400'>
            <XMarkIcon/>
        </div>
    </div>
  )
}

export default MobileNav