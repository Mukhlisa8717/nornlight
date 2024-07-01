import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { PiDotOutlineFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Garant = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <div className="container">
        <div className="breadcumb">
          <Link to={"/"}>
            <p>Главная</p>
          </Link>
          <IoIosArrowForward />
          <p>Гарантии</p>
        </div>
        <div className="shopping-paymet__cont">
          <div className="shopping-paymet__left">
            <h2 className="title">Гарантии</h2>
          </div>
          <ul className="shopping-paymet__right">
            <li>
              <h4>Обмен и возврат по желанию покупателя</h4>
              <p>
                Все товары в магазине «NornLight» имеют гарантию. Она заявляется
                производителем и имеет определенный срок действия на различные
                группы товаров. Если ваше изделие вышло из строя в
                течение гарантийного срока вы можете обратиться к нам и получить
                бесплатный ремонт. <br />
                Для этого нужно: <br />
                <PiDotOutlineFill />
                Предоставить чек, накладную или сообщить почту или номер
                телефона, указанные при оформлении заказа. <br />
                <PiDotOutlineFill />
                Привезти товар к нам на склад или отправить его транспортной
                компанией. <br />
                <PiDotOutlineFill />
                После товар отправляется на экспертизу и ремонт. Если ремонт
                невозможен, мы обменяем изделие на аналогичное либо вернем
                деньги за покупку. <br />
                Обращаем внимание, что «А-Свет» не является сервисным центром, а
                выполняет роль посредника между клиентом и поставщиком. Поэтому
                сроки проведения ремонта могут отличаться для товаров различных
                брендов.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Garant;
