import React, { useEffect } from "react";
import "./Home.scss";
import Hero from "../../components/hero/Hero";
import Catalog from "../../components/catalog/Catalog";
import WhyUs from "../../components/whyUs/WhyUs";
import Products from "../../components/products/Products";
import Brands from "../../components/brands/Brands";
import Blog from "../../components/blog/Blog";
import Production from "../../components/production/Production";

const Home = () => {

  return (
    <main>
      <section className="hero">
        <div className="hero__container">
          <Hero />
        </div>
      </section>
      <Catalog />
      <WhyUs />
      <Products />
      <Brands />
      <Blog />
      <Production />
    </main>
  );
};

export default Home;
