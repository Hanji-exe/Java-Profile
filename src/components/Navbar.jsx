import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import portfolioData from '../data/portfolioData.json';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

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
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    {personal.firstName}<span>{personal.lastName}</span>
                </Link>

                <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            to={link.href} 
                            className={`nav-link ${location.pathname === link.href ? 'active-link' : ''}`}
                            onClick={closeMenu}
                        >
                            <i className={`${link.icon} nav-icon`}></i>
                            <span className="nav-text">{link.name}</span>
                        </Link>
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
