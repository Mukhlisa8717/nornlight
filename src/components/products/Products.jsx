import React, { useState, useMemo } from "react";
import "./Products.scss";
import { useGetProductsQuery } from "../../context/api/productApi";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import Cards from "../cards/Cards";
import { useGetCategoryQuery } from "../../context/api/categoryApi";
import SkeletonComponent from "../skeleton/Skeleton";

const Products = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  const { data: categories } = useGetCategoryQuery();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredProducts = useMemo(
    () =>
      selectedCategory
        ? products?.filter(
            (product) => product.category === selectedCategory.name,
          )
        : products,
    [products, selectedCategory],
  );

  if (isLoading) return <SkeletonComponent />;

  const visibleProducts = filteredProducts?.slice(0, visibleCount);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setVisibleCount(8);
  };

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  return (
    <section className="products">
      <div className="container">
        <div className="products__top">
          <h2 className="title">Популярные товары</h2>
          <Link to="/all-products">
            <button className="link-button">
              Все товары <GoArrowRight />
            </button>
          </Link>
        </div>
        <ul className="products__category">
          <li
            className={!selectedCategory ? "active" : ""}
            onClick={() => setSelectedCategory(null)}
          >
            Все
          </li>
          {categories?.map((category) => (
            <li
              key={category.id}
              className={selectedCategory?.id === category.id ? "active" : ""}
              onClick={() => handleCategorySelect(category)}
            >
              {category.name}
            </li>
          ))}
        </ul>
        {visibleProducts?.length > 0 ? (
          <>
            <Cards data={visibleProducts} />
            {visibleProducts?.length < filteredProducts?.length && (
              <div className="products__see-more">
                <button className="link-button" onClick={handleSeeMore}>
                  Показать еще
                </button>
                <button className="response__btn" onClick={handleSeeMore}>
                  Показать еще
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="no-products">Пока нет продуктов с такой категорией</p>
        )}
      </div>
    </section>
  );
};

export default Products;
