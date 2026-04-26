import '../styles/Midterm.css'; // Reusing some academic styles

const Final = () => {
    return (
        <section className="midterm-page reveal">
            <h1 className="section-title">Final Portfolio</h1>
            
            <div className="glass" style={{ padding: '5rem', textAlign: 'center', borderRadius: '40px' }}>
                <i className="fas fa-tools" style={{ fontSize: '4rem', color: '#d4af37', marginBottom: '2rem', opacity: 0.5 }}></i>
                <h2 style={{ fontFamily: 'Outfit', fontSize: '2.5rem', marginBottom: '1rem' }}>Finals Coming Soon</h2>
                <p style={{ color: '#94a3b8', fontSize: '1.2rem' }}>
                    This section will be populated with the Final Project and exams once they are completed.
                </p>
            </div>
        </section>
    );
};

export default Final;
