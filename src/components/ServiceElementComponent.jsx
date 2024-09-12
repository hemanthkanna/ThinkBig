import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../App.css";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useParams } from "react-router-dom";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ServiceElementComponent = () => {
  const { id } = useParams();
  const [pageData, setPageData] = useState(null);
  const [error, setError] = useState(null);

  // Refs for elements to be animated
  const homeContainerRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroButtonRef = useRef(null);
  const textRevealRefs = useRef([]);

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

    return () => {
      lenis.destroy(); // Proper cleanup of Lenis instance
      ScrollTrigger.killAll(); // Kill all ScrollTriggers
    };
  }, []);

  useEffect(() => {
    fetch("/ServiceInfo.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const service = data.find((service) => service.id === id);
        if (!service) {
          throw new Error("Service not found");
        }
        setPageData(service);
      })
      .catch((error) => {
        console.error("Error Fetching Data:", error);
        setError(error);
      });
  }, [id]);

  useLayoutEffect(() => {
    if (!pageData) return; // Ensure animations run only when data is loaded

    // Create GSAP context to manage animations
    const ctx = gsap.context(() => {
      if (homeContainerRef.current) {
        gsap.to(homeContainerRef.current, {
          backgroundPosition: "100% 100%",
          duration: 20,
          repeat: -1,
          ease: "none",
        });
      }

      if (heroTextRef.current) {
        gsap.fromTo(
          heroTextRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 5, ease: "power3.out" }
        );
      }

      if (heroButtonRef.current) {
        gsap.fromTo(
          heroButtonRef.current,
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
      }

      textRevealRefs.current.forEach((element, index) => {
        if (element) {
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
        }
      });
    });

    return () => ctx.revert(); // Cleanup GSAP context on component unmount or id change
  }, [pageData]); // Re-run animations when page data changes

  if (error) return <div>{`Error: ${error}`}</div>;
  if (!pageData) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <section>
        <div className="home-container" ref={homeContainerRef}></div>

        <div className="hero-text" ref={heroTextRef}>
          <h1>{pageData.title}</h1>
          {/* <button className="hero-button" ref={heroButtonRef}>
            DISCOVER MORE!
          </button> */}
          <ul>
            <Link to="/">
              <li>HOME</li>
            </Link>
            <Link to="/services">
              <li>SERVICES</li>
            </Link>
          </ul>
        </div>
      </section>
      <section className="service-section-container">
        <div className="service-info-box">
          <h2>{pageData.title}</h2>
          <br />
          <p>{pageData.description}</p>
          <ul>
            <h3>{pageData.keypoints[0]}</h3>
            <br />
            {pageData.keypoints.map((keypoint, index) => (
              <li key={index}>{keypoint}</li>
            ))}
          </ul>
          <p>{pageData.description2}</p>
        </div>
        <div className="service-links-box">
          <span>ALL SERVICES</span>
          <ul>
            {" "}
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
              <Link to="/services/sapProjects">SAP Projects</Link>
            </li>
            <li>
              <Link to="/services/digitalMarketing">
                Digital Marketing Services
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServiceElementComponent;
