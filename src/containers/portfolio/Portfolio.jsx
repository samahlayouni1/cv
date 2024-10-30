import React, { useState } from "react";
import PageHeaderContent from "../../components/headerContent/PageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import shopper from "../../assests/shopper.png";
import baghdedi from "../../assests/baghded.png";
import dubai from "../../assests/dubai.png";
import logo from "../../assests/logo.png";
import './styles.css';

function Portfolio() {
  const portfolioData = [
    {
      id: 2,
      name: "E-commerce Shopper",
      image: shopper,
      link: ''
    },
    {
      id: 2,
      name: "E-commerce بغدادي شاب",
      image: baghdedi,
      link: ''
    },
    {
      id: 2,
      name: "agence de voyage dubai Desert Safari",
      image: dubai,
      link: ''
    },
    {
      id: 3,
      name: "Logo Société de développement et design",
      image: logo,
      link: ''
    },
  ];

  const filtreData = [
    {
      filtreId: 1,
      label: "All",
    },
    {
      filtreId: 2,
      label: "Development",
    },
    {
      filtreId: 3,
      label: "Design",
    },
  ];

  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handlerFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filtreData.map((item) => (
            <li
              className={item.filtreId === filteredValue ? 'active' : ''}
              onClick={() => handlerFilter(item.filtreId)}
              key={item.filtreId}
            >
              {item.label}
            </li>
          ))}
        </ul>

        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItems${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt={item.name} src={item.image} />
                </a>
              </div>
              <div className="overlay">
                <div>
                  <p>{item.name}</p>
                  <button>visit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
