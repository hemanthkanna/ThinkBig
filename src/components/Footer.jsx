import "../App.css";

import logo from "../Assets/TSS.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div></div>
        <div className="TB-info">
          <img src={logo} alt="" className="logo" />
          <p>
            We are dedicated to creating projects and sites that combine
            stunning design with streamlined functionality, ensuring that
            everyday tasks are handled with speed and efficiency.
          </p>
        </div>
        <div className="explore-links child-grid">
          <h3>EXPLORE</h3>
          <ul className="footer-links">
            <li className="home-link">
              <a href="">HOME</a>
            </li>
            <li className="about-link">
              <a href="">ABOUT</a>
            </li>
            <li className="services-link">
              <a href="">SERVICES</a>
            </li>
            <li className="workflow-dynamics-link">
              <a href="">WORKFLOW DYNAMICS</a>
            </li>
            <li className="contact-link">
              <a href="">CONTACT</a>
            </li>
          </ul>
        </div>
        <div className="quick-links child-grid">
          <h3>QUICK LINKS</h3>
          <ul className="footer-links">
            <li className="terms-link">
              <a href="">Terms & Condition</a>
            </li>
            <li className="policy-link">
              <a href="">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="contact-info-links child-grid">
          <h3>CONTACT</h3>
          <h4>THINKBIG SOFTWARE SOLUTION PVT LTD</h4>
          <ul className="footer-links">
            <span></span>
            <p>
              Olympia Teknos Park, 5th Floor, South Phase,SIDCO Industrial
              Estate, Guindy, Chennai, Tamil Nadu 600032, India
            </p>
            <span></span>
            <li>
              <a href="tel:+91 75400 73500">+91 75400 73500</a>
            </li>
            <span></span>
            <li>
              <a href="mailto:hr@thinkbigsoft.com">hr@thinkbigsoft.com</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
