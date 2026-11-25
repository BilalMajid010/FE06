
import Section from "./Section.jsx";

function Contact({ profile }) {
    return (
        <Section
            title="Get In Touch"
            subtitle="CONTACT ME"
            id="contact"
        >
            <div className="contact-card">
                <p>
                    I'm open to junior frontend and web development
                    opportunities.
                </p>

                <a
                    href={`mailto:${profile.email}`}
                    className="contact-link"
                >
                    {profile.email}
                </a>

                {profile.phone && (
                    <p className="contact-item">
                        Phone: {profile.phone}
                    </p>
                )}

                <div className="contact-links">
                    {profile.linkedin && (
                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    )}

                    {profile.github && (
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    )}

                    {profile.website && (
                        <a
                            href={profile.website}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Portfolio
                        </a>
                    )}
                </div>
            </div>
        </Section>
    );
}

export default Contact;
