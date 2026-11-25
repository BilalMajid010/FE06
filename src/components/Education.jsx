
import Section from "./Section.jsx";

function Education({ education }) {
    return (
        <Section
            title="Education"
            subtitle="MY BACKGROUND"
            id="education"
        >
            <div className="education-list">
                {education.map((item, index) => (
                    <article className="education-card" key={index}>
                        <div className="education-header">
                            <h3>{item.degree}</h3>
                            <span className="education-period">
                                {item.period}
                            </span>
                        </div>

                        <h4>{item.institution}</h4>

                        <p>{item.description}</p>
                    </article>
                ))}
            </div>
        </Section>
    );
}

export default Education;
