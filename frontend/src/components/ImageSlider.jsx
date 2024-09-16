import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper core and required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const ImageSlider = ({ images }) => {
  return (
    <Swiper
      // Swiper configurations
      spaceBetween={15}
      slidesPerView={1}
      modules={[Pagination, Navigation, Autoplay]}
      pagination={{
        clickable: true,
      }}
      //   navigation={true} // Enable navigation controls
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
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
      {/* Dynamically create slides */}
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            className="slider-image"
            src={image.src}
            alt={image.alt}
            aria-label={image.alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
