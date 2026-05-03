import { Container, Modal } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react';

export const Banner = () => {
    const [showContactModal, setContactModal] = useState(false);

    return (
        <section className="banner" id="home">
            <Container className="banner-container">
                <span className="tagline">Welcome to Eric's Portfolio</span>
                <h1><span className="wrap">About me</span></h1>
                <p className={"about-text"}>
                    Hello, my name is Eric and I am an aspiring software engineer who recently graduated from Arizona State University.
                    I have an array of personal, academic, and professional experience in tech and continue to strive to learn more in the field.
                    I would welcome the opportunity to put my skills to use as well as build upon them.
                </p>
                <button onClick={() => setContactModal(true)} style={{ cursor: "pointer" }}>Let's connect<FontAwesomeIcon icon={faArrowRight} /></button>
                <Modal show={showContactModal} onHide={() => setContactModal(false)} centered>
                    <Modal.Body className="text-center">
                        <p>Email: eric.romero96@gmail.com<br />
                        <a href="https://www.linkedin.com/in/eric-romero-b43608279/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </p>
                    </Modal.Body>
                </Modal>
            </Container>
        </section>
    )
}