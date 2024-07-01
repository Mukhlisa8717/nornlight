import React, { useEffect } from "react";
import './NotFound.scss'
import notFoundImg from '../../assets/notFound.png'
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <section className="not-found">
        <div className="container">
          <div className="not-found__cont">
            <img src={notFoundImg} alt="404" />
            <p className="description">Похоже, ничего не нашлось :( </p>
            <Link to={"/"}>
              <button>На главную</button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
