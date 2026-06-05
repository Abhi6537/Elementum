import '../styles/newsletter.css';

function Newsletter() {
  return (
    <section className="newsletter" id="newsletter">
      {/* Decorative elements */}
      <div className="newsletter__deco-purple"></div>

      <div className="newsletter__content">
        <h2 className="newsletter__heading">
          Subscribe to<br />
          our newsletter
        </h2>
        <p className="newsletter__subtitle">
          To make your stay special and even more memorable
        </p>
        <button className="newsletter__button" type="button">
          Subscribe Now
        </button>
      </div>

      <div className="newsletter__divider"></div>
    </section>
  );
}

export default Newsletter;
