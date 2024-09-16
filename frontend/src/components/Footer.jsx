import { Link } from "react-router-dom";
import "../App.css";

import logo from "../Assets/TSS.png";

const Footer = () => {
  return (
    <>
      <footer>
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
              <Link to="/">HOME</Link>
            </li>
            <li className="about-link">
              <Link to="/about-us">ABOUT US</Link>
            </li>
            <li className="services-link">
              <Link to="/services">SERVICES </Link>
            </li>
            <li className="workflow-dynamics-link">
              <Link to="/workflow-dynamic"> WORKFLOW DYNAMICS</Link>
            </li>
            <li className="contact-link">
              <Link to="/contact">CONTACT</Link>
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
