import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import '../styles/services.css';
import featureProgress from '../assets/images/feature-progress.png';

gsap.registerPlugin(ScrollTrigger);

const serviceItems = [
  {
    description: 'Office of multiple\ninterest content',
    title: 'Colaborative & partnership',
    thumbnail: null,
  },
  {
    description: 'The hanger US Air force\ndigital experimental',
    title: 'We talk about our weight',
    thumbnail: null,
  },
  {
    description: 'Delta faucet content,\nsocial, digital',
    title: 'Piloting digital confidence',
    thumbnail: featureProgress,
  },
];

function Services() {
  const container = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const splitHeading = new SplitType('.services__heading', { types: 'chars,words' });
    gsap.set(splitHeading.chars, { opacity: 0, y: 20 });
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.services__heading-wrapper',
        start: 'top 80%',
        once: true
      }
    });

    tl.to(splitHeading.chars, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.02,
      ease: 'back.out(2)'
    });

    const svgLine = container.current.querySelector('.services__svg-line path');
    if (svgLine) {
      const length = svgLine.getTotalLength();
      gsap.set(svgLine, { strokeDasharray: length, strokeDashoffset: length });
      tl.to(svgLine, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: 'power2.inOut'
      }, "-=0.5");
    }

    const rows = container.current.querySelectorAll('.service-item');
    rows.forEach((row, index) => {
      gsap.from(row, {
        scrollTrigger: {
          trigger: row,
          start: 'top 85%',
          once: true
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    });

  }, { scope: container });

  return (
    <section className="services" id="services" ref={container}>
      <div className="services__heading-wrapper">
        <svg className="services__svg-line" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 600 50 C 450 50, 400 150, 250 150 C 150 150, 100 300, 0 250" stroke="#FF7171" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <h2 className="services__heading">
          What we <span className="highlight-pill">can</span><br />
          <span className="highlight-underline">offer</span> you!
        </h2>
      </div>

      <div className="services__list">
        {serviceItems.map((item, index) => (
          <div className="service-item" key={index}>
            <div className="service-item__description">
              <p className="service-item__desc-text">
                {item.description.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < item.description.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
            <h3 className="service-item__title">{item.title}</h3>
            {item.thumbnail && (
              <div className="service-item__thumbnail">
                <img src={item.thumbnail} alt={item.title} />
              </div>
            )}
            <div className="service-item__arrow" role="link" aria-label={`Learn more about ${item.title}`}></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
