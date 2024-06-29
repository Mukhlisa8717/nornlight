import React from 'react'
import { Link } from 'react-router-dom';
import logo from '/logo.svg'
import paymetImg from '../../assets/paymetImg.svg'
import { FaFacebookF, FaInstagram, FaVk } from 'react-icons/fa6';
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__menu">
            <Link to={"/"} className="footer__main-logo">
              <img src={logo} alt="" />
              <h3>NORNLIGHT</h3>
            </Link>
            <p className="footer__menu-num">8 (800) 890-46-56</p>
            <img src={paymetImg} alt="" />
            <Link className="footer__menu-link">
              Политика конфидециальности
            </Link>
            <Link className="footer__menu-link">
              Пользовательское соглашение
            </Link>
            <div className="footer__media">
              <FaVk />
              <FaInstagram />
              <FaFacebookF />
            </div>
          </div>
          <div className="footer__list">
            <p>Покупателям</p>
            <ul>
              <li>
                <Link to={"/about"}>О компании</Link>
              </li>
              <li>
                <Link to={"/shopping-paymet"}>Доставка и оплата</Link>
              </li>
              <li>
                <Link to={"/about"}>Возврат</Link>
              </li>
              <li>
                <Link to={"/garant"}>Гарантии</Link>
              </li>
              <li>
                <Link to={"/contact"}>Контакты</Link>
              </li>
              <li>
                <Link to={"/blog"}>Блог</Link>
              </li>
            </ul>
          </div>
          <div className="footer__list">
            <p>Товары</p>
            <ul>
              <li>Люстры</li>
              <li>Светильники</li>
              <li>Бра</li>
              <li>Торшеры</li>
              <li>Комплектуюшие</li>
              <li>Настольные лампы</li>
            </ul>
          </div>
          <div className="footer__list">
            <ul>
              <li>Споты</li>
              <li>Трековые светильники</li>
              <li>Уличные светильники</li>
              <li>Технические светильники</li>
              <li>Светодиодные ленты</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer
