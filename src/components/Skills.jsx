
import Section from "./Section.jsx";

function Skills({ skills }) {
    return (
        <Section
            title="Technical Skills"
            subtitle="WHAT I WORK WITH"
            id="skills"
        >
            <div className="skills-list">
                {skills.map((skill) => (
                    <span className="skill-item" key={skill}>
                        {skill}
                    </span>
                ))}
            </div>
        </Section>
    );
}

export default Skills;
