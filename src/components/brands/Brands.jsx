import React, { useRef } from 'react'
import './Brands.scss'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BRANDS_ITEMS } from '../../static';
import { Navigation } from 'swiper/modules';

const Brands = () => {
  const brands = BRANDS_ITEMS;
  
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className='catalog'>
      <div className="container">
        <div className="catalog__top">
          <h1 className='title'>Только проверенные бренды</h1>
          <div className="catalog__top-btns">
            <button className="link-button catalog__button" ref={prevRef}>
              <FaArrowLeftLong />
            </button>
            <button className="link-button catalog__button" ref={nextRef}>
              <FaArrowRightLong />
            </button>
          </div>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          className="mySwiper-brands"
          modules={[Navigation]}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            226: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {brands?.map((el) => (
            <SwiperSlide key={el.id}>
              <img src={el.img} alt={`Brand ${el.id}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Brands;
