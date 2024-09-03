import { useEffect } from "react";
import Header from "./Header";
import Lenis from "lenis";
import gsap from "gsap";
import NumberCounts from "./NumberCount";
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
      "button",
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

    return () => {
      lenis.destroy();
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
          <button> DISCOVER MORE !</button>
        </div>
      </section>
      <section className="about">
        <NumberCounts />
      </section>
      <section className="services">
        <div className="services-text">
          <h1> SERVICES WE OFFER </h1>
          <p>
            Unlock the Power of Innovation with Our Tailored Solutions. <br />
            Delivering Excellence in Every Aspect of Your Business.
          </p>
        </div>
        <div className="services-cards">
          <div className="card">
            <img src="../../src/Assets/website development.png" alt="" />
            <h2>Website Development</h2>
            <p>
              Crafting dynamic, responsive websites that drive business growth
              and digital presence
            </p>
          </div>
          <div className="card">
            <img src="../../src/Assets/Mobile App Development.png" alt="" />
            <h2>Mobile App Development</h2>
            <p>
              Building intuitive, high-performance mobile apps to engage users
              and elevate your brand.
            </p>
          </div>
          <div className="card">
            <img src="../../src/Assets/UI_UX Design.png" alt="" />
            <h2>UI/UX Design</h2>
            <p>
              Designing user-centric interfaces that blend aesthetics with
              seamless functionality for an exceptional digital experience
            </p>
          </div>
          <div className="card">
            <img src="../../src/Assets/SAP Projects.png" alt="" />
            <h2>SAP Projects</h2>
            <p>
              Implementing robust SAP solutions that optimize business processes
              and enhance operational efficiency
            </p>
          </div>
          <div className="card">
            <img src="../../src/Assets/Digital Marketing Services.png" alt="" />
            <h2>Digital Marketing Services</h2>
            <p>
              Driving targeted growth and brand visibility through innovative,
              data-driven digital marketing strategies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
