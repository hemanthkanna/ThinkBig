import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
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
import leftCurve from "../Assets/left-curve-line.png";
import TestimonialSlider from "./TestimonialSlider";
import ImageSlider from "./ImageSlider";

import showcaseImage1 from "../Assets/showcase-1.jpeg";
import showcaseImage3 from "../Assets/showcase-3.jpeg";
import showcaseImage4 from "../Assets/showcase-4.jpeg";
import showcaseImage5 from "../Assets/showcase-5.jpeg";
import showcaseImage6 from "../Assets/showcase-6.jpeg"; // Add more images as needed

const Home = () => {
  const [sliderImages, setSliderImages] = useState("All");

  // Define different image sets
  const imageSets = {
    All: [
      { src: showcaseImage1, alt: "Image 1" },
      { src: showcaseImage3, alt: "Image 2" },
      { src: showcaseImage4, alt: "Image 3" },
      { src: showcaseImage5, alt: "Image 4" },
    ],
    website: [
      { src: showcaseImage1, alt: "Website Image 1" },
      { src: showcaseImage4, alt: "Website Image 2" },
      { src: showcaseImage5, alt: "Digital Marketing Image 1" },
    ],
    mobileApp: [
      { src: showcaseImage3, alt: "Mobile App Image 1" },
      { src: showcaseImage5, alt: "Mobile App Image 2" },
      { src: showcaseImage6, alt: "Mobile App Image 3" },
    ],
    uiux: [
      { src: showcaseImage4, alt: "UI/UX Image 1" },
      { src: showcaseImage5, alt: "Digital Marketing Image 1" },
      { src: showcaseImage6, alt: "Digital Marketing Image 2" },
    ],
    digitalMarketing: [
      { src: showcaseImage5, alt: "Digital Marketing Image 1" },
      { src: showcaseImage6, alt: "Digital Marketing Image 2" },
      { src: showcaseImage6, alt: "Digital Marketing Image 2" },
    ],
  };

  // Get images and determine the number of slides per view
  const selectedImages = imageSets[sliderImages] || [];

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

    // Left Curve Animation
    gsap.fromTo(
      ".left-curve",
      { y: "-100%", x: "-100%", opacity: 0 }, // Starts off-screen above and to the left
      {
        y: -300,
        x: -340,
        opacity: 1,
        duration: 2,
        repeat: -1,
        repeatDelay: 5,
        yoyo: true,
        ease: "bounce.out", // Bounce effect for entry
      }
    );

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
          <img src={leftCurve} className="left-curve" alt="" />
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
          <ul className="text-reveal project-links">
            <li>
              <a
                className="project-link"
                onClick={() => setSliderImages("All")}
              >
                ALL
              </a>
            </li>
            <li>
              <a
                className="project-link"
                onClick={() => setSliderImages("website")}
              >
                WEBSITES
              </a>
            </li>
            <li>
              <a
                className="project-link"
                onClick={() => setSliderImages("mobileApp")}
              >
                MOBILE APPS
              </a>
            </li>
            <li>
              <a
                className="project-link"
                onClick={() => setSliderImages("uiux")}
              >
                UI UX DESIGN
              </a>
            </li>
            <li>
              <a
                className="project-link"
                onClick={() => setSliderImages("digitalMarketing")}
              >
                DIGITAL MARKETING
              </a>
            </li>
          </ul>
        </div>
        <div className="our-projects-gallery">
          {/* Pass selected images and slidesPerView to the ImageSlider */}
          <ImageSlider images={selectedImages} />
        </div>
      </section>
      <section className="testimonial-card-box">
        <div className="services-text">
          <h1 className="text-reveal">TESTIMONIALS</h1>
          <p className="text-reveal">
            HERE ARE SOME OF OUR CLIENTS AND THEIR FEEDBACKS
          </p>
        </div>
        <TestimonialSlider />{" "}
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
      <Footer />
    </>
  );
};

export default Home;
