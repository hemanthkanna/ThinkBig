import { useEffect, useRef, useState } from "react";
import "../App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
const Header = () => {
  const navbarRef = useRef(null);
  const [menuOpen, setmenuOpen] = useState(false);

  useEffect(() => {
    const header = navbarRef.current;
    const links = header.querySelectorAll("li");

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

  return (
    <header ref={navbarRef} className="header">
      <nav className="navbar">
        <div className="logo-box">
          <Link to="/">
            {" "}
            <img
              src="../../src/Assets/TSS.png"
              alt="logo"
              className="logo"
            />{" "}
          </Link>
        </div>
        <div className="hamburger" onClick={() => setmenuOpen(!menuOpen)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="nav-links-box">
          <ul className={`${menuOpen ? "open" : ""} nav-links`}>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about-us">ABOUT US</Link>
            </li>
            <li>
              <Link to="/workflow-dynamics"> WORKFLOW DYNAMICS</Link>
            </li>
            <li>
              <Link to="/services">SERVICES</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
        <div className="emailus">
          {/* <span>
            <img src="../../src/Assets/emailus.jpeg" />
          </span> */}
          <span>
            <p className="e-text">EMAIL US</p>
            <p>hr@thinkbigsoft.com</p>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
