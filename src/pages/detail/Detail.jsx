import React, { useEffect } from "react";
import "./Detail.scss";
import Characteristic from "../../components/characteristic/Characteristic";
import DetailProduct from "../../components/detailProduct/DetailProduct";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Detail = () => {
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
            <p>Tовар</p>
          </div>
          <DetailProduct />
          <Characteristic />
        </div>
      </section>
    </main>
  );
};

export default Detail;
