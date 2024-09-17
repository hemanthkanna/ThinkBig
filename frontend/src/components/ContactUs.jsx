import Footer from "./Footer";
import Header from "./Header";
import "../App.css";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

let apiUrl = import.meta.env.VITE_REACT_APP_API_ENDPOINT;

const ContactUs = () => {
  // State for form inputs and validation errors
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [response, setResponse] = useState();

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
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  // Form validation logic
  const validate = () => {
    let formErrors = {};

    // Updated name pattern
    const namePattern = /^[a-zA-Z\s'-]{2,40}$/;
    if (!formData.fullName.trim() || !namePattern.test(formData.fullName)) {
      formErrors.fullName =
        "Full name is required and must only contain letters, spaces, apostrophes, or hyphens.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      formErrors.email = "Invalid email format.";
    }

    const phonePattern =
      /^\+?(\d{1,3})?[-.\s]?(\(?\d{3}\)?)[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
    if (
      formData.phone &&
      (formData.phone.length !== 10 || !phonePattern.test(formData.phone))
    ) {
      formErrors.phone = "Phone number must be 10 digits.";
    }

    if (!formData.reason) {
      formErrors.reason = "Please select a reason.";
    }

    if (!formData.message.trim()) {
      formErrors.message = "Message cannot be empty.";
    }

    return formErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Perform the submit action (e.g., API call)

      try {
        console.log("APIURL: " + `${apiUrl}/email`);
        const response = await axios.post(`${apiUrl}/email`, formData, {
          withCredentials: true,
        });
        console.log("Post created:", response);
        setResponse(response.data.message);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          reason: "",
          message: "",
        });
      } catch (error) {
        console.error("Error creating post:", error);
        setErrors({ message: "Error creating post. Please try again later." });
      }

      console.log("Form submitted:", formData);
    }
  };

  // Update form data on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Header />
      <section>
        <div className="home-container about-container"></div>

        <div className="hero-text">
          <h1>
            MASTERING TECHNOLOGY,
            <br />
            SHAPING THE FUTURE.
          </h1>
          <button className="hero-button">DISCOVER MORE!</button>
        </div>
      </section>

      <section className="contact-section">
        <div className="map-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.3421851226326!2d80.201136!3d13.013868!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d6ecb6b38b%3A0xa2c51b24c0f6bab5!2sThe%20Executive%20Centre%20-%20Olympia%20Teknos!5e0!3m2!1sen!2sin!4v1726211349806!5m2!1sen!2sin"
            width="600"
            height="450"
            title="The Executive Centre - Olympia Teknos"
            frameBorder="0"
            scrolling="no"
            aria-hidden="false"
            tabIndex="0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="form-container">
          <div className="title">Registration Form</div>
          <hr />
          <div className="content">
            <form onSubmit={handleSubmit} method="post">
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                  {errors.fullName && (
                    <span className="error">{errors.fullName}</span>
                  )}
                </div>

                <div className="input-box">
                  <span className="details">Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>

                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <span className="error">{errors.phone}</span>
                  )}
                </div>

                <div className="input-box">
                  <span className="details">Company Name</span>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select a reason
                    </option>
                    <option value="website">Website</option>
                    <option value="mobile">Mobile App</option>
                    <option value="design">UI/UX Design</option>
                    <option value="project">SAP Project</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="feedback">Feedback</option>
                    <option value="general">General Inquiry</option>
                  </select>
                  {errors.reason && (
                    <span className="error">{errors.reason}</span>
                  )}
                </div>

                <div className="input-box">
                  <span className="details">Your Message</span>
                  <textarea
                    className="message"
                    placeholder="Your Message"
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  {errors.message && (
                    <span className="error">{errors.message}</span>
                  )}
                  {response && <span className="response">{response}</span>}
                </div>
              </div>

              <div className="button-container">
                <div className="button">
                  <input type="submit" value="Submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
