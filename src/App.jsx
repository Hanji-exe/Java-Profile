import { useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Activities from './components/Activities';
import Reflection from './components/Reflection';
import Connect from './components/Connect';
import './App.css';

function App() {
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
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <About />
        <Activities />
        <Reflection />
        <Connect />
      </main>
    </div>
  );
}

export default App;
