import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { SiBehance, } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/DragonEmperoar' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://www.behance.net/chirayu_12' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiBehance />
            </a>

            <a href='https://youtube.com/@thedragonempeoror3432?feature=shared' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaYoutube />
            </a>

            <a href='https://www.linkedin.com/in/chirayu12/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://www.instagram.com/chirayuix/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaInstagram />
            </a>

        </div>
    );
};

export default HeaderSocials;
