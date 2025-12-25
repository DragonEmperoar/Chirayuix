import React, { useState } from "react";
import "./Portfolio.css";
import Menu from "./Menu";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [items, setItems] = useState(Menu.slice(0, 18));
  const [activeFilter, setActiveFilter] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileType, setSelectedFileType] = useState("");

  const filterItems = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) =>
      curElem.category.includes(categoryItem)
    );
    setItems(updatedItems.slice(0, 18));
  };

  const handleCardClick = (item) => {
    if (item.youtube) {
      window.open(item.youtube, "_blank", "noopener,noreferrer");
      return;
    }

    if (item.pdf) {
      setSelectedFile(item.pdf);
      setSelectedFileType("pdf");
    } else if (item.mp4) {
      setSelectedFile(item.mp4);
      setSelectedFileType("mp4");
    }
  };

  return (
    <section className="portfolio container section" id="portfolio">
      <h2 className="section__title">Recent Projects</h2>

      <div className="portfolio__filters">
        <span className={activeFilter === 0 ? "portfolio__item portfolio__item-active" : "portfolio__item"}
          onClick={() => { setItems(Menu.slice(0, 18)); setActiveFilter(0); }}>
          All
        </span>

        <span className={activeFilter === 1 ? "portfolio__item portfolio__item-active" : "portfolio__item"}
          onClick={() => { filterItems("UI/UX"); setActiveFilter(1); }}>
          UI/UX
        </span>

        <span className={activeFilter === 2 ? "portfolio__item portfolio__item-active" : "portfolio__item"}
          onClick={() => { filterItems("Graphic"); setActiveFilter(2); }}>
          Graphic
        </span>

        <span className={activeFilter === 3 ? "portfolio__item portfolio__item-active" : "portfolio__item"}
          onClick={() => { filterItems("Brand Identity & Marketing"); setActiveFilter(3); }}>
          Brand Identity & Marketing
        </span>

        <span className={activeFilter === 4 ? "portfolio__item portfolio__item-active" : "portfolio__item"}
          onClick={() => { filterItems("3D Modelling"); setActiveFilter(4); }}>
          3D Modelling
        </span>

        <span className={activeFilter === 5 ? "portfolio__item portfolio__item-active" : "portfolio__item"}
          onClick={() => { filterItems("Video Editing"); setActiveFilter(5); }}>
          Video Editing
        </span>
      </div>

      <div className="portfolio__container grid">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className={`portfolio__card ${item.youtube ? "portfolio__card--external" : ""}`}
            onClick={() => handleCardClick(item)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="portfolio__thumbnail">
              <img src={item.thumbnail} alt={item.title} className="portfolio__img" />
            </div>

            <span className="portfolio__category">
              {item.category.join(", ")}
            </span>

            <h3 className="portfolio__title">{item.title}</h3>
          </motion.div>
        ))}
      </div>

      {selectedFile && (
        <div className="pdf-popup">
          <div className="pdf-popup-content">
            <span className="close-btn" onClick={() => setSelectedFile(null)}>
              &times;
            </span>

            {selectedFileType === "pdf" && (
              <iframe
                src={`https://docs.google.com/gview?url=${encodeURIComponent(selectedFile)}&embedded=true`}
                className="pdf-viewer"
                title="PDF Viewer"
              />
            )}

            {selectedFileType === "mp4" && (
              <video controls autoPlay>
                <source src={selectedFile} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
