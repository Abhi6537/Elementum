import '../styles/features.css';
import featureMeeting from '../assets/images/feature-meeting.png';
import featureProgress from '../assets/images/feature-progress.png';

function Features() {
  return (
    <section className="features" id="features">
      {/* Decorative triangles */}
      <div className="features__deco-triangle features__deco-triangle--1"></div>
      <div className="features__deco-triangle features__deco-triangle--2"></div>

      {/* Feature Block A: Text Left, Image Right */}
      <div className="feature-block">
        <div className="feature-body">
          <div className="feature-body__heading-wrapper">
            <div className="feature-body__pill feature-body__pill--a"></div>
            <div className="feature-body__underline feature-body__underline--a"></div>
            <h2 className="feature-body__heading">
              Tomorrow should<br />
              be better than today
            </h2>
          </div>
          <p className="feature-body__text">
            We are a team of strategists, designers communicators, researchers.
            Togeather, we belive that progress only happens when you refuse
            to play things safe.
          </p>
          <a href="#" className="feature-body__readmore">
            Read more
            <span className="feature-body__readmore-arrow"></span>
          </a>
        </div>
        <div className="feature-image">
          <img src={featureMeeting} alt="Team collaboration in a meeting" />
        </div>
      </div>

      {/* Feature Block B: Image Left, Text Right */}
      <div className="feature-block feature-block--reverse">
        <div className="feature-body">
          <div className="feature-body__heading-wrapper">
            <div className="feature-body__pill feature-body__pill--b"></div>
            <div className="feature-body__underline feature-body__underline--b"></div>
            <h2 className="feature-body__heading">
              See how we can help you progress
            </h2>
          </div>
          <p className="feature-body__text">
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, comms and social research.
          </p>
          <a href="#" className="feature-body__readmore">
            Read more
            <span className="feature-body__readmore-arrow"></span>
          </a>
        </div>
        <div className="feature-image">
          <img src={featureProgress} alt="Business professionals collaborating" />
        </div>
      </div>
    </section>
  );
}

export default Features;
