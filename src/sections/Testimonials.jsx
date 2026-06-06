import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import '../styles/testimonials.css';
import person1 from '../assets/images/person-1.png';
import person2 from '../assets/images/person-2.png';
import person3 from '../assets/images/person-3.png';
import person4 from '../assets/images/person-4.png';
import person5 from '../assets/images/person-5.png';
import person6 from '../assets/images/person-6.png';
import person7 from '../assets/images/person-7.png';
import person8 from '../assets/images/person-8.png';

gsap.registerPlugin(ScrollTrigger);

const portraits = [
  { src: person1, className: 'testimonials__portrait--1' },
  { src: person5, className: 'testimonials__portrait--2' },
  { src: person3, className: 'testimonials__portrait--3' },
  { src: person6, className: 'testimonials__portrait--4' },
  { src: person4, className: 'testimonials__portrait--5' },
  { src: person7, className: 'testimonials__portrait--6' },
  { src: person2, className: 'testimonials__portrait--7' },
  { src: person8, className: 'testimonials__portrait--8' },
];

function Testimonials() {
  const container = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.from('.testimonials__heading-wrapper', {
      scrollTrigger: {
        trigger: '.testimonials__heading-wrapper',
        start: 'top 85%',
        once: true
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.testimonial-card', {
      scrollTrigger: {
        trigger: '.testimonials__content',
        start: 'top 80%',
        once: true
      },
      scale: 0.95,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.5)'
    });

    const avatars = container.current.querySelectorAll('.testimonials__portrait');
    avatars.forEach((avatar, index) => {
      gsap.from(avatar, {
        scrollTrigger: {
          trigger: '.testimonials__content',
          start: 'top 70%',
          once: true
        },
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'back.out(1.5)',
        onComplete: () => {
          gsap.to(avatar, {
            y: `random(-15, 15)`,
            x: `random(-10, 10)`,
            duration: `random(3, 5)`,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          });
        }
      });
    });

  }, { scope: container });

  return (
    <section className="testimonials" id="testimonials" ref={container}>
      <div className="testimonials__heading-wrapper">
        <h2 className="testimonials__heading">
          <span className="testimonials__word-what">
            <span className="testimonials__pill"></span>
            What
          </span>{' '}our customer<br />
          says <span className="testimonials__word-about">
            About Us
            <span className="testimonials__underline"></span>
          </span>
        </h2>
      </div>

      <div className="testimonials__content">
        {portraits.map((portrait, index) => (
          <div
            key={index}
            className={`testimonials__portrait ${portrait.className}`}
          >
            <img src={portrait.src} alt="Customer" />
          </div>
        ))}

        <div className="testimonial-card">
          <span className="testimonial-card__quotes-open">&ldquo;</span>
          <p className="testimonial-card__text">
            Elementum delivered the site with inthe timeline
            as they requested. Inthe end, the client found a 50%
            increase in traffic with in days since its launch. They
            also had an impressive ability to use technologies that
            the company hasn&apos;t used, which have also proved to
            be easy to use and reliable
          </p>
          <span className="testimonial-card__quotes-close">&rdquo;</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
