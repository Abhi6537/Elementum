import '../styles/footer.css';

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
  return (
    <footer className="footer" id="footer">
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

          {/* Address column */}
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
