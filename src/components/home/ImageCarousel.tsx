import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
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
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next'
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
              <div className="absolute inset-0 bg-black bg-opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="container-custom text-white text-center">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in text-shadow">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl mb-8 animate-slide-up text-shadow">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      to="/about" 
                      className="btn bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl"
                    >
                      About Us
                    </Link>
                    <Link 
                      to="/research" 
                      className="btn border-2 border-white text-white hover:bg-white/10"
                    >
                      Research & Development
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="swiper-button-prev !w-14 !h-14 !bg-black/30 hover:!bg-black/50 !backdrop-blur-sm !rounded-full !text-white !transition-all !left-6">
        <span className="after:!text-2xl"></span>
      </div>
      <div className="swiper-button-next !w-14 !h-14 !bg-black/30 hover:!bg-black/50 !backdrop-blur-sm !rounded-full !text-white !transition-all !right-6">
        <span className="after:!text-2xl"></span>
      </div>

      <style>{`
        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 24px !important;
          font-weight: bold;
        }
        .swiper-button-prev,
        .swiper-button-next {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .swiper:hover .swiper-button-prev,
        .swiper:hover .swiper-button-next {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default ImageCarousel;