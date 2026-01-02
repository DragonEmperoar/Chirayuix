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
    pdf: "https://dl.dropboxusercontent.com/scl/fi/zkdcmkke6usnwpaphc1kg/Dracnoir.pdf?rlkey=1bfsdm73i5eef0cj89axnlfjs&st=koh7ru1h&dl=0",
  },
  {
    id: 2,
    title: "Reviving Google+",
    image: Image141,
    pdf: "https://dl.dropboxusercontent.com/scl/fi/x1aebpcqcowqczkpu2550/J_qnqEIKva.pdf?rlkey=ih2ef7h258nnpfl54wvvg4oy7&st=mdoyr9mx&dl=0",
  },
  {
    id: 3,
    title: "Guru – Shishya Virtual Era",
    image: Image142,
    pdf: "https://dl.dropboxusercontent.com/scl/fi/1o2w765tc8338rfjyoysy/J_w1oedlSK.pdf?rlkey=0hjc7pebhawrm6ogs78pwibhj&st=aef7bd7i&dl=0",
  },
];

const Research = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <section className="research section container" id="research">
      <h2 className="section__title">Research Papers</h2>

      {/* Cards */}
      <div className="research__container grid">
        {researchPosts.map((post) => (
          <div
            key={post.id}
            className="research__card"
            onClick={() => setSelectedFile(post.pdf)}
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

      {/* PDF Popup */}
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
