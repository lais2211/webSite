import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skils from "@/components/Skils";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useRef, useEffect } from "react";

const HomePage = () => {

  const [nav, setNav] = useState(false);
  const openNave = () => setNav(true);
  const closeNav = () => setNav(false);
  const homeRef = useRef<HTMLDivElement>(null);
  const servicosRef = useRef<HTMLDivElement>(null);
  const sobreRef = useRef<HTMLDivElement>(null);
  const projetosRef = useRef<HTMLDivElement>(null);
  const contatoRef = useRef<HTMLDivElement>(null);
  const curriculoRef = useRef<HTMLDivElement>(null);

  //Animation AOS

  useEffect(() => {
   
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
  })

  return <div className="overflow-x-hidden">
    <div id="home" ref={homeRef}>
      <MobileNav nav={nav} closeNav={closeNav} homeRef={homeRef}
        servicosRef={servicosRef}
        sobreRef={sobreRef}
        projetosRef={projetosRef}
        contatoRef={contatoRef}
        curriculoRef={curriculoRef} />
      <Nav openNave={openNave}
        homeRef={homeRef}
        servicosRef={servicosRef}
        sobreRef={sobreRef}
        projetosRef={projetosRef}
        contatoRef={contatoRef}
        curriculoRef={curriculoRef} />
      <Hero />
      <div className="relative z-[30]">
        <div id="about" ref={sobreRef}>
          <About />
        </div>
        <div id="services" ref={servicosRef}>
          <Services />
        </div>
        <div id="skills" ref={curriculoRef}>
          <Skils />
        </div>
        <div id="projects" ref={projetosRef}>
          <Projects />
        </div>
        <div id="contact" ref={contatoRef}>
          <Footer />
        </div>
      </div>
    </div>
  </div>;
};
export default HomePage;