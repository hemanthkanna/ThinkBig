import { useEffect, useRef, useState } from "react";
import "../App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

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
          <img src="../../src/Assets/TSS.png" alt="logo" className="logo" />
        </div>
        <div className="hamburger" onClick={() => setmenuOpen(!menuOpen)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="nav-links-box">
          <ul className={`${menuOpen ? "open" : ""} nav-links`}>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">ABOUT US</a>
            </li>
            <li>
              <a href="">HOW IT WORKS</a>
            </li>
            <li>
              <a href="">SERVICES</a>
            </li>
            <li>
              <a href="">CONTACT</a>
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
