import { XMarkIcon } from '@heroicons/react/16/solid/index.js';
import React from 'react';

interface Props {
    nav: boolean;
    closeNav: () => void;
    homeRef: React.RefObject<HTMLDivElement>;
    servicosRef: React.RefObject<HTMLDivElement>;
    sobreRef: React.RefObject<HTMLDivElement>;
    projetosRef: React.RefObject<HTMLDivElement>;
    contatoRef: React.RefObject<HTMLDivElement>;
    curriculoRef: React.RefObject<HTMLDivElement>;
}

const MobileNav = ({ nav, closeNav, homeRef, servicosRef, sobreRef, projetosRef, contatoRef, curriculoRef }: Props) => {

    const handleLinkClick = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navAnimation = nav ? 'translate-x-0' : '-translate-x-[100%]';


    return (
        <div className={`fixed ${navAnimation} transition-all duration-300 top-0 bottom-0 z-[10000] bg-[#09101a]`}>
            <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
                <div className="nav-link-mobile" onClick={() => handleLinkClick(homeRef)}>Home</div>
                <div className="nav-link-mobile" onClick={() => handleLinkClick(servicosRef)}>Serviços</div>
                <div className="nav-link-mobile" onClick={() => handleLinkClick(sobreRef)}>Sobre</div>
                <div className="nav-link-mobile" onClick={() => handleLinkClick(curriculoRef)}>Curriculo</div>
                <div className="nav-link-mobile" onClick={() => handleLinkClick(projetosRef)}>Projetos</div>
                <div className="nav-link-mobile" onClick={() => handleLinkClick(contatoRef)}>Contato</div>
            </div>
            <div onClick={closeNav} className='absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400'>
                <XMarkIcon />
            </div>
        </div>
    );
}
export default MobileNav;