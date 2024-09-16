import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const NumberCount = ({ endValue, duration, label, icon }) => {
  const numberRef = useRef(null);
  const [currentValue, setCurrentValue] = useState(0); // Use state to manage number display

  useEffect(() => {
    const element = numberRef.current;

    // Create the GSAP animation with ScrollTrigger
    const animation = gsap.to(
      { value: 0 }, // Start value object
      {
        value: endValue, // End value
        duration: duration,
        ease: "power2.out",
        onUpdate: function () {
          setCurrentValue(Math.ceil(this.targets()[0].value)); // Update state with the animated value
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
      <h1 ref={numberRef}>
        {currentValue}
        {icon}
      </h1>
      <br />
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

const ProjectCount = () => {
  return (
    <NumberCount
      endValue={75}
      duration={5}
      label="PROJECTS DELIVERED SO FAR"
      icon={"+"}
    />
  );
};

export { NumberCounts, ProjectCount };
