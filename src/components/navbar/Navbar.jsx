import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "/logo.svg";
import { HiBars3BottomRight, HiBars3CenterLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { LuBarChart } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { useGetProductsQuery } from "../../context/api/productApi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const { pathname } = useLocation();
  if (pathname.includes("/login") || pathname.includes("/admin")) return <></>;

  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useGetProductsQuery();
  const location = useLocation();

  useEffect(() => {
    if (data) {
      setFilteredData(
        data.filter((product) =>
          product.title
            .toLowerCase()
            .includes(searchValue.trim().toLowerCase()),
        ),
      );
    }
  }, [searchValue, data]);

  useEffect(() => {
    setSearchValue("");
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="container">
        <nav className="navbar__top">
          <div className="navbar__top-menu">
            <NavLink to={"/about"}>О компании</NavLink>
            <NavLink to={"/shopping-paymet"}>Доставка и оплата</NavLink>
            <NavLink to={"/return"}>Возврат</NavLink>
            <NavLink to={"/garant"}>Гарантии</NavLink>
            <NavLink to={"/contacts"}>Контакты</NavLink>
            <NavLink to={"/blog"}>Блог</NavLink>
          </div>
          <div className="navbar__top-contact">
            <p>8 (800) 890-46-56</p>
            <NavLink to={"/call"}>Заказать звонок</NavLink>
          </div>
        </nav>
        <nav className="navbar__main">
          <div className="navbar__main-resp">
            <div className="navbar__main-resp-left">
              <button className="navbar__main-bar" onClick={toggleMenu}>
                {isOpen ? (
                  <IoMdClose size={30} />
                ) : (
                  <HiBars3BottomRight size={30} />
                )}
              </button>
              <NavLink to={"/"} className="navbar__main-logo">
                <img src={logo} alt="Logo" />
                <h3>NORNLIGHT</h3>
              </NavLink>
            </div>
            <div className="navbar__main-resp-right">
              <NavLink to={"/wishlist"}>
                <FaRegHeart size={20} />
              </NavLink>
              <NavLink to={"/cart"}>
                <FiShoppingCart size={21} />
              </NavLink>
            </div>
            {isOpen && (
              <div className="navbar__main-resp-menu">
                <ul>
                  <li>
                    <NavLink to={"/about"}>О компании</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/shopping-paymet"}>Доставка и оплата</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/return"}>Возврат</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/garant"}>Гарантии</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contacts"}>Контакты</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/blog"}>Блог</NavLink>
                  </li>
                </ul>
                <NavLink to={"/catalog"}>
                  <button>
                    <HiBars3BottomRight size={30} />
                    Каталог
                  </button>
                </NavLink>
              </div>
            )}
          </div>
          <NavLink to={"/catalog"}>
            <button className="navbar__main-category">
              <HiBars3CenterLeft size={25} />
              Каталог
            </button>
          </NavLink>
          <div className="navbar__main-search">
            <div className="navbar__main-input">
              <input
                type="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Поиск по товарам"
              />
              <button>
                <IoSearch size={16} />
              </button>
            </div>
            {searchValue.trim() && (
              <ul className="navbar__main-search-list">
                {filteredData.length ? (
                  filteredData.slice(0, 5).map((el) => (
                    <li key={el.id} className="search__result">
                      <Link to={`/product/${el.id}`}>
                        <img src={el.url[0]} alt="" />
                        <p>{el.title}</p>
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="navbar__main-search-empty">
                    <img
                      src="https://otvet.imgsmail.ru/download/251873961_a8c991e1746f2b8a1f71cd03f2f57bbf_800.png"
                      alt="No products found"
                    />
                  </li>
                )}
              </ul>
            )}
          </div>
          <div className="navbar__main-btns">
            <NavLink to={"/wishlist"}>
              <FaRegHeart size={20} />
              Избранное
            </NavLink>
            <NavLink to={"/not-found"}>
              <LuBarChart size={21} />
              Сравнение
            </NavLink>
            <NavLink to={"/cart"}>
              <FiShoppingCart size={21} />
              Корзина
            </NavLink>
          </div>
        </nav>
        {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
      </div>
    </header>
  );
};

export default Navbar;
