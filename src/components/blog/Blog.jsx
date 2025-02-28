import React, { useState } from "react";
import "./blog.css";

import Image1 from "../../assets/ui ux.webp";
import Image2 from "../../assets/psychology.webp";
import Image3 from "../../assets/AR VR.webp";
import Image4 from "../../assets/front end.webp";
import Image5 from "../../assets/backend.webp";
import Image6 from "../../assets/others.webp";

import Image100 from "../../assets/Psychology UIUX1.webp";
import Image101 from "../../assets/Psychology UIUX2.webp";
import Image102 from "../../assets/Diploma Psychology.webp";
import Image103 from "../../assets/Master Psy.webp";
import Image104 from "../../assets/wix.webp";
import Image105 from "../../assets/daydream.webp";
import Image106 from "../../assets/michigan.webp";
import Image107 from "../../assets/london.webp";
import Image108 from "../../assets/illinois.webp";
import Image109 from "../../assets/google digital.webp";
import Image110 from "../../assets/google it.webp";
import Image111 from "../../assets/google pro.webp";
import Image112 from "../../assets/google project.webp";
import Image113 from "../../assets/meta ar.webp";
import Image114 from "../../assets/illustrator.webp";
import Image115 from "../../assets/premiere pro.webp";
import Image116 from "../../assets/california graphic.webp";
import Image117 from "../../assets/california ui ux.webp";
import Image118 from "../../assets/google ux.webp";
import Image119 from "../../assets/minessota.webp";
import Image120 from "../../assets/boulder.webp";
import Image121 from "../../assets/Complete Web And Mobile Designer .webp";
import Image122 from "../../assets/figma essential.webp";
import Image123 from "../../assets/figma advanced.webp";
import Image124 from "../../assets/motion ui ux.webp";
import Image125 from "../../assets/building design system ui ux.webp";
import Image126 from "../../assets/ar vr ui ux.webp";
import Image127 from "../../assets/ibm.webp";
import Image128 from "../../assets/meta android.webp";
import Image129 from "../../assets/meta ios.webp";
import Image130 from "../../assets/Front End Web Development.webp";
import Image131 from "../../assets/Machine Learning Udemy-1-5-3.webp";
import Image132 from "../../assets/meta back end.webp";
import Image133 from "../../assets/robotics.webp";
// ✅ Each category now has multiple preview images linked to different PDFs
const blogPosts = [
    {
        id: 1,
        title: "UI/UX",
        date: "09 Certificates",
        author: "2 Degrees",
        image: Image1,
        previews: [
            { img: Image117, pdf: "/assets/UI UX Design California Institute of Arts.pdf" },
            { img: Image118, pdf: "/assets/Google UX Design.pdf" },
            { img: Image119, pdf: "/assets/User Interface Design Minnesota.pdf" },
            { img: Image120, pdf: "/assets/Embedded Interface Design Colorado Boulder.pdf" },
            { img: Image121, pdf: "/assets/Complete Web And Mobile Designer .pdf" },
            { img: Image122, pdf: "/assets/Figma UI UX Design Essential.pdf" },
            { img: Image123, pdf: "/assets/Figma UI UX Design Advanced.pdf" },
            { img: Image124, pdf: "/assets/Motion Design With Figma  Animation, Motion Graphics, UI UX.pdf" },
            { img: Image125, pdf: "/assets/building design system ui ux.pdf" },
        ]
    },
    {
        id: 2,
        title: "Psychology",
        date: "4 Certificates",
        image: Image2,
        previews: [
            { img: Image100, pdf: "/assets/Psycho ui ux 1.pdf" },
            { img: Image101, pdf: "/assets/Psycho ui ux 2.pdf" },
            { img: Image102, pdf: "/assets/Diploma in Psychology.pdf" },
            { img: Image103, pdf: "/assets/Master in Psychology.pdf" },
        ]
    },
    {
        id: 3,
        title: "AR/VR",
        date: "25 Certificates",
        author: "2 Degrees",
        image: Image3,
        previews: [
            { img: Image104, pdf: "/assets/wix.pdf" },
            { img: Image105, pdf: "/assets/Daydream.pdf" },
            { img: Image106, pdf: "/assets/Extended Reality for Everybody University of Michigan.pdf" },
            { img: Image107, pdf: "/assets/Virtual Reality University of London.pdf" },
            { img: Image113, pdf: "/assets/Meta AR Developer.pdf" },
            { img: Image126, pdf: "/assets/ui ux ar.pdf" }
            
        ]
    },
    {
        id: 4,
        title: "Front-End",
        date: "05 Certificates",
        author: "2 Degrees",
        image: Image4,
        previews: [
            { img: Image127, pdf: "/assets/IBM Front-End Developer.pdf" },
            { img: Image128, pdf: "/assets/Meta Android Developer.pdf" },
            { img: Image129, pdf: "/assets/Meta iOS Developer.pdf" },
            { img: Image130, pdf: "/assets/Front End Web Development.pdf" },
            { img: Image131, pdf: "/assets/Machine Learning Udemy-1-5-3.pdf" }
        ]
    },
    {
        id: 5,
        title: "Back-End",
        date: "18 Certificates",
        author: "2 Degrees",
        image: Image5,
        previews: [
            { img: Image132, pdf: "/assets/Meta Back-End Developer.pdf" },
            { img: Image133, pdf: "/assets/Robotic Process Automation (RPA) UIPath.pdf" }
        ]
    },
    {
        id: 6,
        title: "Others",
        date: "30 Certificates",
        author: "2 Degrees",
        image: Image6,
        previews: [
            { img: Image108, pdf: "/assets/Digital Marketing ILLINOIS Urbana Champaign.pdf" },
            { img: Image109, pdf: "/assets/Google Digital Marketing & E - Commerce.pdf" },
            { img: Image110, pdf: "/assets/Google IT Support.pdf" },
            { img: Image111, pdf: "/assets/Google Professional Workspace Administration.pdf" },
            { img: Image112, pdf: "/assets/Google Project Management.pdf" },
            { img: Image114, pdf: "/assets/Adobe Illustrator Masterclass 2.pdf" },
            { img: Image115, pdf: "/assets/Adobe Premiere Pro Materclass Grading1.pdf" },
            { img: Image116, pdf: "/assets/Graphic Design California Institute of Arts.pdf" }
        ]
    }
];

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedPDF, setSelectedPDF] = useState(null);

    return (
        <section className="blog container section" id="blog" aria-label="Certifications">
            <h2 className="section__title">Certifications</h2>

            {/* ✅ Step 1: Show Categories */}
            <div className="blog__container grid">
                {blogPosts.map((post) => (
                    <div
                        className="blog__card"
                        key={post.id}
                        onClick={() => setSelectedCategory(post)}
                    >
                        <div className="blog__thumb">
                            <img src={post.image} alt={`Thumbnail for ${post.title}`} className="blog__img" />
                        </div>
                        <div className="blog__details">
                            <h3 className="blog__title">{post.title}</h3>
                            <div className="blog__meta">
                                <span>{post.date}</span>
                                <span className="blog__dot">•</span>
                                <span>{post.author}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ✅ Step 2: Show Small Previews Inside the Category */}
            {selectedCategory && (
                <div className="previews-popup">
                    <div className="previews-popup-content">
                        <span className="close-btn" onClick={() => setSelectedCategory(null)}>&times;</span>
                        <h3>{selectedCategory.title} Certificates</h3>
                        <div className="previews-grid">
                            {selectedCategory.previews.map((preview, index) => (
                                <img
                                    key={index}
                                    src={preview.img}
                                    alt="Certification Preview"
                                    className="preview-img"
                                    onClick={() => setSelectedPDF(preview.pdf)} // ✅ Opens different PDFs
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* ✅ Step 3: PDF Pop-Up */}
            {selectedPDF && (
                <div className="pdf-popup">
                    <div className="pdf-popup-content">
                        <span className="close-btn" onClick={() => setSelectedPDF(null)}>&times;</span>
                        <iframe src={selectedPDF} title="Certification PDF" className="pdf-viewer"></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Blog;
