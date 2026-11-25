
function Profile({ profile }) {
    return (
        <section className="profile-section" id="home">
            <div className="container profile-content">
                <div className="profile-text">
                    <p className="eyebrow">HELLO, I'M</p>

                    <h1>{profile.name}</h1>

                    <h2>{profile.role}</h2>

                    <p className="profile-description">
                        {profile.description}
                    </p>

                    {profile.location && (
                        <p className="profile-location">
                            📍 {profile.location}
                        </p>
                    )}

                    <div className="profile-buttons">
                        <a href="#projects" className="btn btn-primary">
                            View Projects
                        </a>

                        <a href="#contact" className="btn btn-secondary">
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className="profile-image-wrapper">
                    <img
                        src={profile.image}
                        alt={`${profile.name} profile`}
                        className="profile-image"
                    />
                </div>
            </div>
        </section>
    );
}

export default Profile;
