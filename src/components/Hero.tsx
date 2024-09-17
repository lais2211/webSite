import React from 'react';
import Particle from './Particle';
import TextEffect from './TextEffect';
import Image from 'next/image';
import ArrowDownTrayIcon from '@heroicons/react/16/solid/ArrowDownTrayIcon';
const Hero = () => {
   
    return (
        <div className='h-[100vh] bg-[url("/images/banner.jpg")] bg-cover bg-center'>
            <Particle />
            <div className='pt-[5vh] w-[90%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] intems-center'>
                <div>
                    <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
                        Olá, eu sou a <span className='text-yellow-400'>Laís!</span>
                    </h1>
                    <TextEffect />
                </div>
                <div className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[225px] h-[225px] relative items-center rounded-full'>
                    <Image src="/images/u1.jpg" alt="user" layout='fill' className='object-cover rounded-full' />
                </div>
            </div>
        </div>
    );
}

export default Hero;