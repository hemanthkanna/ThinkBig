import { useEffect, useRef, useState } from "react";
import "../App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link, useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const navbarRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const header = navbarRef.current;

    gsap.to(header, {
      backgroundColor: "#000",
      color: "#fff",
      duration: 0.3,
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom",
        toggleActions: "play reverse play reverse",
      },
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  const handleMenuToggle = () => {
    setMenuOpen((prevState) => !prevState);
    if (!menuOpen) setDropdownOpen(false); // Close dropdown when closing menu
  };

  return (
    <header ref={navbarRef} className="header">
      <nav className="navbar">
        <div className="logo-box">
          <Link to="/">
            <img src="../../src/Assets/TSS.png" alt="logo" className="logo" />
          </Link>
        </div>
        <div className="hamburger" onClick={handleMenuToggle}>
          <div className={`line ${menuOpen ? "open" : ""}`}></div>
          <div className={`line ${menuOpen ? "open" : ""}`}></div>
          <div className={`line ${menuOpen ? "open" : ""}`}></div>
        </div>
        <div className="nav-links-box">
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about-us">ABOUT US</Link>
            </li>
            <li>
              <Link to="/workflow-dynamics"> WORKFLOW DYNAMICS</Link>
            </li>
            <li
              className="dropdown"
              onMouseEnter={handleDropdown}
              onMouseLeave={handleDropdown}
            >
              <span className="span-1" onClick={handleDropdown}>
                <Link to="/services">SERVICES</Link>
              </span>
              <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                <li>
                  <Link to="/services/sapProjects">SAP Projects</Link>
                </li>
                <li>
                  <Link to="/services/websiteDevelopment">Web Development</Link>
                </li>
                <li>
                  <Link to="/services/mobileAppDevelopment">
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link to="/services/uiUxDesign">UI-UX Design</Link>
                </li>
                <li>
                  <Link to="/services/digitalMarketing">
                    Digital Marketing Services
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
        <div className="emailus">
          <span>
            <p className="e-text">EMAIL US</p>
            <p>
              <a href="mailto:" className="mailto">
                hr@thinkbigsoft.com
              </a>
            </p>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
