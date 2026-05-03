import { useState, useEffect } from "react";
import { Navbar, Container, Nav, Modal} from "react-bootstrap";
import logo from "../assets/img/Logo.png";
import { FaLinkedinIn, FaFilePdf, FaGithub } from 'react-icons/fa';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [showLogoModal, setLogoModal] = useState(false);
    const [showContactModal, setContactModal] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand onClick={() => setLogoModal(true)} style={{ cursor: "pointer" }}>
            <img src={logo} alt="Logo" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
            <Modal show={showLogoModal} onHide={() => setLogoModal(false)} centered>
                <Modal.Body className="text-center">
                    <img src={logo} alt='Logo' />
                </Modal.Body>
            </Modal>
            <Modal show={showContactModal} onHide={() => setContactModal(false)} centered>
                <Modal.Body className="text-center">
                    <p>Email: eric.romero96@gmail.com<br />
                    <a href="https://www.linkedin.com/in/eric-romero-b43608279/" target="_blank" rel="noopener noreferrer">LinkedIn</a><br />
                    <a href="https://github.com/eromero21" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </p>
                </Modal.Body>
            </Modal>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/eric-romero-b43608279/" target="_blank" rel="noopener noreferrer" title="LinkedIn"> <FaLinkedinIn className="linkedin-icon"/> </a>
                <a href="/Eric_Romero_Resume.pdf" target="_blank" rel="noopener noreferrer" title="Resume"> <FaFilePdf className="resume-icon"/> </a>
                <a href="https://github.com/eromero21" target="_blank" rel="noopener noreferrer" title="GitHub"> <FaGithub className="github-icon" /> </a>
            </div>
            <button className="vvd" onClick={() => setContactModal(true)} style={{cursor: "pointer"}}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}