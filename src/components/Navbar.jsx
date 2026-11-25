
function Navbar() {
    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <a href="#home" className="navbar-logo">
                    Bilal<span>.</span>
                </a>

                <div className="navbar-links">
                    <a href="#about">About</a>
                    <a href="#education">Education</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
