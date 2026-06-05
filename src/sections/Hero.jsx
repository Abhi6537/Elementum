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

        {/* ===== HEAD AREA ===== */}
        <div className="hero__head">
          {/* Decorative elements */}
          <div className="hero__pill-pink"></div>
          <div className="hero__pill-green"></div>
          <div className="hero__underline"></div>
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
          {/* Background glow */}
          <div className="hero__bg-glow"></div>

          {/* Left decorative elements */}
          <div className="hero__deco-curve"></div>
          <div className="hero__deco-dark-circle"></div>

          {/* Red glow */}
          <div className="hero__deco-glow"></div>

          {/* Avatar circles */}
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`hero__circle hero__circle--${index + 1}`}
              style={image.bordered ? { border: '8px solid #FFFFFF', boxSizing: 'border-box' } : undefined}
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
