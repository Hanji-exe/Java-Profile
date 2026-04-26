import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolioData.json';
import '../styles/About.css';

const About = () => {
    const { personal } = portfolioData;

    return (
        <section id="about" className="about-section reveal">
            <div className="about-container">
                <div className="hero-image-side">
                    <div className="image-wrapper">
                        <img src={personal.avatar} alt={`${personal.firstName} ${personal.lastName}`} className="hero-img" />
                        <div className="image-overlay"></div>
                    </div>
                    <div className="hero-glow"></div>
                </div>
                
                <div className="hero-content-side">
                    <h1 className="hero-name">
                        {personal.firstName} <span className="last-name">{personal.lastName}</span>
                    </h1>
                    
                    <div className="hero-tagline">
                        <span className="tag-line"></span>
                        <h2 className="hero-title">{personal.course}</h2>
                    </div>

                    <div className="academic-info">
                        <p className="school-name">{personal.school}</p>
                        <p className="section-name">{personal.section}</p>
                    </div>
                    
                    <p className="hero-bio">
                        {personal.intro}
                    </p>

                    <div className="hero-cta">
                        <Link to="/midterm" className="cta-button primary">Explore Midterm Page</Link>
                        <Link to="/connect" className="cta-button secondary">Contact Info</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
