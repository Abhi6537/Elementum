import '../styles/features.css';
import featureMeeting from '../assets/images/feature-meeting.png';
import featureProgress from '../assets/images/feature-progress.png';

function Features() {
  return (
    <section className="features" id="features">
      {/* Orange Vector Line — spans across both blocks */}
      <svg className="features__orange-line" viewBox="0 0 1483 654" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1488.65 134.467C1446.64 22.3687 1055.93 -89.3365 963 120.86C835.832 408.503 777.269 398.935 693.689 397.279C610.11 395.623 306.809 225.312 181.153 337.967C41.357 463.299 144.653 654.467 12.6534 618.727" stroke="#FF6D6D" strokeWidth="4"/>
      </svg>

      {/* ===== Block A: Text Left, Image Right ===== */}
      <div className="feature-block">
        <div className="feature-body">
          <div className="features__bg-glow"></div>
          <div className="feature-body__heading-wrapper">
            <h2 className="feature-body__heading">
              <span className="highlight-scribble">
                Tomorrow
                <svg className="highlight-scribble__svg" viewBox="0 0 372 33" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M45.0339 1.5H336.4L0.0641632 15.9H371.064L183.066 31.5" stroke="#FFC250" strokeWidth="3"/>
                </svg>
              </span> should<br />
              be better than <span className="highlight-pill">today</span>
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
        <div className="feature-image-wrapper">
          <div className="feature-image">
            <img src={featureMeeting} alt="Team collaboration in a meeting" />
          </div>
          <div className="features__deco-square"></div>
        </div>
      </div>

      {/* ===== Block B: Image Left, Text Right ===== */}
      <div className="feature-block feature-block--reverse">
        <div className="feature-body">
          <div className="feature-body__heading-wrapper">
            <h2 className="feature-body__heading">
              <span className="highlight-pill">See</span> how we can<br />
              help you <span className="highlight-doodle-underline">
                progress
                <svg className="highlight-doodle-underline__svg" viewBox="0 0 372 33" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M45.0339 1.5H336.4L0.0641632 15.9H371.064L183.066 31.5" stroke="#FFC250" strokeWidth="3"/>
                </svg>
              </span>
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
        <div className="feature-image-wrapper">
          <div className="feature-image">
            <img src={featureProgress} alt="Business professionals collaborating" />
          </div>
          <div className="features__deco-triangle features__deco-triangle--1"></div>
          <div className="features__deco-triangle features__deco-triangle--2"></div>
        </div>
      </div>
    </section>
  );
}

export default Features;
