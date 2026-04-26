import { useState, useEffect } from 'react';
import portfolioData from '../data/portfolioData.json';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const { personal, navLinks } = portfolioData;

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#about" className="navbar-logo">
                    {personal.firstName}<span>{personal.lastName}</span>
                </a>

                <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
