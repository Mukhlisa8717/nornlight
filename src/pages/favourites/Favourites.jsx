import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Cards from "../../components/cards/Cards";
import Empty from "../../components/empty/Empty";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Favourites = () => {
  const wishList = useSelector((state) => state.wishlist.value);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <section>
        <div className="container">
          <div className="breadcumb">
            <Link to={"/"}>
              <p>Главная</p>
            </Link>
            <IoIosArrowForward />
            <p>Избранные товары</p>
          </div>
          {wishList.length ? (
            <div>
              <div className="length__cont">
                <h2 className="title">
                  Избранные товары <span>{wishList.length}</span>
                </h2>
              </div>
              <Cards data={wishList} />
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </main>
  );
};

export default Favourites;
