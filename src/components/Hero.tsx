import React from 'react';
import Particle from './Particle';
import TextEffect from './TextEffect';
import Image from 'next/image';
import ArrowDownTrayIcon from '@heroicons/react/16/solid/ArrowDownTrayIcon';
const Hero = () => {
    const onButtonClick = () => {
        const pdfUrl = "/pdf/cvLais.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "curriculo Lais Sousa.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className='h-[100vh] bg-[url("/images/banner.jpg")] bg-cover bg-center'>
            <Particle />
            <div className='pt-[5vh] w-[90%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] intems-center'>
                <div>
                    <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
                        Olá, eu sou a <span className='text-yellow-400'>Laís!</span>
                    </h1>
                    <TextEffect />
                    <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex-row items-center sm:space-x-6'>
                        <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[irem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2 ' onClick={onButtonClick}>
                            <p>Download Cv</p>
                            <ArrowDownTrayIcon className='w-[1.6rem] h-[2.7rem] text-black' />
                        </button>
                    </div>
                </div>
                <div className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[225px] h-[225px] relative items-center rounded-full'>
                    <Image src="/images/u1.jpg" alt="user" layout='fill' className='object-cover rounded-full' />
                </div>
            </div>
        </div>
    );
}

export default Hero;