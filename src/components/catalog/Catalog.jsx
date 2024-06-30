import React from "react";
import "./Catalog.scss";
import { Link, useLocation } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { CATALOG_CARDS } from "../../static";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRightLong } from "react-icons/fa6";

const Catalog = () => {
  const data = CATALOG_CARDS;
  const location = useLocation();
  const isCatalogPage = location.pathname === "/catalog";

  const categoriesToDisplay = isCatalogPage ? data : data?.slice(0, 6);

  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const groupedCategories = chunkArray(categoriesToDisplay, 2);

  return (
    <section className="catalog">
      <div className="container">
        <div className="catalog__top">
          <h2 className="title">Каталог</h2>
          {!isCatalogPage && (
            <Link to="/catalog">
              <button className="link-button">
                Весь каталог <GoArrowRight />
              </button>
            </Link>
          )}
        </div>
        <div
          className={
            isCatalogPage ? "catalog__list catalog__page-list" : "catalog__list"
          }
        >
          {categoriesToDisplay?.map((el) => (
            <div key={el.id} className="catalog__list-item">
              <div className="catalog__item-content">
                <h4>{el.title}</h4>
                <Link>
                  От {el.price} <GoArrowRight />
                </Link>
              </div>
              <div className="catalog__item-img">
                <img src={el.img} alt={el.title} />
              </div>
            </div>
          ))}
        </div>
        {!isCatalogPage && (
          <Swiper
            loop={true}
            pagination={true}
            modules={[Pagination]}
            className="mySwiper-catalog"
          >
            {groupedCategories.map((group, index) => (
              <SwiperSlide key={index}>
                <div className="catalog__wrapper-swiper">
                  {group.map((slide) => (
                    <div className="catalog__card" key={slide.id}>
                      <div className="catalog__card-cont">
                        <h2>{slide.title}</h2>
                        <img src={slide.img} alt="" />
                        <button>
                          От {slide.price} <FaArrowRightLong size={12} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/catalog">
                  <button className="response__btn">
                    Весь каталог <GoArrowRight />
                  </button>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Catalog;
