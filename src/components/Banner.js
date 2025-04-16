import { Col, Container, Row, Modal } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react';
import bit_comp from "../assets/img/bit_comp.png"

export const Banner = () => {
    const [typed, setTyped] = useState(false);
    const [showContactModal, setContactModal] = useState(false);

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to Eric's Portfolio</span>
                    <h1><span className="wrap">About me</span></h1>
                    <p>
                        Hello, my name is Eric and I am an aspiring software engineer who is nearing the end of my senior year at Arizona State University.
                        I am originally from an island in Alaska named Kodiak and graduated from High School there. 
                        A few things that I love are learning, staying active, problem solving, gaming, and being outdoors. 
                    </p>
                    <button onClick={() => setContactModal(true)} style={{ cursor: "pointer" }}>Let's connect<FontAwesomeIcon icon={faArrowRight} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="bit_comp">
                        <div className={`image-container ${typed ? "typed" : ""}`} onMouseEnter={() => setTyped(true)}>
                            <img src={bit_comp} alt="bit_comp" />
                            <div className="image-text">
                            <span className="quote">"Stay hungry, stay foolish"</span><span className="cursor1">|</span><br /><span className="steve">-Steve Jobs 2005</span><span className="cursor2">|</span> 
                            </div>
                        </div>
                    </Col>
                </Row>
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