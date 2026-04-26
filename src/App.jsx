import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Midterm from './components/Midterm';
import Final from './components/Final';
import Connect from './components/Connect';
import './App.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [location]); // Re-run observer on route change

  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/midterm" element={<Midterm />} />
          <Route path="/final" element={<Final />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
