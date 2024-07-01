import React, { useEffect } from "react";
import "./ShoppingPaymet.scss";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Map from "../../components/map/Map";

const ShoppingPaymet = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <section className="shopping-paymet">
        <div className="container">
          <div className="breadcumb">
            <Link to={"/"}>
              <p>Главная</p>
            </Link>
            <IoIosArrowForward />
            <p>Доставка и оплата</p>
          </div>
          <div className="shopping-paymet__cont">
            <div className="shopping-paymet__left">
              <h2 className="title">Доставка и оплата</h2>
            </div>
            <ul className="shopping-paymet__right">
              <li>
                <h4>Доставка</h4>
                <p>
                  Мы осуществляем доставку со склада по Москве и Московской
                  области собственной курьерской службой. Транспортными
                  компаниями нашу продукцию мы доставляем по всей территории РФ,
                  а так же по всем странам СНГ.
                  <span>Сроки доставки: 4—6 недель</span>
                </p>
              </li>
              <li>
                <h4>Курьерская доставка</h4>
                <p>
                  БЕСПЛАТНО доставим в приделах МКАД любой заказ
                  <span>от 5 000 ₽</span>. <br />
                  Заказы свыше <span>30 000 ₽</span> имеют бесплатную доставку,
                  включительно 15 км от МКАД
                </p>
              </li>
              <li>
                <h4>Самовывоз</h4>
                <p>
                  Любой заказ можно забрать самостоятельно по адресу: <br />
                  г. Москва, Дмитровское шоссе д.100с2
                </p>
              </li>
            </ul>
          </div>
        </div>
        <Map />
      </section>
    </main>
  );
};

export default ShoppingPaymet;
