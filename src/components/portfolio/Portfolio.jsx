import React, { useState } from "react";
import "./Portfolio.css";
import Menu from "./Menu";
import { motion } from "framer-motion";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Portfolio = () => {
    const [items, setItems] = useState(Menu.slice(0, 14)); // ✅ Display only first 14 projects
    const [activeFilter, setActiveFilter] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFileType, setSelectedFileType] = useState("");

    const filterItems = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => curElem.category.includes(categoryItem));
        setItems(updatedItems.slice(0, 14)); // ✅ Ensure only first 14 projects show
    };

    const openFile = (file, type) => {
        setSelectedFile(file);
        setSelectedFileType(type);
    };

    return (
        <section className="portfolio container section" id="portfolio">
            <h2 className="section__title">Recent Projects</h2>

            <div className="portfolio__filters">
                <span className={activeFilter === 0 ? "portfolio__item portfolio__item-active" : "portfolio__item"}
                      onClick={() => { setItems(Menu.slice(0, 14)); setActiveFilter(0); }}>All</span>
                <span className={activeFilter === 1 ? "portfolio__item portfolio__item-active" : "portfolio__item"}
                      onClick={() => { filterItems("UI/UX"); setActiveFilter(1); }}>UI/UX</span>
                <span className={activeFilter === 2 ? "portfolio__item portfolio__item-active" : "portfolio__item"}
                      onClick={() => { filterItems("Graphic"); setActiveFilter(2); }}>Graphic</span>
                <span className={activeFilter === 3 ? "portfolio__item portfolio__item-active" : "portfolio__item"}
                      onClick={() => { filterItems("Brand Identity & Marketing"); setActiveFilter(3); }}>Brand Identity & Marketing</span>
                <span className={activeFilter === 4 ? "portfolio__item portfolio__item-active" : "portfolio__item"}
                      onClick={() => { filterItems("3D Modelling"); setActiveFilter(4); }}>3D Modelling</span>
                <span className={activeFilter === 5 ? "portfolio__item portfolio__item-active" : "portfolio__item"}
                      onClick={() => { filterItems("Video Editing"); setActiveFilter(5); }}>Video Editing</span>
            </div>

            <div className="portfolio__container grid">
                {items.map(({ id, title, category, pdf, mp4, thumbnail }) => (
                    <motion.div
                        layout
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="portfolio__card"
                        key={id}
                        onClick={() => {
                            const file = pdf || mp4;  // ✅ Ensures it picks the correct file
                            const type = pdf ? "pdf" : mp4 ? "mp4" : null;
                        
                            if (file && type) {
                                openFile(file, type);
                            }
                        }}
                    >
                        <div className="portfolio__thumbnail">
                            {thumbnail ? <img src={thumbnail} alt={title} className="portfolio__img" /> : <div className="portfolio__no-thumbnail">No Preview</div>}
                            <div className="portfolio__mask"></div>
                        </div>
                        <span className="portfolio__category">{category.join(", ")}</span>
                        <h3 className="portfolio__title">{title}</h3>
                    </motion.div>
                ))}
            </div>

            {/* File Pop-Up */}
            {selectedFile && (
                <div className="pdf-popup">
                    <div className="pdf-popup-content">
                        <span className="close-btn" onClick={() => setSelectedFile(null)}>&times;</span>

                        {/* Render Based on File Type */}
                        {selectedFileType === "pdf" && <iframe src={selectedFile} title="PDF Viewer" className="pdf-viewer"></iframe>}
                        {selectedFile.endsWith(".mp4") && (
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
