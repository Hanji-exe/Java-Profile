import portfolioData from '../data/portfolioData.json';
import '../styles/About.css';

const About = () => {
    const { personal } = portfolioData;

    return (
        <section id="about" className="about-section reveal">
            <div className="about-container">
                <div className="hero-image-side">
                    <div className="image-wrapper">
                        <img src="/biggerphoto.png" alt={`${personal.firstName} ${personal.lastName}`} className="hero-img" />
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
                        <h2 className="hero-title">{personal.title}</h2>
                    </div>
                    
                    <p className="hero-bio">
                        {personal.bio}
                    </p>

                    <div className="hero-education">
                        <div className="edu-minimal-card">
                            <i className="fas fa-graduation-cap"></i>
                            <div className="edu-details">
                                <h3>{personal.education.school}</h3>
                                <p>{personal.education.degree}</p>
                            </div>
                        </div>
                    </div>

                    <div className="hero-cta">
                        <a href="#activities" className="cta-button primary">View My Work</a>
                        <a href="#connect" className="cta-button secondary">Get in Touch</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
