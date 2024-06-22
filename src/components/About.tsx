import React from "react";
import Image from 'next/image';

const About = () => {
    return <div className="bg-[#121121] pb-[3rem] pt-[4rem] md: pt-[8rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
            <div>
                <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]">Sobre mim</h1>
                <h2 className="text-[25px] md: text-[35px] ls: text-[45px] md: leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">Transformando <span className="text-yellow-400">Visões</span></h2>
                <div className="mb-[3rem] flex items-center md: space-x-10">
                <span className="w-[100px] hidden md:block h-[10px] bg-slate-400 rounded-sm"></span>
                    <p className="text-[19px] text-slate-300 w-[80%]">
                        Sou uma desenvolvedora com 3 anos de experiência e pós graduação em desenvolvimento mobile.
                        Atuei em projetos de backend e frontend com desenvolvimento de Apis, proxys, aplicativos mobile e web.
                        Além de desenvolvimento também trabalhei como QA, tenho facilidade em aprendizado e passagem de conhecimento, lecionei em treinamento de equipes de QA e de novatos na equipe de desenvolvimento, tomei iniciativas na squad com criação de documentação para auxilio de code review e duvidas cotidiana, liderei grandes projetos para empresas de grande porte no brasil e prestei serviço para empresas de outros paises.
                    </p>
                </div>
            </div>
            <div data-aos='fade-left' data-as-delay='300' className=" lg: w-[650px] mx-auto md: mx-0 mt-[2rem] lg: mt-0 lg: h-[650px] w-[300px] h-[300px] relative">
                <Image src="/images/about.jpg" alt="user" layout='fill' className='relative z-[11] w-[100%] h-[100%] object-contain ' objectFit='contain' />
                <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div>
            </div>
        </div>
    </div>
};

export default About;