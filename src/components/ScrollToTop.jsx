import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollTop = () => {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    if (scrollPosition > documentHeight * 0.4 - windowHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const scrollToTop = () => {
    const start = window.scrollY;
    const duration = 2000; // Duration of the scroll in milliseconds
    const startTime = performance.now();

    const scroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // Progress from 0 to 1

      window.scrollTo(0, start - start * progress);

      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };

  return (
    isVisible && (
      <div className="scroll-to-top-button" onClick={scrollToTop}>
        &#11165; {/* Unicode arrow up icon */}
      </div>
    )
  );
};

export default ScrollToTopButton;
