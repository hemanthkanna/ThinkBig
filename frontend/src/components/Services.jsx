import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Import images
import websiteDevelopment from "../Assets/website development.png";
import mobileAppDevelopment from "../Assets/Mobile App Development.png";
import uiUxDesign from "../Assets/UI_UX Design.png";
import sapProjects from "../Assets/SAP Projects.png";
import digitalMarketing from "../Assets/Digital Marketing Services.png";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      smooth: true,
    });

    function animate(time) {
      lenis.raf(time);
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    // Background Image Animation
    gsap.to(".home-container", {
      backgroundPosition: "100% 100%",
      duration: 20,
      repeat: -1,
      ease: "none",
    });

    // Hero Text Animation
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 5, ease: "power3.out" }
    );

    // Button Animation
    gsap.fromTo(
      ".hero-button",
      { scale: 1, opacity: 1 },
      {
        scale: 1.1,
        opacity: 0.8,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );

    // Text Reveal Effect
    gsap.utils.toArray(".text-reveal").forEach((element) => {
      gsap.fromTo(
        element,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Service Cards Animation
    gsap.utils.toArray(".card").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      lenis.destroy(); // Proper cleanup of Lenis instance
      ScrollTrigger.killAll(); // Kill all ScrollTriggers
    };
  }, []);

  const handleNavigation = (path) => {
    navigate(path); // Programmatically navigate to the specified path
  };

  return (
    <>
      <Header />
      <section>
        <div className="home-container services-container"></div>

        <div className="hero-text">
          <h1>
            MASTERING TECHNOLOGY,
            <br />
            SHAPING THE FUTURE.
          </h1>
          <button className="hero-button">DISCOVER MORE!</button>
        </div>
      </section>

      <section className="services">
        <div className="services-text">
          <h1 className="text-reveal">SERVICES WE OFFER</h1>
          <p className="text-reveal">
            Unlock the Power of Innovation with Our Tailored Solutions. <br />
            Delivering Excellence in Every Aspect of Your Business.
          </p>
        </div>
        <div className="services-cards">
          <div
            className="card"
            onClick={() => handleNavigation("/services/websiteDevelopment")}
          >
            <img src={websiteDevelopment} alt="Website Development" />
            <h2>Website Development</h2>
            <p>
              Crafting dynamic, responsive websites that drive business growth
              and digital presence.
            </p>
          </div>
          <div
            className="card"
            onClick={() => handleNavigation("/services/mobileAppDevelopment")}
          >
            <img src={mobileAppDevelopment} alt="Mobile App Development" />
            <h2>Mobile App Development</h2>
            <p>
              Building intuitive, high-performance mobile apps to engage users
              and elevate your brand.
            </p>
          </div>
          <div
            className="card"
            onClick={() => handleNavigation("/services/uiUxDesign")}
          >
            <img src={uiUxDesign} alt="UI/UX Design" />
            <h2>UI/UX Design</h2>
            <p>
              Designing user-centric interfaces that blend aesthetics with
              seamless functionality for an exceptional digital experience.
            </p>
          </div>
          <div
            className="card"
            onClick={() => handleNavigation("/services/sapProjects")}
          >
            <img src={sapProjects} alt="SAP Projects" />
            <h2>SAP Projects</h2>
            <p>
              Implementing robust SAP solutions that optimize business processes
              and enhance operational efficiency.
            </p>
          </div>
          <div
            className="card"
            onClick={() => handleNavigation("/services/digitalMarketing")}
          >
            <img src={digitalMarketing} alt="Digital Marketing Services" />
            <h2>Digital Marketing Services</h2>
            <p>
              Driving targeted growth and brand visibility through innovative,
              data-driven digital marketing strategies.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
