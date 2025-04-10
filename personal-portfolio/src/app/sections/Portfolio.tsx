"use client";

import React, { useState, useEffect } from "react";
import "./portfolio.css";
import SectionTitle from "../components/SectionTitle";
import { filters } from "../data/data";
import PortfolioItem from "../components/PortfolioItem";

export default function Portfolio() {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);

  const getPortfolioData = () => {
    fetch("http://localhost:3000/api/portfolio")
      .then((res) => res.json())
      .then((portfolio) => setData(portfolio))
      .catch((e) => console.log(e.message)); //In case of error, show it in console
  };

  useEffect(() => {
    getPortfolioData(); //get called only once when it first mounted
  }, []);

  useEffect(() => {
    setItems(data);
  }, [data]);

  const handleFilterActive = (id: number) => {
    filters.map((filter) => {
      filter.active = false;
      if (filter.id === id) filter.active = true;
    });
  };

  const handleFilterChange = (id: number, category: string) => {
    handleFilterActive(id);
    if (category === "all") {
      setItems(data);
    } else {
      setItems(
        data.filter((item: { category: string }) => item.category === category)
      );
    }
  };

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <SectionTitle
          title="Portfolio"
          brief="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        />

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            {/* Create portfolio filter */}
            <ul id="portfolio-filters">
              {filters.map((filter) => (
                <li
                  key={filter.id}
                  className={`${filter.active ? "filter-active" : undefined}`}
                  onClick={() => handleFilterChange(filter.id, filter.category)}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">
          {items.map(
            (item: {
              id: number;
              img: string;
              title: string;
              brief: string;
              category: string;
            }) => (
              <PortfolioItem key={item.id} item={item} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
