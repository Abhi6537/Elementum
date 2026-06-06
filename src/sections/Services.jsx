import '../styles/services.css';
import featureProgress from '../assets/images/feature-progress.png';

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
  return (
    <section className="services" id="services">
      {/* Section Heading */}
      <div className="services__heading-wrapper">
        {/* Squiggly Line from Right Edge */}
        <svg className="services__svg-line" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 500 100 C 400 100, 300 150, 200 250 C 100 350, 50 350, 0 350" stroke="#FF7171" strokeWidth="3" />
        </svg>
        <h2 className="services__heading">
          What we <span className="highlight-pill">can</span><br />
          <span className="highlight-underline">offer</span> you!
        </h2>
      </div>

      {/* Service Items */}
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
