import { Link } from 'react-scroll';
import { Bars3Icon } from '@heroicons/react/16/solid'
import React from 'react'

interface Props {
    openNav: () => void;
}

const Nav = ({openNav}: Props) => {
  return (
    <div className='w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#000022] shadow-md'>
        <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
            <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
                D
                <span className='text-green-400'>P</span>
            </h1>
            <Link to="home" smooth={true} className='nav-link'>HOME</Link>
            <Link to="about" smooth={true} className='nav-link'>ABOUT</Link>
            <Link to="services" smooth={true} className='nav-link'>SERVICES</Link>
            <Link to="skill" smooth={true} className='nav-link'>SKILL</Link>
            <Link to="project" smooth={true} className='nav-link'>PROJECT</Link>
            {/* <Link to="blog" smooth={true} className='nav-link'>BLOG</Link> */}
            <Link to="contact" smooth={true} className='nav-link'>CONTACT</Link>

            <div onClick={openNav}>
                <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-green-300'></Bars3Icon>
            </div>
        </div>
    </div>

  )
}

export default Nav
