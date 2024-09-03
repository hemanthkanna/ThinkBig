import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const NumberCount = ({ endValue, duration, label, icon }) => {
  const numberRef = useRef(null);

  useEffect(() => {
    const element = numberRef.current;

    // Create the GSAP animation with ScrollTrigger
    const animation = gsap.fromTo(
      element,
      { innerText: 0 },
      {
        innerText: endValue,
        duration: duration,
        ease: "power2.out",
        snap: { innerText: 1 },
        onUpdate: function () {
          element.innerText = Math.ceil(this.targets()[0].innerText);
        },
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play none none none",
          once: true, // Ensure the animation triggers only once
        },
      }
    );

    // Clean up the animation and ScrollTrigger on component unmount
    return () => {
      animation.kill(); // Kill the GSAP animation
      ScrollTrigger.killAll(); // Kill all ScrollTriggers
    };
  }, [endValue, duration]);

  return (
    <div className="number-count">
      <h1 ref={numberRef}>0{icon}</h1> <br />
      <p>{label}</p>
    </div>
  );
};

const NumberCounts = () => {
  return (
    <div className="number-counts">
      <NumberCount
        endValue={22}
        duration={5}
        label="YEAR OF EXCELLENCE"
        icon={""}
      />
      <NumberCount
        endValue={75}
        duration={5}
        label="PROJECTS COMPLETED"
        icon={"+"}
      />
      <NumberCount
        endValue={12}
        duration={5}
        label="ACTIVE CLIENTS"
        icon={""}
      />
      <NumberCount
        endValue={97}
        duration={5}
        label="HAPPY CLIENTS"
        icon={"%"}
      />
    </div>
  );
};

export default NumberCounts;
