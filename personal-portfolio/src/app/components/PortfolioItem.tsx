import React, { useEffect } from "react";
import "./portfolioItem.css";
import Glightbox from "glightbox";

export default function PortfolioItem({
  item,
}: {
  item: {
    id: number;
    img: string;
    title: string;
    brief: string;
    category: string;
  };
}) {
  useEffect(() => {
    new Glightbox({
      selector: ".portfolio-lightbox",
    });
    new Glightbox({
      selector: ".portfolio-details-lightbox",
      width: "90%",
      height: "90vh",
    });
  }, []);

  return (
    <div className="col-lg-4 col-md-6 portfolio-item">
      <div className="portfolio-wrap">
        <img src={item.img} className="image-fluid" alt={item.title} />
        <div className="portfolio-info">
          <h4>{item.title}</h4>
          <p>{item.brief}</p>
          <div className="portfolio-link">
            <a
              href={item.img}
              className="portfolio-lightbox"
              data-gallery="portfolioGallery"
              title={item.title}
            >
              <i className="bx bx-plus"></i>
            </a>
            <a
              href={`/portfolio/${item.id}`}
              className="portfolio-details-lightbox"
              data-glightbox="type: external"
              title={item.title}
            >
              <i className="bx bx-link"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
