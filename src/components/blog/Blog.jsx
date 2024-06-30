import React from "react";
import "./Blog.scss";
import { Link, useLocation } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import blogImg from "../../assets/blogImg.png";
import blogImg2 from "../../assets/blogImg2.png";
import blogImg3 from "../../assets/blogImg3.png";

const Blog = () => {
  const location = useLocation();
  const isBlogPage = location.pathname === "/blog";
  return (
    <section className="blog">
      <div className="container">
        <div className="blog__top">
          <h2 className="title">Блог</h2>
          {!isBlogPage && (
            <Link to={"/blog"}>
              <button className="link-button">
                Перейти в блог <FaArrowRightLong />
              </button>
            </Link>
          )}
        </div>

        <div className="blog__wrapper">
          <div className="blog__card">
            <div className="blog__card-img">
              <img src={blogImg} alt="" />
            </div>
            <div className="blog__card-content">
              <div className="blog__card-title">
                <h2>Как правильно освещать дом снаружи?</h2>
                <GoArrowUpRight size={25} />
              </div>
              <p>01.01.2024</p>
            </div>
          </div>
          <div className="blog__card">
            <div className="blog__card-img">
              <img src={blogImg2} alt="" />
            </div>
            <div className="blog__card-content">
              <div className="blog__card-title">
                <h2>Как правильно освещать дом снаружи?</h2>
                <GoArrowUpRight size={25} />
              </div>
              <p>01.01.2024</p>
            </div>
          </div>
          <div className="blog__card">
            <div className="blog__card-img">
              <img src={blogImg3} alt="" />
            </div>
            <div className="blog__card-content">
              <div className="blog__card-title">
                <h2>Как правильно освещать дом снаружи?</h2>
                <GoArrowUpRight size={25} />
              </div>
              <p>01.01.2024</p>
            </div>
          </div>
        </div>
        <Swiper
          loop={true}
          pagination={true}
          modules={[Pagination]}
          className="mySwiper-blog"
        >
          <SwiperSlide>
            <div className="blog__card">
              <div className="blog__card-img">
                <img src={blogImg} alt="" />
              </div>
              <div className="blog__card-content">
                <div className="blog__card-title">
                  <h2>Как правильно освещать дом снаружи?</h2>
                  <GoArrowUpRight size={25} />
                </div>
                <p>01.01.2024</p>
              </div>
            </div>
            <Link to={"/blog"}>
              <button className="response__btn">
                Весь каталог <FaArrowRightLong />
              </button>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__card">
              <div className="blog__card-img">
                <img src={blogImg2} alt="" />
              </div>
              <div className="blog__card-content">
                <div className="blog__card-title">
                  <h2>Как правильно освещать дом снаружи?</h2>
                  <GoArrowUpRight size={25} />
                </div>
                <p>01.01.2024</p>
              </div>
            </div>
            <Link to={"/blog"}>
              <button className="response__btn">
                Весь каталог <FaArrowRightLong />
              </button>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__card">
              <div className="blog__card-img">
                <img src={blogImg3} alt="" />
              </div>
              <div className="blog__card-content">
                <div className="blog__card-title">
                  <h2>Как правильно освещать дом снаружи?</h2>
                  <GoArrowUpRight size={25} />
                </div>
                <p>01.01.2024</p>
              </div>
            </div>
            <Link to={"/blog"}>
              <button className="response__btn">
                Весь каталог <FaArrowRightLong />
              </button>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__card">
              <div className="blog__card-img">
                <img src={blogImg} alt="" />
              </div>
              <div className="blog__card-content">
                <div className="blog__card-title">
                  <h2>Как правильно освещать дом снаружи?</h2>
                  <GoArrowUpRight size={25} />
                </div>
                <p>01.01.2024</p>
              </div>
            </div>
            <Link to={"/blog"}>
              <button className="response__btn">
                Весь каталог <FaArrowRightLong />
              </button>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__card">
              <div className="blog__card-img">
                <img src={blogImg2} alt="" />
              </div>
              <div className="blog__card-content">
                <div className="blog__card-title">
                  <h2>Как правильно освещать дом снаружи?</h2>
                  <GoArrowUpRight size={25} />
                </div>
                <p>01.01.2024</p>
              </div>
            </div>
            <Link to={"/blog"}>
              <button className="response__btn">
                Весь каталог <FaArrowRightLong />
              </button>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__card">
              <div className="blog__card-img">
                <img src={blogImg3} alt="" />
              </div>
              <div className="blog__card-content">
                <div className="blog__card-title">
                  <h2>Как правильно освещать дом снаружи?</h2>
                  <GoArrowUpRight size={25} />
                </div>
                <p>01.01.2024</p>
              </div>
            </div>
            <Link to={"/blog"}>
              <button className="response__btn">
                Весь каталог <FaArrowRightLong />
              </button>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Blog;
