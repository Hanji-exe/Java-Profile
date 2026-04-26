import { useState } from 'react';
import portfolioData from '../data/portfolioData.json';
import '../styles/Activities.css';

const Activities = () => {
    const [filter, setFilter] = useState('All');
    const { activities } = portfolioData;

    const filters = ['All', 'Activity', 'Quiz', 'Assignment', 'Seatwork'];

    const filteredItems = filter === 'All' 
        ? activities 
        : activities.filter(item => item.type === filter);

    return (
        <section id="activities" className="activities-section reveal">
            <h2 className="section-title">Activities & Quizzes</h2>
            
            <div className="filter-buttons">
                {filters.map(f => (
                    <button 
                        key={f} 
                        className={`filter-btn ${filter === f ? 'active' : ''}`}
                        onClick={() => setFilter(f)}
                    >
                        {f}
                    </button>
                ))}
            </div>

            <div className="card-grid">
                {filteredItems.map((item, index) => (
                    <div key={index} className="item-card">
                        <div className="card-header">
                            <span className={`badge badge-${item.type.toLowerCase()}`}>
                                {item.type}
                            </span>
                        </div>
                        <h3 className="card-title">{item.title}</h3>
                        
                        <div className="card-footer">
                            {item.status && (
                                <div className="card-info">
                                    <i className="far fa-calendar-check"></i> {item.status}
                                </div>
                            )}
                            {item.score && (
                                <div className="card-info highlight">
                                    <i className="fas fa-poll-h"></i> Score: {item.score}
                                </div>
                            )}
                        </div>
                        <div className="card-hover-indicator"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Activities;
