import React from "react";
import "./Hero.scss";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import bannerImg from "../../assets/bannerImg.png"
import bannerImg2 from "../../assets/bannerImg2.png"
import bannerImg3 from "../../assets/bannerImg3.png"
import bannerImg4 from "../../assets/bannerImg4.png"

const Hero = () => {
  return (
    <div className="banner">
      <div className="container">
        <Swiper
          loop={true}
          pagination={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="banner-cont">
              <div className="banner__left">
                <h1>
                  Скидка 15% <br /> на все подвесные светильники <br />
                  <span>до 5 февраля</span>
                </h1>
              </div>
              <div className="banner__right">
                <img src={bannerImg} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-cont">
              <div className="banner__left">
                <h1>
                  Скидка 10% <br /> на все подвесные люстры <br />
                  <span>до 9 февраля</span>
                </h1>
              </div>
              <div className="banner__right">
                <img src={bannerImg2} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-cont">
              <div className="banner__left">
                <h1>
                  Скидка 1% <br /> на все подвесные споты <br />
                  <span>до 4 февраля</span>
                </h1>
              </div>
              <div className="banner__right">
                <img src={bannerImg3} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-cont">
              <div className="banner__left">
                <h1>
                  Скидка 8% <br /> на все напольные торшеры <br />
                  <span>до 8 февраля</span>
                </h1>
              </div>
              <div className="banner__right">
                <img src={bannerImg4} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-cont">
              <div className="banner__left">
                <h1>
                  Скидка 15% <br /> на все подвесные светильники <br />
                  <span>до 5 февраля</span>
                </h1>
              </div>
              <div className="banner__right">
                <img src={bannerImg} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-cont">
              <div className="banner__left">
                <h1>
                  Скидка 10% <br /> на все подвесные люстры <br />
                  <span>до 9 февраля</span>
                </h1>
              </div>
              <div className="banner__right">
                <img src={bannerImg2} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-cont">
              <div className="banner__left">
                <h1>
                  Скидка 1% <br /> на все подвесные споты <br />
                  <span>до 4 февраля</span>
                </h1>
              </div>
              <div className="banner__right">
                <img src={bannerImg3} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-cont">
              <div className="banner__left">
                <h1>
                  Скидка 8% <br /> на все напольные торшеры <br />
                  <span>до 8 февраля</span>
                </h1>
              </div>
              <div className="banner__right">
                <img src={bannerImg4} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-cont">
              <div className="banner__left">
                <h1>
                  Скидка 10% <br /> на все подвесные люстры <br />
                  <span>до 9 февраля</span>
                </h1>
              </div>
              <div className="banner__right">
                <img src={bannerImg2} alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
