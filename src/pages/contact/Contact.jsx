import React, { useEffect } from 'react'
import './Contact.scss'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import Map from '../../components/map/Map';

const Contact = () => {

    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);

  return (
    <main>
      <section className="contact">
        <div className="container">
          <div className="contact__cont">
            <div className="contact__left">
              <div className="breadcumb">
                <Link to={"/"}>
                  <p>Главная</p>
                </Link>
                <IoIosArrowForward />
                <p>Контакты</p>
              </div>
              <h2 className="title">Контакты</h2>
            </div>
            <div className="contact__right">
              <h4>8 (800) 890-46-56</h4>
              <p>
                Пн-Пт: 10:00 до 19:00 <br />
                Сб-Вс: заказ через корзину <br /> Телефоны: 
              </p>
            </div>
          </div>
        </div>
        <Map />
        <div className="container">
          <div className="contact__info">
            <ul>
              <li>
                <h3>Адрес магазина</h3>
                <p>г. Москва, Дмитровское шоссе д.100с2</p>
              </li>
              <li>
                <h3>Почта</h3>
                <p>NORNLIGHT@mail.ru</p>
              </li>
              <li>
                <h3>Телефон</h3>
                <p>8 (800) 890-46-56</p>
              </li>
            </ul>
            <button className='contact__info-button'>Оставить заявку</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact
