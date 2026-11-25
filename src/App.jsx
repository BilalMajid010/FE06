
import profile from "./data/profile.js";

import Navbar from "./components/Navbar.jsx";
import Profile from "./components/Profile.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

import "./App.css";

function App() {
    return (
        <>
            <Navbar />

            <main>
                <Profile profile={profile} />

                <section className="about-section" id="about">
                    <div className="container">
                        <p className="eyebrow">ABOUT ME</p>

                        <h2>Building clean and responsive web experiences</h2>

                        <p>
                            I am a Software Engineering graduate focused on
                            frontend development. I enjoy building user
                            interfaces, working with APIs, and creating
                            responsive web applications.
                        </p>
                    </div>
                </section>

                <Education education={profile.education} />

                <Skills skills={profile.skills} />

                <Projects projects={profile.projects} />

                <Contact profile={profile} />
            </main>

            <footer className="footer">
                <div className="container">
                    <p>
                        © {new Date().getFullYear()} {profile.name}.
                        All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
}

export default App;
