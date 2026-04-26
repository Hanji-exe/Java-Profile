import portfolioData from '../data/portfolioData.json';
import '../styles/Connect.css';

const Connect = () => {
    const { socials, personal } = portfolioData;

    return (
        <section id="connect" className="connect-section reveal">
            <h2 className="section-title">Connect with Me</h2>
            <p className="connect-subtitle">Feel free to reach out for collaborations or just a friendly chat.</p>

            <div className="social-links">
                {socials.map((social) => (
                    <a
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-item"
                    >
                        <div className="social-icon-wrapper">
                            <i className={social.icon}></i>
                        </div>
                        <span className="social-name">{social.name}</span>
                    </a>
                ))}
            </div>

            <footer className="footer-credits">
                <p>© 2025 {personal.firstName} {personal.lastName} | <span>{personal.education.degree}</span> – Midterm Portfolio</p>

            </footer>
        </section>
    );
};

export default Connect;
