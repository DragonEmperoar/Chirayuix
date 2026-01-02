import React, { useState } from "react";
import "./research.css";

import Image140 from "../../assets/Dracnoir.webp";
import Image141 from "../../assets/Reviving Google  Insights, Personas, and Design Strategies for Sustainable Digital Communities - Copy.webp";
import Image142 from "../../assets/gurudron.webp";

const researchPosts = [
  {
    id: 1,
    title: "Dedicated Anime E-Commerce Platform – Dracnoir",
    image: Image140,
    pdf: "https://dl.dropboxusercontent.com/scl/fi/zkdcmkke6usnwpaphc1kg/Dracnoir.pdf?rlkey=1bfsdm73i5eef0cj89axnlfjs&dl=0",
  },
  {
    id: 2,
    title: "Reviving Google+",
    image: Image141,
    pdf: "https://dl.dropboxusercontent.com/scl/fi/x1aebpcqcowqczkpu2550/J_qnqEIKva.pdf?rlkey=ih2ef7h258nnpfl54wvvg4oy7&dl=0",
  },
  {
    id: 3,
    title: "Guru – Shishya Virtual Era",
    image: Image142,
    pdf: "https://dl.dropboxusercontent.com/scl/fi/1o2w765tc8338rfjyoysy/J_w1oedlSK.pdf?rlkey=0hjc7pebhawrm6ogs78pwibhj&dl=0",
  },
];

const Research = () => {
  const [selectedPDF, setSelectedPDF] = useState(null);

  return (
    <section className="research section container" id="research">
      <h2 className="section__title">Research Papers</h2>

      <div className="research__container grid">
        {researchPosts.map((post) => (
          <div
            key={post.id}
            className="research__card"
            onClick={() => setSelectedPDF(post.pdf)}
          >
            <img
              src={post.image}
              alt={post.title}
              className="research__img"
            />
            <h3 className="research__title">{post.title}</h3>
          </div>
        ))}
      </div>

      {/* ✅ POPUP — EXACTLY LIKE PORTFOLIO */}
      {selectedPDF && (
        <div className="research-pdf-popup">
          <div className="research-pdf-content">
            <span
              className="research-close-btn"
              onClick={() => setSelectedPDF(null)}
            >
              &times;
            </span>

            <iframe
              className="research-pdf-viewer"
              src={`https://docs.google.com/gview?url=${encodeURIComponent(
                selectedPDF
              )}&embedded=true`}
              title="Research PDF"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Research;
