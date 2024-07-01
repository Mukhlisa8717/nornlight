import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import "./About.scss";
import Blog from "../../components/blog/Blog";
import Brands from "../../components/brands/Brands";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <section className="about">
        <div className="container">
          <div className="breadcumb">
            <Link to={"/"}>
              <p>Главная</p>
            </Link>
            <IoIosArrowForward />
            <p>О компании</p>
          </div>
          <div className="about__cont">
            <div className="about__left">
              <h2 className="title">О компании</h2>
              <ul className="about__left-list">
                <li>
                  <h2 className="title about__title">170+</h2>
                  <p className="description">Товаров</p>
                </li>
                <li>
                  <h2 className="title about__title">1000+ </h2>
                  <p className="description">Довольных покупателей</p>
                </li>
                <li>
                  <h2 className="title about__title">170+</h2>
                  <p className="description">Товаров</p>
                </li>
              </ul>
            </div>
            <div className="about__right">
              <p className="description">
                Интернет-магазин NORNLIGHT предлагает широкий ассортимент
                светильников для освещения вашего дома или офиса. У нас вы
                найдете разнообразные модели светильников, от современных и
                стильных до классических и элегантных. Мы предлагаем
                качественные и надежные светильники от лучших производителей,
                которые подарят вам комфорт и уют. <br /> <br />
                Покупая светильники в нашем интернет-магазине, вы получаете
                отличное соотношение цены и качества. Мы осуществляем доставку
                по всей России, чтобы каждый клиент мог насладиться прекрасным
                светом и удобством покупки онлайн. Обратитесь к нам сегодня и
                превратите ваш дом в оазис тепла и света с NORNLIGHT! <br />
                <br /> Интернет-магазин NORNLIGHT предлагает широкий ассортимент
                светильников для освещения вашего дома или офиса. У нас вы
                найдете разнообразные модели светильников, от современных и
                стильных до классических и элегантных. Мы предлагаем
                качественные и надежные светильники от лучших производителей,
                которые подарят вам комфорт и уют. <br />
                <br />
                Покупая светильники в нашем интернет-магазине, вы получаете
                отличное соотношение цены и качества. Мы осуществляем доставку
                по всей России, чтобы каждый клиент мог насладиться прекрасным
                светом и удобством покупки онлайн. Обратитесь к нам сегодня и
                превратите ваш дом в оазис тепла и света с NORNLIGHT!
              </p>
            </div>
          </div>
          <Brands />
          <Blog />
        </div>
      </section>
    </main>
  );
};

export default About;
