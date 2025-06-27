
import carousel1 from '../../assets/carousel1.jpg';
import carousel2 from '../../assets/carousel2.jpg';
import carousel3 from '../../assets/carousel3.jpg';
import carousel4 from '../../assets/carousel4.jpg';
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay } from "swiper/modules";
import "./carousel.css";


const Carousel = () => {
  return (
    <div>
       <section className="chairman-section">
  <div className="container chairman-wrapper">
    
    {/* Left: Swiper Carousel */}
    <div className="player-image">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={carousel1} alt="Carousel 1" className="slider-image" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel2} alt="Carousel 2" className="slider-image" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel3} alt="Carousel 3" className="slider-image" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel4} alt="Carousel 4" className="slider-image" loading="lazy" />
        </SwiperSlide>
      </Swiper>
    </div>
    <div className="quote-section">
      <p className="quote">
        <span className="quote-icon left">"</span>
        The journey of a thousand miles begins with one step. The court of
        badminton welcomes players of all ages, races, and backgrounds. It
        fosters unity through sport, builds strength with every rally, and
        inspires growth beyond the court.
        <span className="quote-icon right">"</span>
      </p>
    </div>
    <div className="chairman-image">
      <div className="image-box"></div>
      <p className="label">Chairman Image</p>
    </div>

  </div>
</section>

    </div>
  )
}

export default Carousel;

