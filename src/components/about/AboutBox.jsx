import React from 'react'
import { RiFireLine, RiCupLine, RiGroupLine, RiTrophyLine } from 'react-icons/ri';

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <RiFireLine className='about__icon' />

                <div>
                    <h3 className="about__title">2</h3>
                    <span className="about__subtitle">Years of Experience</span>
                </div>
            </div>

            <div className="about__box">
                <RiCupLine className='about__icon' />

                <div>
                    <h3 className="about__title">1</h3>
                    <span className="about__subtitle">Live Projects</span>
                </div>
            </div>

            <div className="about__box">
                <RiGroupLine className='about__icon' />

                <div>
                    <h3 className="about__title">23</h3>
                    <span className="about__subtitle">Completed Projects</span>
                </div>
            </div>

            <div className="about__box">
                <RiTrophyLine className='about__icon' />

                <div>
                    <h3 className="about__title">12</h3>
                    <span className="about__subtitle">Code Languages</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox
