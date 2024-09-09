import Footer from "./Footer";
import Header from "./Header";
import { NumberCounts } from "./NumberCount";
import "../App.css";
import Lenis from "lenis";
import { useEffect } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

import Agency from "./Agency";

const AboutUs = () => {
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
          {/* <img src={leftCurve} className="left-curve" alt="" /> */}
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
      <section className="about-us-text-box">
        <div className="about-text">
          <h2 className="text-reveal">
            Individual dedication fuels collective success. that’s the essence
            of teamwork.
          </h2>
          <p className="text-reveal">
            When personal commitment aligns with group effort, that’s what
            drives a team to succeed. A team's strength lies in individual
            dedication to the collective goal. Personal dedication to the
            group's mission is what truly makes a team thrive.
          </p>
        </div>
      </section>
      <section className="agency-section">
        <Agency />
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
