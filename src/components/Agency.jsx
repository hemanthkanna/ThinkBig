import { useState } from "react";

const Agency = () => {
  const [selected, setSelected] = useState("vision");

  const handleLinkClick = (option) => {
    setSelected(option);
  };

  const content = {
    vision:
      "To be the client-focused firm that develops cutting-edge " +
      "applications with engaging design and seamless functionality. " +
      "To transform the application landscape through innovation and simplicity.",
    mission:
      "To create tailored, highly-effective applications that " +
      "meet real-world needs.To deliver straightforward and optimal" +
      " solutions that enable our clients to effortlessly establish " +
      " their digital footprint.",

    timeline:
      "From the beginning, Thinkbig Software Solutions Pvt Ltd " +
      "has been dedicated to tackling challenges, discovering " +
      " unique solutions, and achieving outstanding outcomes. " +
      "We take pride in contributing to our clients' success.",
  };
  return (
    <>
      <div className="auto-container">
        <div className="row">
          <div className="column left-agency-column">
            <div className="agency-content">
              <h2>Leading Design Solutions by the Best in the Industry</h2>
              <nav>
                <ul>
                  <li>
                    <button onClick={() => handleLinkClick("vision")}>
                      VISION
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleLinkClick("mission")}>
                      MISSION
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleLinkClick("timeline")}>
                      TIMELINE
                    </button>
                  </li>
                </ul>
              </nav>
              <p>{content[selected]}</p>
            </div>
          </div>
          <div className="column right-agency-column">
            <p>
              At Thinkbig Software Solutions, we leverage the latest in
              Augmented Reality (AR) and Virtual Reality (VR) technologies to
              enhance our applications and solutions. Our goal is to exceed
              client expectations by involving them throughout the development
              journey, allowing them to witness their projects evolve and come
              to life.
            </p>
            <p>
              We are dedicated to creating visually stunning applications that
              streamline and simplify everyday tasks. Our team, driven by
              passion, stays ahead of technology trends to provide clients with
              state-of-the-art solutions. From design and development to
              deployment and ongoing maintenance, we ensure comprehensive
              support for the entire lifecycle of your applications.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agency;
