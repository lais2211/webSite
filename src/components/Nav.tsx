import { Bars3Icon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
    openNave: () => void;
    homeRef: React.RefObject<HTMLDivElement>;
    servicosRef: React.RefObject<HTMLDivElement>;
    sobreRef: React.RefObject<HTMLDivElement>;
    projetosRef: React.RefObject<HTMLDivElement>;
    curriculoRef: React.RefObject<HTMLDivElement>;
}

const Nav = ({openNave, homeRef, servicosRef, sobreRef, projetosRef,  curriculoRef}: Props) => {
    const handleLinkClick = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleLinkedInClickLinkedin = () => {
        const linkedInUrl = 'https://www.linkedin.com/in/la%C3%ADs-sousa-developer-android-flutter/';
        window.open(linkedInUrl, '_blank');
    };
    return (
        <div className="w-[100%] sticky x-[1000] tap-0 h-[12vh] bg-[#141c27] shadow-md">
            <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
                <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">SOFTWARE <span className="text-yellow-300">DEVELOPER</span></h1>
                <div className="nav-link" onClick={() => handleLinkClick(homeRef)}>Home</div>
                <div className="nav-link" onClick={() => handleLinkClick(servicosRef)}>Serviços</div>
                <div className="nav-link" onClick={() => handleLinkClick(sobreRef)}>Sobre</div>
                <div className="nav-link" onClick={() => handleLinkClick(curriculoRef)}>Currículo</div>
                <div className="nav-link" onClick={() => handleLinkClick(projetosRef)}>Projetos</div>
                <div className="nav-link" onClick={handleLinkedInClickLinkedin}>Linkedin</div>
                <div onClick={openNave}>
                    <Bars3Icon className="w-[2rem] md: hidden h-[2rem] cursor-pointer text-yellow-300"></Bars3Icon>
                </div>
            </div>
        </div>
    );

}

export default Nav;