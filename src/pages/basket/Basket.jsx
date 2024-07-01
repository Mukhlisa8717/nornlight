import React, { useEffect } from "react";
import "./Basket.scss";
import { useDispatch, useSelector } from "react-redux";
import Empty from "../../components/empty/Empty";
import Checkout from "../../components/checkout/Checkout";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { decCart, incCart, removeFromCart } from "../../context/slices/cartSlice";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Basket = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const handleIncrement = (item) => {
    dispatch(incCart(item));
  };

  const handleDecrement = (item) => {
    dispatch(decCart(item));
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  }

  return (
    <main>
      <section className="cart">
        <div className="container">
          <div className="breadcumb">
            <Link to={"/"}>
              <p>Главная</p>
            </Link>
            <IoIosArrowForward />
            <p>Корзина</p>
          </div>
          {cart.length ? (
            <>
              <div className="length__cont">
                <h2 className="title">
                  Корзина <span>{cart.length}</span>
                </h2>
              </div>
              <div className="cart__cont">
                <div className="cart__cont-top">
                  <p>Фото</p>
                  <p>Товары</p>
                  <p>Описание</p>
                  <p>Артикул</p>
                  <p>Количество</p>
                </div>
                {cart.map((el) => (
                  <div key={el.id} className="cart__cont-info">
                    <img src={el.url[0]} alt="" />
                    <div className="cart__cont-title">
                      <p>{el.title}</p>
                      <p>{el.price}₽</p>
                    </div>
                    <p className="cart__cont-description">{el.desc}</p>
                    <p className="cart__cont-article">
                      RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS
                    </p>
                    <div className="cart__cont-quantity">
                      <button onClick={() => handleDecrement(el)}>-</button>
                      <p>{el.quantity}</p>
                      <button onClick={() => handleIncrement(el)}>+</button>
                    </div>
                    <button
                      className="cart__cont-delete"
                      onClick={() => handleRemove(el)}
                    >
                      <MdOutlineDeleteOutline color="#454545" />
                    </button>
                  </div>
                ))}
              </div>
              {cart.map((el) => (
                <div key={el.id} className="cart__response">
                  <div className="cart__response-left">
                    <img src={el.url[0]} alt="" />
                  </div>
                  <div className="cart__response-right">
                    <p className="cart__cont-title">{el.title}</p>
                    <p className="cart__cont-price">{el.price}₽</p>
                    <p className="cart__cont-description">{el.description}</p>
                    <p className="cart__cont-article">
                      RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS
                    </p>
                    <div className="cart__cont-quantity">
                      <div className="cart__response-btns">
                        <button onClick={() => handleDecrement(el)}>-</button>
                        <p>{el.quantity}</p>
                        <button onClick={() => handleIncrement(el)}>+</button>
                      </div>
                      <button
                        className="cart-res-delete"
                        onClick={() => handleRemove(el)}
                      >
                        <MdOutlineDeleteOutline color="#454545" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <Checkout products={cart} />
            </>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </main>
  );
};

export default Basket;
