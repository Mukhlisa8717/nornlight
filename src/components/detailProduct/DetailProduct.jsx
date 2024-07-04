import React from "react";
import "./DetailProduct.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../context/api/productApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import {
  FaHeart,
  FaOdnoklassniki,
  FaRegHeart,
  FaViber,
  FaVk,
} from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { addToCart, incCart, decCart } from "../../context/slices/cartSlice";
import { toggleWishlist } from "../../context/slices/wishlistSlice";

const DetailProduct = () => {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);
  const { id } = useParams();
  const { data: product, isLoading, isError } = useGetProductByIdQuery(id);

  if (isLoading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (isError || !product) {
    return <div>Ошибка при загрузке товара</div>;
  }

  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;
  const totalPrice = product.price * (cartItem ? cartItem.quantity : 1);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleToggleWishlist = () => {
    dispatch(toggleWishlist(product));
  };

  const handleIncrement = () => {
    dispatch(incCart(product));
  };

  const handleDecrement = () => {
    dispatch(decCart(product));
  };

  return (
    <div className="detail">
      <div className="detail__left">
        {product.url && (
          <Swiper
            loop={true}
            effect={"fade"}
            grabCursor={true}
            fadeEffect={{ crossFade: true }}
            modules={[EffectFade, Navigation]}
            className="mySwiper-single"
          >
            {product.url.map((imageUrl, index) => (
              <SwiperSlide key={index}>
                <img src={imageUrl} alt={`Product ${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <div className="detail__right">
        <h1 className="title">{product.title}</h1>
        <p className="detail__category">{product.category}</p>
        <div className="detail__right-media">
          <p>Артикул : 7655-188</p>
          <div className="detail__right-icons">
            <FaOdnoklassniki />
            <FaVk />
            <FaTelegramPlane />
            <IoLogoWhatsapp />
            <FaViber />
          </div>
        </div>
        <p className="detail__stock">В наличии</p>
        <div className="detail__right-prices">
          <p className="detail__price">{totalPrice} ₽</p>
          <p className="detail__oldPrice">{product.oldPrice} ₽</p>
        </div>
        <p className="detail__desc">{product.desc}</p>
        <div className="detail__right-quantity">
          {quantity > 0 ? (
            <div className="detail__right-btns">
              <button onClick={handleDecrement}>-</button>
              <p>{quantity}</p>
              <button onClick={handleIncrement}>+</button>
            </div>
          ) : (
            <button className="detail__addToCart" onClick={handleAddToCart}>
              В корзину
            </button>
          )}
          <button
            className="detail__addToWishlist"
            onClick={handleToggleWishlist}
          >
            {wishList.some((item) => item.id === product.id) ? (
              <FaHeart color="#454545" />
            ) : (
              <FaRegHeart color="#454545" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
