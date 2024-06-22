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
           
            </div>
            </div>
    )
}

export default Footer;