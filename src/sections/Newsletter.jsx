import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import '../styles/newsletter.css';

gsap.registerPlugin(ScrollTrigger);

function Newsletter() {
  const container = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const splitHeading = new SplitType('.newsletter__heading', { types: 'lines,words' });
    gsap.set(splitHeading.lines, { overflow: 'hidden' });
    
    gsap.from(splitHeading.words, {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        once: true
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: 'back.out(1.5)'
    });

    gsap.to('.newsletter__deco-purple', {
      y: 'random(-20, 20)',
      x: 'random(-10, 10)',
      rotation: 'random(-10, 10)',
      duration: 'random(3, 5)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    gsap.from('.newsletter__subtitle', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
        once: true
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.4,
      ease: 'power3.out'
    });

    gsap.from('.newsletter__button', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
        once: true
      },
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      delay: 0.6,
      ease: 'back.out(1.5)'
    });

  }, { scope: container });

  const handleRipple = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <section className="newsletter" id="newsletter" ref={container}>
      <div className="newsletter__deco-purple"></div>

      <div className="newsletter__content">
        <h2 className="newsletter__heading">
          Subscribe to<br />
          our newsletter
        </h2>
        <p className="newsletter__subtitle">
          To make your stay special and even more memorable
        </p>
        <button className="newsletter__button" type="button" onClick={handleRipple}>
          Subscribe Now
        </button>
      </div>

      <div className="newsletter__divider"></div>
    </section>
  );
}

export default Newsletter;
