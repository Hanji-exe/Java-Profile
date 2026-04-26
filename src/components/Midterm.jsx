import { useState } from 'react';
import portfolioData from '../data/portfolioData.json';
import '../styles/Midterm.css';

const Midterm = () => {
    const { midterm } = portfolioData;
    const [selectedItem, setSelectedItem] = useState(null);

    const openPreview = (item) => setSelectedItem(item);
    const closePreview = () => setSelectedItem(null);

    // Helper to get Google Drive File ID
    const getDriveId = (url) => {
        if (!url || !url.includes('drive.google.com')) return null;
        const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
        return match ? match[1] : null;
    };

    const getThumbnailUrl = (item) => {
        if (item.type.toLowerCase().includes('pdf') && item.fileLink) {
            const id = getDriveId(item.fileLink);
            return id ? `https://lh3.googleusercontent.com/d/${id}=s400` : null;
        }
        return item.fileName ? `/${item.fileName}` : null;
    };

    const renderAcademicCard = (item) => {
        const thumb = getThumbnailUrl(item);
        const isPdf = item.type.toLowerCase().includes('pdf');

        return (
            <div key={item.title} className="academic-card glass">
                <div className="card-top">
                    <span className="type-badge-mini">{isPdf ? 'PDF' : 'IMG'}</span>
                    <span className="score-text">{item.score}</span>
                </div>
                <h3 className="card-title-main">{item.title}</h3>
                {item.status && <p className="card-status-info">{item.status}</p>}

                <div className="preview-trigger" onClick={() => openPreview(item)}>
                    <div className="trigger-overlay">
                        <i className={isPdf ? "fas fa-file-pdf" : "fas fa-image"}></i>
                        <span>View {isPdf ? 'Document' : 'Proof'}</span>
                    </div>
                    {thumb ? (
                        <img src={thumb} alt={item.title} className="card-preview-img" />
                    ) : (
                        <div className="placeholder-preview">
                            <i className={isPdf ? "fas fa-file-pdf" : "fas fa-image"}></i>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <section className="midterm-page reveal">
            <h1 className="section-title">Midterm Portfolio</h1>

            {/* Reflection Header */}
            <div className="midterm-reflection-header glass">
                <i className="fas fa-quote-left quote-top"></i>
                <h2 className="reflection-title-main">{midterm.reflection.title}</h2>
                <div className="reflection-content-body">
                    {midterm.reflection.content.map((p, i) => <p key={i}>{p}</p>)}
                </div>
                <div className="reflection-footer-alt">
                    <p className="quote-text">"{midterm.reflection.quote}"</p>
                    <span className="semester-tag">{midterm.reflection.semester}</span>
                </div>
            </div>

            <div className="midterm-grid-new">
                <div className="grid-section">
                    <h2 className="grid-header-title">Quizzes & Assignments</h2>
                    <div className="cards-wrapper">
                        {midterm.quizzes.map(item => renderAcademicCard(item))}
                        {midterm.assignments.map(item => renderAcademicCard(item))}
                    </div>
                </div>

                <div className="grid-section">
                    <h2 className="grid-header-title">Seatworks</h2>
                    <div className="cards-wrapper">
                        {midterm.seatworks.map(item => renderAcademicCard(item))}
                    </div>
                </div>

                <div className="grid-section">
                    <h2 className="grid-header-title">Activities</h2>
                    <div className="cards-wrapper">
                        {midterm.activities.map(item => renderAcademicCard(item))}
                    </div>
                </div>

                <div className="grid-section full-width">
                    <h2 className="grid-header-title">Major Examinations</h2>
                    <div className="cards-wrapper">
                        {renderAcademicCard(midterm.exam)}
                    </div>
                </div>
            </div>

            {/* Preview Modal */}
            {selectedItem && (
                <div className="preview-modal" onClick={closePreview}>
                    <div className="modal-content glass" onClick={e => e.stopPropagation()}>
                        <button className="close-modal" onClick={closePreview}>&times;</button>

                        <div className="modal-header-info">
                            <div className="modal-meta">
                                <span className="modal-type-tag">{selectedItem.type}</span>
                                <span className="modal-score-tag">Score: {selectedItem.score}</span>
                            </div>
                            <h2 className="modal-title-main">{selectedItem.title}</h2>
                            <p className="modal-desc-main">{selectedItem.explanation}</p>
                            {selectedItem.status && <p className="modal-status-alt">Status: {selectedItem.status}</p>}
                        </div>

                        <div className="modal-body-visual">
                            {selectedItem.type.toLowerCase().includes('pdf') ? (
                                <div className="pdf-preview-container">
                                    <iframe
                                        src={`https://drive.google.com/file/d/${getDriveId(selectedItem.fileLink)}/preview`}
                                        width="100%"
                                        height="600px"
                                        allow="autoplay"
                                        className="pdf-iframe"
                                    ></iframe>
                                    <div className="modal-actions">
                                        <a href={selectedItem.fileLink} target="_blank" rel="noopener noreferrer" className="drive-btn">
                                            <i className="fab fa-google-drive"></i> Open in Google Drive
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <div className="image-preview-container">
                                    <img
                                        src={getThumbnailUrl(selectedItem)}
                                        alt={selectedItem.title}
                                        className="modal-full-img"
                                    />
                                    <p className="img-filename">File: {selectedItem.fileName}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Midterm;
