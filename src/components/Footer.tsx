import { EnvelopeIcon, UserCircleIcon } from '@heroicons/react/16/solid';
import React from 'react';

const Footer = () => {
    const handleLinkedInClick = () => {
        const linkedInUrl = 'https://www.linkedin.com/in/la%C3%ADs-sousa-developer-android-flutter/';
        window.open(linkedInUrl, '_blank');
    };
    return(
        <div className='pt-[4rem] pb-[4rem] bg-[#02050a]'>
            <div className='grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]'>
            <div className='flex items-center space-x-6'>
            <div className='md:w-[6.5 rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
            <UserCircleIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black' onClick={handleLinkedInClick}/>
            </div>
            <div>
                <h1 className='text-[25px] mb-[0.2rem] font-semibold text-[white]' onClick={handleLinkedInClick} >Linkedin</h1>
            </div>
            </div>
            <div className='flex items-center space-x-6'>
            <div className='md:w-[6.5 rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
            <EnvelopeIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black' />
            </div>
            <div>
                <h1 className='text-[25px] mb-[0.2rem] font-semibold text-[white]' >lais.sousa1608@gmail.com</h1>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Footer;