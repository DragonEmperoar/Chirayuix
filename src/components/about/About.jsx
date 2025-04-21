import React from 'react';
import './About.css';
import Image from '../../assets/Aboutt me Pic.jpg';
import Resume from '../../assets/Final Resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        Hi, I am Chirayu a passionate UI/UX designer with a strong foundation in frontend and backend development, allowing me to create seamless and functional digital experiences. With expertise in graphic design, brand identity, digital marketing, video editing, and 3D modeling, I bring a multidisciplinary approach to every project.
Currently pursuing a Bachelor of Design (B.Des) in UI/UX, I have gained hands-on experience through multiple internships and projects, refining my skills in user research, interaction design, and full-stack development. My work is driven by creativity, psychology, and emerging technologies like AR/VR to craft intuitive and engaging digital solutions.<br /><br />
                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <ul className="about__list">
                            <li>Adobe Creative Suite</li>
                            <li>Figma</li>
                            <li>SwiftUI</li>
                            <li>Node.js</li>
                            <li>Front-End</li>
                            <li>Back-End</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About
