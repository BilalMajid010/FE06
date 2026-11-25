
function Section({ title, subtitle, id, children }) {
    return (
        <section className="section" id={id}>
            <div className="container">
                <div className="section-heading">
                    <p className="eyebrow">{subtitle}</p>
                    <h2>{title}</h2>
                </div>

                {children}
            </div>
        </section>
    );
}

export default Section;
