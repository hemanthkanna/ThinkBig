import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper core and required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import ERO from "../Assets/ERO BR.png";
import Crown from "../Assets/CROWN BR.png";
import Vaxfab from "../Assets/VAXFAB BR.png";
import growwell from "../Assets/grow well BR.png";

const TestimonialSlider = () => {
  return (
    <Swiper
      // Swiper configurations
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      // navigation
      // pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        // Responsive breakpoints
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 60,
        },
      }}
    >
      <SwiperSlide>
        <div className="testimonial-card">
          <div className="testimonial-text">
            <p>
              "We've been using ThinkBig for over a year now and it's truly been
              an incredible experience. Our team has worked tirelessly to
              develop our digital presence and we're so grateful for their help
              and support."
            </p>
            <div className="testimonial-author">
              <img src={ERO} alt="John Doe" />
              <h3>John Doe</h3>
              <p>CEO, Company XYZ</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial-card">
          <div className="testimonial-text">
            <p>
              "We've been using ThinkBig for over a year now and it's truly been
              an incredible experience. Our team has worked tirelessly to
              develop our digital presence and we're so grateful for their help
              and support."
            </p>
            <div className="testimonial-author">
              <img src={Crown} alt="John Doe" />
              <h3>John Doe</h3>
              <p>CEO, Company XYZ</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial-card">
          <div className="testimonial-text">
            <p>
              "We've been using ThinkBig for over a year now and it's truly been
              an incredible experience. Our team has worked tirelessly to
              develop our digital presence and we're so grateful for their help
              and support."
            </p>
            <div className="testimonial-author">
              <img src={growwell} alt="John Doe" />
              <h3>John Doe</h3>
              <p>CEO, Company XYZ</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial-card">
          <div className="testimonial-text">
            <p>
              "We've been using ThinkBig for over a year now and it's truly been
              an incredible experience. Our team has worked tirelessly to
              develop our digital presence and we're so grateful for their help
              and support."
            </p>
            <div className="testimonial-author">
              <img src={Vaxfab} alt="John Doe" />
              <h3>John Doe</h3>
              <p>CEO, Company XYZ</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial-card">
          <div className="testimonial-text">
            <p>
              "We've been using ThinkBig for over a year now and it's truly been
              an incredible experience. Our team has worked tirelessly to
              develop our digital presence and we're so grateful for their help
              and support."
            </p>
            <div className="testimonial-author">
              <img src="https://via.placeholder.com/100" alt="John Doe" />
              <h3>John Doe</h3>
              <p>CEO, Company XYZ</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial-card">
          <div className="testimonial-text">
            <p>
              "We've been using ThinkBig for over a year now and it's truly been
              an incredible experience. Our team has worked tirelessly to
              develop our digital presence and we're so grateful for their help
              and support."
            </p>
            <div className="testimonial-author">
              <img src="https://via.placeholder.com/100" alt="John Doe" />
              <h3>John Doe</h3>
              <p>CEO, Company XYZ</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default TestimonialSlider;
