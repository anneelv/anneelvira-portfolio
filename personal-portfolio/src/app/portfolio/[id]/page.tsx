"use client";

import React, { useState, useEffect } from "react";
// Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper sttyles
import "swiper/css";
import "swiper/css/pagination";

// required modules
import { Autoplay, Pagination } from "swiper/modules";
import "./style.css";

export default function PortfolioDetails({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const [item, setItem] = useState<any>({});

  const getPortfolioDetailsData = (id: string) => {
    fetch(`http://localhost:3000/api/portfolio/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    getPortfolioDetailsData(id);
  }, []);

  return (
    <main id="main">
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              <Swiper
                spaceBetween={0}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  el: ".swiper-pagination",
                  type: "bullets",
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                loop={true}
                className="portfolio-details-slider swiper"
              >
                {item &&
                  item.gallery &&
                  item.gallery.length > 0 &&
                  item.gallery.map((img: string, index: number) => (
                    <SwiperSlide key={index}>
                      <img src={img} alt="" />
                    </SwiperSlide>
                  ))}
                <div className="swiper-pagination"></div>
              </Swiper>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong>:{" "}
                    {item.category && item.category.toUpperCase()}
                  </li>
                  <li>
                    <strong>Project date</strong>: May 2024
                  </li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a href="#">GitHub Repository</a>
                  </li>
                </ul>
              </div>
              <div className="portfolio-description">
                <h2>Example - {item.id}</h2>
                <p>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
