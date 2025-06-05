import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1749111721/1_zfe0xv.png',
    title: 'Sustainable Energy Solutions',
    subtitle: 'Powering the future with clean biomass technology'
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1749111713/2_wh5q4j.png',
    title: 'Advanced Biomass Systems',
    subtitle: 'Efficient and environmentally friendly energy production'
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1749111714/3_p4zkh7.png',
    title: 'Industrial Solutions',
    subtitle: 'Custom biomass systems for every industry'
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1749111714/4_vjwfto.png',
    title: 'Research & Innovation',
    subtitle: 'Pushing the boundaries of biomass technology'
  },
  {
    id: 5,
    image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1749111715/5_w53mql.png',
    title: 'Global Impact',
    subtitle: 'Making a difference worldwide'
  },
  {
    id: 6,
    image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1749111716/6_uzmto2.png',
    title: 'Expert Team',
    subtitle: 'Dedicated professionals at your service'
  },
  {
    id: 7,
    image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1749111714/7_gjspem.png',
    title: 'Sustainable Future',
    subtitle: 'Building a cleaner world together'
  }
];

const ImageCarousel: React.FC = () => {
  return (
    <div className="relative h-[80vh] min-h-[600px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          bulletClass: 'swiper-pagination-bullet bg-white opacity-50 w-2 h-2 mx-1',
          bulletActiveClass: 'swiper-pagination-bullet-active opacity-100',
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Text Container - Positioned below the slider */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary-800 bg-opacity-90 py-8 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="swiper-slide-content hidden data-[active=true]:block"
                data-slide={index}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white animate-fade-in">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl text-white/90 animate-slide-up">
                  {slide.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev !text-white after:!text-2xl hover:!text-primary-300 transition-colors !left-4"></div>
      <div className="swiper-button-next !text-white after:!text-2xl hover:!text-primary-300 transition-colors !right-4"></div>

      {/* Custom Pagination */}
      <div className="swiper-pagination !bottom-32 !z-20"></div>

      <style>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
          width: 8px !important;
          height: 8px !important;
          margin: 0 4px !important;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
        }
        .swiper-button-prev,
        .swiper-button-next {
          width: 40px !important;
          height: 40px !important;
          background-color: rgba(0, 0, 0, 0.3);
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background-color: rgba(0, 0, 0, 0.5);
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 18px !important;
        }
      `}</style>
    </div>
  );
};

export default ImageCarousel;