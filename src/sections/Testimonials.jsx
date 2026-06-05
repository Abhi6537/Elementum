import '../styles/testimonials.css';
import person1 from '../assets/images/person-1.png';
import person2 from '../assets/images/person-2.png';
import person3 from '../assets/images/person-3.png';
import person4 from '../assets/images/person-4.png';
import person5 from '../assets/images/person-5.png';
import person6 from '../assets/images/person-6.png';
import person7 from '../assets/images/person-7.png';
import person8 from '../assets/images/person-8.png';

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
  return (
    <section className="testimonials" id="testimonials">
      {/* Section Heading */}
      <div className="testimonials__heading-wrapper">
        <div className="testimonials__pill"></div>
        <div className="testimonials__underline"></div>
        <h2 className="testimonials__heading">
          What our customer{'\n'}
          says About Us
        </h2>
      </div>

      {/* Content with portraits and card */}
      <div className="testimonials__content">
        {/* Scattered portraits */}
        {portraits.map((portrait, index) => (
          <div
            key={index}
            className={`testimonials__portrait ${portrait.className}`}
          >
            <img src={portrait.src} alt="Customer" />
          </div>
        ))}

        {/* Quote Card */}
        <div className="testimonial-card">
          <span className="testimonial-card__quotes-open">&ldquo;&ldquo;</span>
          <p className="testimonial-card__text">
            Elementum delivered the site with inthe timeline
            as they requested. Inthe end, the client found a 50%
            increase in traffic with in days since its launch. They
            also had an impressive ability to use technologies that
            the company hasn&apos;t used, which have also proved to
            be easy to use and reliable
          </p>
          <span className="testimonial-card__quotes-close">&rdquo;&rdquo;</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
