import { useEffect } from "react";
import Header from "./Header";
import Lenis from "lenis";
import gsap from "gsap";
import { NumberCounts, ProjectCount } from "../components/NumberCount";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Import images
import websiteDevelopment from "../Assets/website development.png";
import mobileAppDevelopment from "../Assets/Mobile App Development.png";
import uiUxDesign from "../Assets/UI_UX Design.png";
import sapProjects from "../Assets/SAP Projects.png";
import digitalMarketing from "../Assets/Digital Marketing Services.png";
import modernTech from "../Assets/Modern Tech.png";
import brilliantSupport from "../Assets/Brilliant Support.png";
import speedyExecution from "../Assets/Speedy Execution.png";
import globe from "../Assets/17.png";
import arrow from "../Assets/AIM.png";

const Home = () => {
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

    // Animation for .our-principle-text-box
    gsap.fromTo(
      ".our-principle-text-box",
      { opacity: 0, x: "-100vw" },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".our-principle-text-box",
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animation for .aim-box
    gsap.fromTo(
      ".aim-box",
      { opacity: 0, x: "100vw" },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".aim-box",
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      lenis.destroy(); // Proper cleanup of Lenis instance
      ScrollTrigger.killAll(); // Kill all ScrollTriggers
    };
  }, []);

  return (
    <>
      <Header />
      <section>
        <div className="home-container"></div>

        <div className="hero-text">
          <h1>
            MASTERING TECHNOLOGY,
            <br />
            SHAPING THE FUTURE.
          </h1>
          <button className="hero-button">DISCOVER MORE!</button>
        </div>
      </section>
      <section className="about">
        <NumberCounts />
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
          <div className="card">
            <img src={websiteDevelopment} alt="Website Development" />
            <h2>Website Development</h2>
            <p>
              Crafting dynamic, responsive websites that drive business growth
              and digital presence.
            </p>
          </div>
          <div className="card">
            <img src={mobileAppDevelopment} alt="Mobile App Development" />
            <h2>Mobile App Development</h2>
            <p>
              Building intuitive, high-performance mobile apps to engage users
              and elevate your brand.
            </p>
          </div>
          <div className="card">
            <img src={uiUxDesign} alt="UI/UX Design" />
            <h2>UI/UX Design</h2>
            <p>
              Designing user-centric interfaces that blend aesthetics with
              seamless functionality for an exceptional digital experience.
            </p>
          </div>
          <div className="card">
            <img src={sapProjects} alt="SAP Projects" />
            <h2>SAP Projects</h2>
            <p>
              Implementing robust SAP solutions that optimize business processes
              and enhance operational efficiency.
            </p>
          </div>
          <div className="card">
            <img src={digitalMarketing} alt="Digital Marketing Services" />
            <h2>Digital Marketing Services</h2>
            <p>
              Driving targeted growth and brand visibility through innovative,
              data-driven digital marketing strategies.
            </p>
          </div>
        </div>
      </section>
      <section className="our-projects">
        <div className="our-project-text">
          <h1 className="text-reveal">OUR PROJECT GALLERY</h1>
          <ul className="text-reveal">
            <li>ALL</li>
            <li>WEBSITES</li>
            <li>MOBILE APPS</li>
            <li>SAP PROJECTS</li>
            <li>UI UX DESIGN</li>
            <li>DIGITAL MARKETING</li>
          </ul>
        </div>
        <div className="our-projects-gallery"></div>
      </section>
      <section className="testimonial-card-box">
        <div className="testimonial-card">
          <div className="testimonial-text">
            <p>
              "We've been using ThinkBig for over a year now and it's truly been
              an incredible experience. Our team has worked tirelessly to
              develop our digital presence and we're so grateful for their help
              and support."
            </p>
            <div className="testimonial-author">
              <img src="https://via.placeholder.com/100" alt="" />
              <h3>John Doe</h3>
              <p>CEO, Company XYZ</p>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-text">
            <p>
              "We've been using ThinkBig for over a year now and it's truly been
              an incredible experience. Our team has worked tirelessly to
              develop our digital presence and we're so grateful for their help
              and support."
            </p>
            <div className="testimonial-author">
              <img src="https://via.placeholder.com/100" alt="" />
              <h3>John Doe</h3>
              <p>CEO, Company XYZ</p>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-text">
            <p>
              "We've been using ThinkBig for over a year now and it's truly been
              an incredible experience. Our team has worked tirelessly to
              develop our digital presence and we're so grateful for their help
              and support."
            </p>
            <div className="testimonial-author">
              <img src="https://via.placeholder.com/100" alt="" />
              <h3>John Doe</h3>
              <p>CEO, Company XYZ</p>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-text">
            <p>
              "We've been using ThinkBig for over a year now and it's truly been
              an incredible experience. Our team has worked tirelessly to
              develop our digital presence and we're so grateful for their help
              and support."
            </p>
            <div className="testimonial-author">
              <img src="https://via.placeholder.com/100" alt="" />
              <h3>John Doe</h3>
              <p>CEO, Company XYZ</p>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-text">
            <p>
              "We've been using ThinkBig for over a year now and it's truly been
              an incredible experience. Our team has worked tirelessly to
              develop our digital presence and we're so grateful for their help
              and support."
            </p>
            <div className="testimonial-author">
              <img src="https://via.placeholder.com/100" alt="" />
              <h3>John Doe</h3>
              <p>CEO, Company XYZ</p>
            </div>
          </div>
        </div>
      </section>
      <section className="content-section">
        <div className="content-box">
          <h1>ADVANCE WITH TECH AND EXPLORE NEW DIMENSIONS</h1>
        </div>
        <div className="content-cards">
          <div className="content-card">
            <img src={modernTech} alt="modern tech" />
            <h2>modern Tech </h2>
          </div>
          <div className="content-card">
            <img src={brilliantSupport} alt="brilliant support" />
            <h2>brilliant Support</h2>
          </div>
          <div className="content-card">
            <img src={speedyExecution} alt="speedy execution" />
            <h2>speedy Execution</h2>
          </div>
        </div>
      </section>
      <section>
        <div className="our-principle-section">
          <div className="our-principle-text-box">
            <img
              className="globe"
              src={globe}
              alt="Globe representing our global principles"
            />
            <div className="principle-text">
              <h1>OUR PRINCIPLE</h1>
              <p>
                We operate with integrity, enthusiasm, dedication, and a strong
                focus on our customers. Our actions are guided by unwavering
                philosophies.
              </p>
            </div>
          </div>
          <div className="aim-box">
            <img className="arrow" src={arrow} alt="Arrow indicating growth" />
            <div className="aim-text-box">
              <ProjectCount />
            </div>
          </div>
        </div>
      </section>
      <section className="mid-banner-section">
        <div className="banner-text-box banner-box-1">
          <div className="inner-text">
            <h3 className="banner-text">
              Shape Tomorrow with Technology at Thinkbig Software Solutions Pvt
              Ltd
            </h3>
            <button className="discover-button-1">Discover More</button>
          </div>
        </div>
        <div className="banner-text-box  banner-box-2">
          <div className="inner-text">
            <h3 className="banner-text">
              Advance with Technology and Thinkbig Software Solutions Pvt Ltd
            </h3>
            <button className="discover-button-2">Discover More</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
