import portfolioData from '../data/portfolioData.json';
import '../styles/Reflection.css';

const Reflection = () => {
    const { reflection, personal } = portfolioData;

    return (
        <section id="reflection" className="reflection-section reveal">
            <h2 className="section-title">{reflection.title}</h2>
            
            <div className="reflection-container">
                <div className="reflection-card">
                    <i className="fas fa-quote-left quote-icon"></i>
                    
                    <div className="reflection-text">
                        {reflection.content.map((para, i) => (
                            <p key={i} dangerouslySetInnerHTML={{ __html: para }}></p>
                        ))}
                    </div>
                    
                    <div className="reflection-footer">
                        <div className="reflection-author">
                            <h4>{personal.firstName} {personal.lastName}</h4>
                            <p>{personal.title} • {reflection.semester}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reflection;
