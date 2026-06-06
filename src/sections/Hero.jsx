import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import '../styles/hero.css';
import person1 from '../assets/images/person-1.png';
import person2 from '../assets/images/person-2.png';
import person3 from '../assets/images/person-3.png';
import person4 from '../assets/images/person-4.png';
import person5 from '../assets/images/person-5.png';
import person6 from '../assets/images/person-6.png';
import person7 from '../assets/images/person-7.png';
import person8 from '../assets/images/person-8.png';

const heroImages = [
  { src: person3, alt: 'Team member', bordered: false },
  { src: person1, alt: 'Team member', bordered: true },
  { src: person2, alt: 'Team member', bordered: false },
  { src: person4, alt: 'Team member', bordered: false },
  { src: person5, alt: 'Team member', bordered: false },
  { src: person7, alt: 'Team member', bordered: true },
  { src: person6, alt: 'Team member', bordered: false },
  { src: person8, alt: 'Team member', bordered: false },
];

function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline();

    const splitText = new SplitType('.hero__heading', { types: 'lines,words' });
    gsap.set(splitText.lines, { overflow: 'hidden' });
    
    tl.from(splitText.lines, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power4.out',
    });
    const wordsToHighlight = splitText.words.filter(word => 
      ['thinkers', 'changing', 'status'].some(hw => word.innerText.toLowerCase().includes(hw))
    );
    
    tl.from(wordsToHighlight, {
      scale: 0.8,
      duration: 0.6,
      ease: 'back.out(1.7)',
      stagger: 0.1
    }, "-=0.4");
    tl.from('.hero__subtitle', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, "-=0.2");
    tl.from('.hero__circle', {
      y: 40,
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: 'back.out(1.5)'
    }, "-=0.4");
    gsap.to('.hero__deco-red, .hero__deco-dark, .hero__pill-pink, .hero__pill-green, .hero__purple-shape', {
      y: 'random(-15, 15)',
      x: 'random(-10, 10)',
      rotation: 'random(-5, 5)',
      duration: 'random(3, 5)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: {
        amount: 2,
        from: 'random'
      }
    });

  }, { scope: container });

  return (
    <section className="hero" id="hero" ref={container}>

      <div className="hero__content">
        <svg className="hero__deco-red" viewBox="0 0 73 366" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-0.125563 3.81958C32.8912 14.0867 91.0122 45.1979 59.3623 87.5062C19.8 140.391 -8.5 121.794 -8.5 157.245C-8.5 192.696 44.6348 192.696 44.6348 268.246C44.6348 328.686 2.95478 362.393 -8.5 361.812" stroke="#FF7171" strokeWidth="6"/>
        </svg>

        <svg className="hero__deco-dark" viewBox="0 0 84 355" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.99996 3.81927C36.9367 14.0704 103.271 45.1331 71.6979 87.3753C32.2314 140.178 4 121.61 4 157.005C4 192.4 57.006 192.4 57.006 267.833C57.006 328.179 15.427 351.389 4 350.809" stroke="#0E0E0E" strokeWidth="6"/>
        </svg>

        <div className="hero__head">
          <div className="hero__pill-pink"></div>
          <div className="hero__pill-green"></div>

          <svg className="hero__underline" viewBox="0 0 595 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M72.1335 3H538.634L0.133545 27H594.134L293.134 53" stroke="#FFC250" strokeWidth="6"/>
          </svg>

          <div className="hero__purple-shape"></div>

          <h1 className="hero__heading">
            The thinkers and<br/>
            doers were changing<br/>
            the status Quo with
          </h1>
        </div>

        <p className="hero__subtitle">
          We are a team of strategists, designers, communicators, researchers. Together,
          we believe that progress only happens when you refuse to play things safe.
        </p>

        <div className="hero__images-container">
          <div className="hero__bg-glow"></div>

          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`hero__circle hero__circle--${index + 1}${image.bordered ? ' hero__circle--bordered' : ''}`}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;
