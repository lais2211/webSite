import { CodeBracketSquareIcon, RocketLaunchIcon } from '@heroicons/react/16/solid';
import React from 'react';

const Services = () => {
    return (
        <div className='bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
           <p className='heading'>
            Meus<span className='text-yellow-400'> Serviços</span>
           </p>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
            <div data-aos='fade-right'>
                <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
                    <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1rem]'>
                        Frontend
                    </h1>
                    <p className='text=[15px] text-[#d3d2d2] font-normal lowercase mb-[1rem] first-letter:uppercase'>
                        Desenvolvimento de interfaces e aplicativos mobile e web com Flutter.
                    </p>
                    <p className='text=[18px] text-[#d3d2d2] font-bold mb-[1rem]'>
                        Tecnologias usadas:
                    </p>
                    <p className='text=[15px] text-[#d3d2d2] font-normal'>
                        Gerenciamento de estado: 
                        <span className='text=[15px] text-[#d3d2d2] font-normal'> Mobx </span>
                    </p>
                    <p className='text=[15px] text-[#d3d2d2] font-normal mt-[0.5rem]'>
                        Injeção de dep: 
                        <span className='text=[15px] text-[#d3d2d2] font-normal'> Modular e GetIt</span>
                    </p>
                    <p className='text=[15px] text-[#d3d2d2] font-normal mt-[0.5rem]'>
                        Consumo de Apis: 
                        <span className='text=[15px] text-[#d3d2d2] font-normal'> Dio e Http</span>
                    </p>
                    <p className='text=[15px] text-[#d3d2d2] font-normal mt-[0.5rem]'>
                        Testes: 
                        <span className='text=[15px] text-[#d3d2d2] font-normal'> Mockito e Mocktail</span>
                    </p>
                    <p className='text=[15px] text-[#d3d2d2] font-normal mt-[0.5rem]'>
                            Navegação:
                        <span className='text=[15px] text-[#d3d2d2] font-normal'> Modular e GoRouter</span>
                    </p>
                </div>
                
            </div>
            <div data-aos='zoom-in' data-aos-delay='300'>
                <div className='bg-orange-700 hover:scale-110 transform transition-all duration-300  uppercase font-semibold text-center p-[2rem]'>
                    <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1rem]'>
                    Devops e Backend
                    </h1>
                    <p className='text=[15px] text-[#d3d2d2] font-normal lowercase mb-[1rem] first-letter:uppercase'>
                        Desenvolvimento de Apis e proxys utilizando de Java e JavaScript.
                    </p>
                    <p className='text=[18px] text-[#d3d2d2] font-bold mb-[1rem]'>
                        Tecnologias usadas:
                    </p>
                    <p className='text=[15px] text-[#d3d2d2] font-normal'>
                        SpringBoot e Hibernate
                    </p>
                    <p className='text=[15px] text-[#d3d2d2] font-normal mt-[0.5rem]'>
                        MySql e PostgreSQL
                    </p>
                    <p className='text=[15px] text-[#d3d2d2] font-normal mt-[0.5rem]'>
                        APIGEE
                    </p>
                    <p className='text=[15px] text-[#d3d2d2] font-normal mt-[0.5rem]'>
                        GitHub, BitBucket, GitFlow, Git
                    </p>
                    <p className='text=[15px] text-[#d3d2d2] font-normal mt-[0.5rem]'>
                        CI/CD, GitLab, Firebase, AWS, LINUX
                    </p>
                </div>
            </div>
            <div data-aos='fade-left' data-aos-delay='500'>
                <div className='bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>
                    <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                        QA
                    </h1>
                    <p className='text=[15px] text-[#d3d2d2] font-normal lowercase mb-[1rem] first-letter:uppercase'>
                        Teste manuais e automatizados de apis e proxys.
                    </p>
                    <p className='text=[18px] text-[#d3d2d2] font-bold mb-[1rem]'>
                        Tecnologias usadas:
                    </p>
                    <p className='text=[15px] text-[#d3d2d2] font-normal'>
                        Postman
                    </p>
                    <p className='text=[15px] text-[#d3d2d2] font-normal mt-[0.5rem]'>
                        Cucumber
                    </p>
                    <p className='text=[15px] text-[#d3d2d2] font-normal mt-[0.5rem]'>
                        SoapUi
                    </p>
                    <p className='text=[15px] text-[#d3d2d2] font-normal mt-[0.5rem]'>
                        Excel
                    </p>
                    <p className='text=[15px] text-[#d3d2d2] font-normal mt-[0.5rem]'>
                        CI/CD, GitLab
                    </p>
                </div>
                
            </div>
            
            <div></div>
            <div></div>
           </div>
        </div>
    );
}
export default Services;