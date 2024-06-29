import React from "react";
import './WhyUs.scss'
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { WHY_US_CARDS } from "../../static";

const WhyUs = () => {
  return (
    <section className="whyUs">
      <div className="container">
        <div className="whyUs__top">
          <h2 className="title">Почему NORNLIGHT?</h2>
          <Link to="/about">
            <button className="link-button">
              О компании <GoArrowRight />
            </button>
          </Link>
        </div>
        <ul className="whyUs__list">
          {WHY_US_CARDS?.map((card) => (
            <div key={card.id} className="whyUs__item">
              <div className="whyUs__item-logo">
                <img src={card.img} alt={card.title} />
              </div>
              <div className="whyUs__item-content">
                <h2>{card.title}</h2>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </ul>
        <Link to="/about">
          <button className="response__btn">
            О компании <GoArrowRight />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default WhyUs;
