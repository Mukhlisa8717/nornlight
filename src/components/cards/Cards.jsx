import React from "react";
import "./Cards.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { EffectCube } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { toggleWishlist } from "../../context/slices/wishlistSlice";
import { addToCart } from "../../context/slices/cartSlice";
import { TbShoppingCartCheck } from "react-icons/tb";

const Cards = ({ data }) => {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);

  return (
    <div className="cards__wrapper">
      {data?.map((el) => (
        <div key={el.id} className="card">
          <div className="card__img">
            <Link to={`/product/${el.id}`}>
              <Swiper
                loop={true}
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCube]}
                className="mySwiper-card"
              >
                {el.url.map((imgUrl, idx) => (
                  <SwiperSlide key={idx}>
                    <img src={imgUrl} alt={`Slide ${idx}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Link>
            <button onClick={() => dispatch(toggleWishlist(el))}>
              {wishList.some((s) => s.id === el.id) ? (
                <FaHeart />
              ) : (
                <FaRegHeart />
              )}
            </button>
          </div>
          <div className="card__content">
            <Link to={`/product/${el.id}`}>
              <h2>{el.title}</h2>
            </Link>
            <div className="card__content-bottom">
              <div className="card__price">
                <Link to={`/product/${el.id}`}>
                  <span>{el.oldPrice}</span>
                  <p>{el.price} ₽</p>
                </Link>
              </div>
              <button onClick={() => dispatch(addToCart(el))}>
                {cart.some((s) => s.id === el.id) ? (
                  <TbShoppingCartCheck />
                ) : (
                  <MdShoppingCart />
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
