import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import '../styles/footer.css';

gsap.registerPlugin(ScrollTrigger);

const footerData = [
  {
    title: 'Company',
    links: ['Home', 'Studio', 'Service', 'Blog'],
  },
  {
    title: 'Terms & Policies',
    links: ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accesibility'],
  },
  {
    title: 'Follow Us',
    links: ['Instagram', 'LinkedIn', 'Youtube', 'Twitter'],
  },
];

function Footer() {
  const container = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 90%',
        once: true
      }
    });

    tl.from('.footer__column', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    });

    tl.from('.footer__copyright', {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, "-=0.2");

  }, { scope: container });

  return (
    <footer className="footer" id="footer" ref={container}>
      <div className="footer__inner">
        <div className="footer__columns">
          {footerData.map((column) => (
            <div className="footer__column" key={column.title}>
              <h4 className="footer__column-title">{column.title}</h4>
              <div className="footer__links">
                {column.links.map((link) => (
                  <a href="#" className="footer__link" key={link}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className="footer__column">
            <h4 className="footer__column-title">Terms & Policies</h4>
            <div className="footer__address">
              <p>1498w Fluton ste, STE</p>
              <p>2D Chicgo, IL 63867.</p>
              <br />
              <p>(123) 456789000</p>
              <br />
              <p>info@elementum.com</p>
            </div>
          </div>
        </div>

        <p className="footer__copyright">
          &copy;2023 Elementum. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
