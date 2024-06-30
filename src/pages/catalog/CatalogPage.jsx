import React, { useEffect } from "react";
import Catalog from "../../components/catalog/Catalog";
import Brands from "../../components/brands/Brands";
import Blog from "../../components/blog/Blog";
import Production from "../../components/production/Production";

const CatalogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <Catalog />
      <Brands />
      <Blog />
      <Production />
    </main>
  );
};

export default CatalogPage;
