import Footer from "./Footer";
import Header from "./Header";
import { NumberCounts } from "./NumberCount";
import "../App.css";
import Lenis from "lenis";
import { useEffect } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import images

import discover from "../Assets/Discovery.png";
import expertConsult from "../Assets/Expert Consultation.png";
import ConceptualizationMockup from "../Assets/Conceptualization & Mockup.png";
import implementation from "../Assets/Implementation.png";
import testingValidation from "../Assets/Testing & Validation.png";
import deployment from "../Assets/Deployment (1).png";
import imagesection from "../Assets/Digital.png";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WorkFlowDynamics = () => {
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

    gsap.fromTo(
      ".img-sec-1",
      {
        opacity: 0,
        x: "-100vw",
      },
      {
        opacity: 1,
        x: 0,
        duration: 2.5,
        scrollTrigger: {
          trigger: ".img-sec-1",
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
        <div className="home-container workflow-container"></div>

        <div className="hero-text">
          {/* <img src={leftCurve} className="left-curve" alt="" /> */}
          <h1>
            MASTERING TECHNOLOGY,
            <br />
            SHAPING THE FUTURE.
          </h1>
          <button className="hero-button">DISCOVER MORE!</button>
        </div>
      </section>
      <section className="services">
        <div className="services-cards">
          <div className="card">
            <h3>STEP 1</h3>
            <br />
            <img src={discover} alt="Discovery" />
            <h2>Discovery</h2>
            <p>
              We collaborate with you to understand your goals, gathering
              essential information to tailor solutions that meet your needs.
            </p>
          </div>
          <div className="card">
            <h3>STEP 2</h3>
            <br />
            <img src={expertConsult} alt="Expert Consultation" />
            <h2>Expert Consultation</h2>
            <p>
              Our professionals offer expert insights and strategic advice to
              refine requirements and align the project with your business
              objectives.
            </p>
          </div>
          <div className="card">
            <h3>STEP 3</h3>
            <br />
            <img
              src={ConceptualizationMockup}
              alt="Conceptualization & Mockup"
            />
            <h2>Conceptualization & Mockup</h2>
            <p>
              We create visual prototypes and mockups, allowing you to visualize
              the solution and provide feedback before development begins.
            </p>
          </div>
          <div className="card">
            <h3>STEP 4</h3>
            <br />
            <img src={implementation} alt="Implementation" />
            <h2>Implementation</h2>
            <p>
              Our development team brings your vision to life, building each
              component to the highest standards through iterative development.
            </p>
          </div>
          <div className="card">
            <h3>STEP 5</h3>
            <br />
            <img src={testingValidation} alt="Testing & Validation" />
            <h2>Testing & Validation</h2>
            <p>
              We perform thorough testing to ensure the product meets quality
              standards, identifying and resolving issues before launch.
            </p>
          </div>
          <div className="card">
            <h3>STEP 6</h3>
            <br />
            <img src={deployment} alt="Deployment" />
            <h2>Deployment</h2>
            <p>
              We smoothly deploy the final product, ensuring a seamless
              transition with ongoing support to guarantee a successful launch.
            </p>
          </div>
        </div>
      </section>
      <section className="workflow-text-box">
        <div className="workflow-text">
          <h2 className="text-reveal">
            Innovative, Adaptable, and Cost-Effective Solutions Designed to Meet
            Your Business Requirements
          </h2>
        </div>
      </section>
      <section className="img-sec">
        <div className="img-sec-1">
          <img src={imagesection} alt="" />
        </div>
        <div className="img-sec-2">
          <h2 className="text-reveal">Streamlined Digital Solutions</h2> <br />
          <p className="text-reveal">
            Effortlessly design, develop, and launch all your digital services
            while overcoming business challenges through simple, effective, and
            innovative solutions that scale with your needs.
          </p>
        </div>
      </section>
      <section className="call-to-section">
        <div className="call-to-box">
          <h1>Ready to Launch Your Project? Get in touch with us today!</h1>
          <button className="call-us-button" aria-label="Contact Us">
            Contact Us
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default WorkFlowDynamics;
