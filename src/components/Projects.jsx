
import Section from "./Section.jsx";

function ProjectCard({ project }) {
    return (
        <article className="project-card">
            <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                    {project.technologies.map((technology) => (
                        <span key={technology}>
                            {technology}
                        </span>
                    ))}
                </div>

                <div className="project-links">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    )}

                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

function Projects({ projects }) {
    return (
        <Section
            title="My Projects"
            subtitle="WHAT I HAVE BUILT"
            id="projects"
        >
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard
                        project={project}
                        key={project.title}
                    />
                ))}
            </div>
        </Section>
    );
}

export default Projects;
