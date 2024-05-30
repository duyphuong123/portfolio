import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/20/solid'

interface Props {
    image: string,
    name: string,
    role: string,
}

const ClientReview = ({ image, name, role }: Props) => {
  return (
    <div className='flex flex-col text-center justify-center'>
        <Image 
        src={image} 
        alt={name} 
        width={100} 
        height={100} 
        objectFit='contain' 
        className='mx-auto mb-[2rem] rounded-full'/>
        <div className='flex items-center mx-auto'>
            <StarIcon className='w-[2rem] h-[2rem] text-yellow-500'/>
            <StarIcon className='w-[2rem] h-[2rem] text-yellow-500'/>
            <StarIcon className='w-[2rem] h-[2rem] text-yellow-500'/>
            <StarIcon className='w-[2rem] h-[2rem] text-yellow-500'/>
            <StarIcon className='w-[2rem] h-[2rem] text-yellow-500'/>
        </div>
        <h1 className='text-[25px] text-white mt-[1rem]'>{name}</h1>
        <p className='text-[18px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Molestiae ab unde eligendi cupiditate? Adipisci nobis odio eius dolore harum magni, 
            nam sed labore, fugiat ab sunt doloremque veniam deserunt culpa!
        </p>
    </div>
  )
}

export default ClientReview