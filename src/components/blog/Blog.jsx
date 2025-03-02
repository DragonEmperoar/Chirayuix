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
            { img: Image117, pdf: "https://dl.dropboxusercontent.com/scl/fi/kf2xjvt102ck11bz21uov/UI-UX-Design-California-Institute-of-Arts.pdf?rlkey=ksfmyu3fym2bmzy3f9i3s3lpo&st=ahze2yvb&dl=0" },
            { img: Image118, pdf: "https://dl.dropboxusercontent.com/scl/fi/uddnp87iyn3gsrtvjadvd/Google-UX-Design.pdf?rlkey=bpcs5jte2h85u16jjdd8bxpwb&st=llxjncdw&raw=1" },
            { img: Image119, pdf: "https://dl.dropboxusercontent.com/scl/fi/kz81zbp8so1xkbuuhnhsg/User-Interface-Design-Minnesota.pdf?rlkey=qyrx2fs57fk1eoxkj6viph0vd&st=vk64olz6&dl=0" },
            { img: Image120, pdf: "https://dl.dropboxusercontent.com/scl/fi/jshjql8lfzr4nyplyhww9/Embedded-Interface-Design-Colorado-Boulder.pdf?rlkey=4tvcgrb2b1vcwefzsm2ngshlq&st=r2u9v3dm&dl=0" },
            { img: Image121, pdf: "https://dl.dropboxusercontent.com/scl/fi/i6srijkz06pekqhn7yxv5/Complete-Web-And-Mobile-Designer.pdf?rlkey=4htynjiacnmytap6e62ru8coi&st=6t5zpfwb&dl=0" },
            { img: Image122, pdf: "https://dl.dropboxusercontent.com/scl/fi/mqflhalrxabq3nv25r0me/Figma-UI-UX-Design-Essential.pdf?rlkey=qyb78thxy5pb521ln148oujh4&st=kk5eac33&dl=0" },
            { img: Image123, pdf: "https://dl.dropboxusercontent.com/scl/fi/6kt33a4team90uand0yhv/Figma-UI-UX-Design-Advanced.pdf?rlkey=fk101e1b5y6e0xbyur4grtsxa&st=2wk5ihqw&dl=0" },
            { img: Image124, pdf: "https://dl.dropboxusercontent.com/scl/fi/hq0b0idch55l7x8ri4vrx/Motion-Design-With-Figma-Animation-Motion-Graphics-UI-UX.pdf?rlkey=4446qoqoi2rpfd0sr43sti92h&st=d905c8d3&dl=0" },
            { img: Image125, pdf: "https://dl.dropboxusercontent.com/scl/fi/nffj8fcjhy75yy6dv4aic/building-design-system-ui-ux.pdf?rlkey=d1h5hvlryd4klmbmdoa3e5xdz&st=at9gj2tj&dl=0" },
        ]
    },
    {
        id: 2,
        title: "Psychology",
        date: "4 Certificates",
        image: Image2,
        previews: [
            { img: Image100, pdf: "https://dl.dropboxusercontent.com/scl/fi/132r1i6wjojqgvuqxs7yj/Psycho-ui-ux-1.pdf?rlkey=tckvdd70f6gc468jtxnkejpbp&st=v8b5mfpi&dl=0" },
            { img: Image101, pdf: "https://dl.dropboxusercontent.com/scl/fi/pdmtcxj5z38fft6i960kn/Psycho-ui-ux-2.pdf?rlkey=43vqcxbabdicgiop8g0ga6q2m&st=qopio71m&dl=0" },
            { img: Image102, pdf: "https://dl.dropboxusercontent.com/scl/fi/7cw9jft4gjgvxik4qclr8/Diploma-in-Psychology.pdf?rlkey=jos5xencel17k8q7l1gkccp3o&st=l4x7csn0&dl=0" },
            { img: Image103, pdf: "https://dl.dropboxusercontent.com/scl/fi/lt3j4b823p3pop46opplz/Master-in-Psychology.pdf?rlkey=3o019qzd8vm35o1dn0hpms5nk&st=fix26onc&dl=0" },
        ]
    },
    {
        id: 3,
        title: "AR/VR",
        date: "25 Certificates",
        author: "2 Degrees",
        image: Image3,
        previews: [
            { img: Image104, pdf: "https://dl.dropboxusercontent.com/scl/fi/v2rn0sx482skjclogd7fd/wix.pdf?rlkey=x0zzypl7w8jc1pohephm9hhon&st=l7f8123m&dl=0" },
            { img: Image105, pdf: "https://dl.dropboxusercontent.com/scl/fi/590da2fuiqabcp7i74say/Daydream.pdf?rlkey=oiwbmj83tnli2z2uqpvm9ny7k&st=8cmwlm4v&dl=0" },
            { img: Image106, pdf: "https://dl.dropboxusercontent.com/scl/fi/f1cotvmhqeg2n277qaa2q/Extended-Reality-for-Everybody-University-of-Michigan.pdf?rlkey=mpj9msm734y9qe6mzxjzyrjyv&st=ywpv9adp&dl=0" },
            { img: Image107, pdf: "https://dl.dropboxusercontent.com/scl/fi/sjzacwk1bfwauj9oo2e1f/Virtual-Reality-University-of-London.pdf?rlkey=s1vqp95kny22ucx6mvj5fksks&st=82jf08kb&dl=0" },
            { img: Image113, pdf: "https://dl.dropboxusercontent.com/scl/fi/mxdg3mom0xrfpki4xyhnp/Meta-AR-Developer.pdf?rlkey=nezmkr10sj2erdl17d3yp15mo&st=t49gaxd8&dl=0" },
            { img: Image126, pdf: "https://dl.dropboxusercontent.com/scl/fi/f72domv59cu6zl1o49hrd/ui-ux-ar.pdf?rlkey=b7evoa964xnjqsei4ytgx16ay&st=pnt0g7uc&dl=0" }
            
        ]
    },
    {
        id: 4,
        title: "Front-End",
        date: "05 Certificates",
        author: "2 Degrees",
        image: Image4,
        previews: [
            { img: Image127, pdf: "https://dl.dropboxusercontent.com/scl/fi/2ucwm3d7t1im8aelkn144/IBM-Front-End-Developer.pdf?rlkey=wjfnxn66yuhrh0ytjc5bs4qsl&st=p99wfpyy&dl=0" },
            { img: Image128, pdf: "https://dl.dropboxusercontent.com/scl/fi/v4xn19qqftiozka5we395/Meta-Android-Developer.pdf?rlkey=1umqq6sti5m1mis665k4eh5g4&st=v5jtmsa0&dl=0" },
            { img: Image129, pdf: "https://dl.dropboxusercontent.com/scl/fi/4obcwhsuf69xi0xucj8um/Meta-iOS-Developer.pdf?rlkey=tlri2p42iwpagvm54dqpv8sbd&st=fw5mi08j&dl=0" },
            { img: Image130, pdf: "https://dl.dropboxusercontent.com/scl/fi/3zx8x4onxob5rifez5l4d/Front-End-Web-Development.pdf?rlkey=4guhqjsr6lrxu2pw4xcyif9d6&st=8pxtzr6h&dl=0" },
            { img: Image131, pdf: "https://dl.dropboxusercontent.com/scl/fi/0o1bh3g75mlyy6sl9bziv/Machine-Learning-Udemy-1-5-3.pdf?rlkey=8qdvmn1aejj5vfzd8kppiscw2&st=02qzo1kf&dl=0" }
        ]
    },
    {
        id: 5,
        title: "Back-End",
        date: "18 Certificates",
        author: "2 Degrees",
        image: Image5,
        previews: [
            { img: Image132, pdf: "https://dl.dropboxusercontent.com/scl/fi/ce739o5sklgcqhryh7fkg/Meta-Back-End-Developer.pdf?rlkey=10ia6omgt4cwbjxszybqqvmj9&st=aadtla9m&dl=0" },
            { img: Image133, pdf: "https://dl.dropboxusercontent.com/scl/fi/47fsvl38guqevjp9tddkq/Robotic-Process-Automation-RPA-UIPath.pdf?rlkey=pxlmm3v8b57ttj27c89gte58j&e=2&st=m0xaxdjq&bmus=1&dl=0" }
        ]
    },
    {
        id: 6,
        title: "Others",
        date: "30 Certificates",
        author: "2 Degrees",
        image: Image6,
        previews: [
            { img: Image108, pdf: "https://dl.dropboxusercontent.com/scl/fi/7smm48327nvyiamvxau1s/Digital-Marketing-ILLINOIS-Urbana-Champaign.pdf?rlkey=zq27w9wm4k6yig4p8dp7vptn9&st=e4e6cksw&dl=0" },
            { img: Image109, pdf: "https://dl.dropboxusercontent.com/scl/fi/mikpzws4c0ns8uxu2vviz/Google-Digital-Marketing-E-Commerce.pdf?rlkey=1g0shw7bvsantmmmh2igxql5c&st=dyft240s&dl=0" },
            { img: Image110, pdf: "https://dl.dropboxusercontent.com/scl/fi/kqcipbocknwrfekn6aqpm/Google-IT-Support.pdf?rlkey=ex7g7rghpprni7hkgpt4njh1u&st=ukd4zdib&dl=0" },
            { img: Image111, pdf: "https://dl.dropboxusercontent.com/scl/fi/rvkl3vhb66hoh8n7fqd5h/Google-Professional-Workspace-Administration.pdf?rlkey=q63lgnahhbkrh3wvfayhv30x0&st=updqpsvj&dl=0" },
            { img: Image112, pdf: "https://dl.dropboxusercontent.com/scl/fi/swsyhmlw1wgrd9xjoj2aq/Google-Project-Management.pdf?rlkey=rzd44oz3oc7jxqq7hk8vzf8hu&st=qbcsremt&dl=0" },
            { img: Image114, pdf: "https://dl.dropboxusercontent.com/scl/fi/3v09s1fb3fsd5375vpjn6/Adobe-Illustrator-Masterclass-2.pdf?rlkey=65xlpx4yiz9yfbb9ycdocdc3j&st=e8nhrnhp&dl=0" },
            { img: Image115, pdf: "https://dl.dropboxusercontent.com/scl/fi/g356jvt6j4veayi72j0a8/Adobe-Premiere-Pro-Materclass-Grading1.pdf?rlkey=9zew6iy4nctj32eeul2sf6rg7&st=i9t8d4sn&dl=0" },
            { img: Image116, pdf: "https://dl.dropboxusercontent.com/scl/fi/48mc3co1c98edt2jj7mpx/Graphic-Design-California-Institute-of-Arts.pdf?rlkey=gqygxagqjcynwihbap0z6h1aa&st=dydqhe0s&dl=0" }
        ]
    }
];

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFileType, setSelectedFileType] = useState("");

    const openFile = (file, type) => {
        if (file) {
            setSelectedFile(file);
            setSelectedFileType(type);
        }
    };

    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Certifications</h2>

            {/* ✅ Show Categories */}
            <div className="blog__container grid">
                {blogPosts.map((post) => (
                    <div className="blog__card" key={post.id} onClick={() => setSelectedCategory(post)}>
                        <div className="blog__thumb">
                            <img src={post.image} alt={`Thumbnail for ${post.title}`} className="blog__img" />
                        </div>
                        <h3 className="blog__title">{post.title}</h3>
                    </div>
                ))}
            </div>

            {/* ✅ Show Previews Inside the Category */}
            {selectedCategory && (
                <div className="previews-popup">
                    <div className="previews-popup-content">
                        <span className="close-btn" onClick={() => setSelectedCategory(null)}>&times;</span>
                        <h3>{selectedCategory.title} Certificates</h3>
                        <div className="previews-grid">
                            {selectedCategory.previews.map((preview, index) => (
                                <div key={index} className="preview-card" onClick={() => openFile(preview.pdf || preview.mp4, preview.pdf ? "pdf" : "mp4")}> 
                                    <img src={preview.img} alt="Certification Preview" className="preview-img" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* ✅ File Pop-Up */}
            {selectedFile && (
                <div className="pdf-popup">
                    <div className="pdf-popup-content">
                        <span className="close-btn" onClick={() => setSelectedFile(null)}>&times;</span>

                        {/* ✅ Render Based on File Type */}
                        {selectedFileType === "pdf" && (
                            selectedFile.includes("drive.google.com") ? (
                                <a href={selectedFile} target="_blank" rel="noopener noreferrer" className="google-drive-link">Open PDF</a>
                            ) : (
                                <iframe 
                                    src={`https://docs.google.com/gview?url=${encodeURIComponent(selectedFile)}&embedded=true`} 
                                    title="PDF Viewer"
                                    className="pdf-viewer"
                                ></iframe>
                            )
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

export default Blog;
