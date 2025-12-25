import React, { useState } from "react";
import "./research.css";

/* Images */
import Image140 from "../../assets/Dracnoir.webp";
import Image141 from "../../assets/Reviving Google  Insights, Personas, and Design Strategies for Sustainable Digital Communities - Copy.webp";
import Image142 from "../../assets/gurudron.webp";

/* Data */
const researchPosts = [
  {
    id: 1,
    title: "Dedicated Anime E-Commerce Platform – Dracnoir",
    image: Image140,
    previews: [
      {
        img: Image140,
        pdf: "https://dl.dropboxusercontent.com/scl/fi/zkdcmkke6usnwpaphc1kg/Dracnoir.pdf?rlkey=1bfsdm73i5eef0cj89axnlfjs&st=koh7ru1h&dl=0",
      },
    ],
  },
  {
    id: 2,
    title: "Reviving Google+",
    image: Image141,
    previews: [
      {
        img: Image141,
        pdf: "https://dl.dropboxusercontent.com/scl/fi/x1aebpcqcowqczkpu2550/J_qnqEIKva.pdf?rlkey=ih2ef7h258nnpfl54wvvg4oy7&st=mdoyr9mx&dl=0",
      },
    ],
  },
  {
    id: 3,
    title: "Guru – Shishya Virtual Era",
    image: Image142,
    previews: [
      {
        img: Image142,
        pdf: "https://dl.dropboxusercontent.com/scl/fi/1o2w765tc8338rfjyoysy/J_w1oedlSK.pdf?rlkey=0hjc7pebhawrm6ogs78pwibhj&st=aef7bd7i&dl=0",
      },
    ],
  },
];

/* Component */
const Research = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <section className="research section container" id="research">
      <h2 className="section__title">Research Papers</h2>

      {/* Research Cards */}
      <div className="research__container grid">
        {researchPosts.map((post) => (
          <div
            className="research__card"
            key={post.id}
            onClick={() => setSelectedCategory(post)}
          >
            <img
              src={post.image}
              alt={post.title}
              className="research__img"
              loading="lazy"
            />
            <h3 className="research__title">{post.title}</h3>
          </div>
        ))}
      </div>

      {/* Preview Popup */}
      {selectedCategory && (
        <div className="research-previews-popup">
          <div className="research-previews-content">
            <span
              className="research-close-btn"
              onClick={() => setSelectedCategory(null)}
            >
              &times;
            </span>

            <h3 className="research-popup-title">
              {selectedCategory.title}
            </h3>

            <div className="research-previews-grid">
              {selectedCategory.previews.map((item, index) => (
                <img
                  key={index}
                  src={item.img}
                  alt=""
                  className="research-preview-img"
                  loading="lazy"
                  onClick={() => setSelectedFile(item.pdf)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* PDF Viewer */}
      {selectedFile && (
        <div className="research-pdf-popup">
          <div className="research-pdf-content">
            <span
              className="research-close-btn"
              onClick={() => setSelectedFile(null)}
            >
              &times;
            </span>

            <iframe
              loading="lazy"
              className="research-pdf-viewer"
              title="Research PDF"
              src={`https://docs.google.com/gview?url=${encodeURIComponent(
                selectedFile
              )}&embedded=true`}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Research;
