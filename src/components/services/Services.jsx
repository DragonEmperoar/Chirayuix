import React from 'react';
import './Services.css';
import Image1 from '../../assets/UI/UX logo.svg'
import Image2 from '../../assets/Graphic Dsign logo.svg'
import Image3 from '../../assets/brand logo.png'
import Image4 from '../../assets/Full Stack.png'
import Image5 from '../../assets/3dmodeling logo.png'
import Image6 from '../../assets/video editing logo.png'

const data = [
    {
        id: 1,
        image: Image1,
        title: "UI/UX Design",
        description:
            "Crafting intuitive and visually appealing user interfaces with a seamless user experience.",
    },
    
    {
        id: 2,
        image: Image2,
        title: "Graphic Design",
        description:
            "Creating visually striking designs for branding, marketing, and digital assets",
    },
    {
        id: 3,
        image: Image3,
        title: "Brand Identity & Marketing",
        description:
            "Building a strong brand presence through cohesive design, messaging, and strategic marketing to enhance visibility and engagement across digital platforms",
    },
    {
        id: 4,
        image: Image4,
        title: "Full-Stack Development",
        description:
            "Designing and developing complete web solutions, from interactive user interfaces to robust backend systems, ensuring seamless functionality and performance.",
    },
    {
        id: 5,
        image: Image5,
        title: "3D Modelling",
        description:
            "Designing detailed 3D models for animations, games, and product visualization",
    },
    {
        id: 6,
        image: Image6,
        title: "Video Editing",
        description:
            "Editing and producing high-quality videos for content creation and marketing",
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services