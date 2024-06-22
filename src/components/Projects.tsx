import ArrowDownTrayIcon from '@heroicons/react/16/solid/ArrowDownTrayIcon';
import Image from 'next/image';
import React from 'react'

const Projects = () => {
    const onButtonClick = () => {
        const pdfUrl = "/pdf/portfolioImages.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "images.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
            <h1 className='heading'>Pro<span className='text-yellow-400'>Jetos</span></h1>
            <div className='mt-[2rem] flex justify-center'>
                        <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[irem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2 ' onClick={onButtonClick} >
                            <p>Download Imagens</p>
                            <ArrowDownTrayIcon className='w-[1.6rem] h-[2.7rem] text-black' />
                        </button>
                    </div>
            <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
                <div data-aos='fade-up'>
                    <div className='trasnform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image src={"/images/p1.jpg"} alt="portfolio" layout='fill' className='object-contain' ></Image>
                    </div>
                    
                </div>
                <div data-aos='fade-up' data-aos-delay='300'>
                    <div className='trasnform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image src={"/images/p2.jpg"} alt="portfolio" layout='fill' className='object-contain' ></Image>
                    </div>
                    
                </div>
                <div data-aos='fade-up' data-aos-delay='400'>
                    <div className='trasnform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image src={"/images/p3.jpg"} alt="portfolio" layout='fill' className='object-contain' ></Image>
                    </div>
                    
                </div>
                <div data-aos='fade-up' data-aos-delay='500'>
                    <div className='trasnform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image src={"/images/p4.jpg"} alt="portfolio" layout='fill' className='object-contain' ></Image>
                    </div>
                    
                </div>
                <div data-aos='fade-up' data-aos-delay='600'>
                    <div className='trasnform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image src={"/images/p5.jpg"} alt="portfolio" layout='fill' className='object-contain' ></Image>
                    </div>
                    
                </div>
                <div data-aos='fade-up' data-aos-delay='700'>
                    <div className='trasnform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image src={"/images/p6.jpg"} alt="portfolio" layout='fill' className='object-contain' ></Image>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};
export default Projects