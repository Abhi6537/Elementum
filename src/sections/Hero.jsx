import '../styles/hero.css';
import person1 from '../assets/images/person-1.png';
import person2 from '../assets/images/person-2.png';
import person3 from '../assets/images/person-3.png';
import person4 from '../assets/images/person-4.png';
import person5 from '../assets/images/person-5.png';
import person6 from '../assets/images/person-6.png';
import person7 from '../assets/images/person-7.png';
import person8 from '../assets/images/person-8.png';

/*
 * Circle layout matches Figma exactly:
 * Circle 1 (far-left, lower)       → person3
 * Circle 2 (second-left, bordered) → person1
 * Circle 3 (upper-left area)       → person2
 * Circle 4 (center-left, bottom)   → person4
 * Circle 5 (center, upper)         → person5
 * Circle 6 (center-right, bordered)→ person7
 * Circle 7 (right area, top)       → person6
 * Circle 8 (far-right, lower)      → person8
 */
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
  return (
    <section className="hero" id="hero">

      <div className="hero__content">

        {/* Left decorative SVG curves — Positioned from left edge of content container */}
        <svg className="hero__deco-red" viewBox="0 0 73 366" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-0.125563 3.81958C32.8912 14.0867 91.0122 45.1979 59.3623 87.5062C19.8 140.391 -8.5 121.794 -8.5 157.245C-8.5 192.696 44.6348 192.696 44.6348 268.246C44.6348 328.686 2.95478 362.393 -8.5 361.812" stroke="#FF7171" strokeWidth="6"/>
        </svg>

        <svg className="hero__deco-dark" viewBox="0 0 84 355" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.99996 3.81927C36.9367 14.0704 103.271 45.1331 71.6979 87.3753C32.2314 140.178 4 121.61 4 157.005C4 192.4 57.006 192.4 57.006 267.833C57.006 328.179 15.427 351.389 4 350.809" stroke="#0E0E0E" strokeWidth="6"/>
        </svg>

        {/* ===== HEAD AREA ===== */}
        <div className="hero__head">
          {/* Decorative elements */}
          <div className="hero__pill-pink"></div>
          <div className="hero__pill-green"></div>

          {/* Yellow underline — exact Figma SVG (Vector 5) */}
          <svg className="hero__underline" viewBox="0 0 595 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M72.1335 3H538.634L0.133545 27H594.134L293.134 53" stroke="#FFC250" strokeWidth="6"/>
          </svg>

          {/* Purple half-circle — pure CSS implementation (Ellipse 736) */}
          <div className="hero__purple-shape"></div>

          {/* Heading - Figma: Gerbil 100px/126px, centered */}
          <h1 className="hero__heading">
            The thinkers and
            doers were changing
            the status Quo with
          </h1>
        </div>

        {/* Subtitle - Figma: Satoshi 24px/36px, 831px wide */}
        <p className="hero__subtitle">
          We are a team of strategists, designers communicators, researchers. Togeather,
          we belive that progress only hghappens when you refuse to play things safe.
        </p>

        {/* ===== IMAGES AREA ===== */}
        <div className="hero__images-container">
          {/* Background glow — subtle */}
          <div className="hero__bg-glow"></div>

          {/* Avatar circles */}
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
