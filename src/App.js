import './App.css';
import { useEffect, useRef } from "react";

import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Research from './components/Research/Research';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';

import useLocalStorage from 'use-local-storage';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const cursorRef = useRef(null);

  const switchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  /* ===== CUSTOM CURSOR LOGIC ===== */
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="app" data-theme={theme}>
      <Sidebar theme={theme} switchTheme={switchTheme} />

      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Research />
        <Blog />
        <Testimonials />
        <Contact theme={theme} />
      </main>

      {/* 🔵 CUSTOM CURSOR */}
      <div ref={cursorRef} className="custom-cursor" />
    </div>
  );
}

export default App;
