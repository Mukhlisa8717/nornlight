import React, { useEffect } from 'react'
import Products from '../../components/products/Products'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

const AllProducts = () => {

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
          <p>Все товары</p>
        </div>
      </div>
      <Products />
    </main>
  );
}

export default AllProducts
