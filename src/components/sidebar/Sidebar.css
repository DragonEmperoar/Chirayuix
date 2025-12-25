import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import Logo from "../../assets/Intro.jpg";

import {
  RiHome2Line,
  RiUser3Line,
  RiFileList3Line,
  RiBriefcase2Line,
  RiStackLine,
  RiFilePaper2Line,
  RiChat3Line,
  RiMoonLine,
  RiSunLine,
} from "react-icons/ri";

const navItems = [
  { id: "home", icon: <RiHome2Line /> },
  { id: "about", icon: <RiUser3Line /> },
  { id: "services", icon: <RiFileList3Line /> },
  { id: "resume", icon: <RiBriefcase2Line /> },
  { id: "portfolio", icon: <RiStackLine /> },
  { id: "research", icon: <RiFilePaper2Line /> },
  { id: "blog", icon: <RiFileList3Line /> },
  { id: "contact", icon: <RiChat3Line /> },
];

const Sidebar = ({ theme, switchTheme }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sections = navItems
      .map(item => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return;

    const firstTop = sections[0].offsetTop;
    const lastBottom =
      sections[sections.length - 1].offsetTop +
      sections[sections.length - 1].offsetHeight;

    const START_OFFSET = 120;

    const handleScroll = () => {
      const scrollY = window.scrollY + START_OFFSET;

      sections.forEach((section, index) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (scrollY >= top && scrollY < bottom) {
          setActiveIndex(index);
        }
      });

      const clampedScroll = Math.min(
        Math.max(scrollY, firstTop),
        lastBottom
      );

      const percent =
        (clampedScroll - firstTop) / (lastBottom - firstTop);

      setProgress(percent);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="aside">
      {/* Avatar (desktop only via CSS) */}
      <a href="#home" className="nav__logo">
        <img src={Logo} alt="avatar" />
      </a>

      <nav className="nav">
        <div className="nav__menu">
          {/* Progress bar (desktop only via CSS) */}
          <div className="sidebar-track">
            <div
              className="sidebar-progress"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          {/* Icons */}
          <ul className="nav__list">
            {navItems.map((item, index) => (
              <li key={item.id} className="nav__item">
                <a
                  href={`#${item.id}`}
                  className={`nav__link ${
                    activeIndex === index ? "active-link" : ""
                  }`}
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Theme Switch */}
      <div className="nav__footer">
        <button
          onClick={switchTheme}
          className="nav__link footer__button"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <RiMoonLine /> : <RiSunLine />}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
