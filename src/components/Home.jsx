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
    </>
  );
};

export default Home;
