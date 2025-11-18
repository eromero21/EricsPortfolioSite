import { Col, Container, Nav, Tab, Row, Modal } from "react-bootstrap"
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import {javaprojects, cprojects, pythonprojects, jsprojects} from "./ProjectList";

export const Projects = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalImg, setModalImg] = useState("");

    const handleImageClick = (imgUrl) => {
        setModalImg(imgUrl);
        setShowModal(true);
    }

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <div className="proj-box">
                    <h2>Projects</h2>
                    <p>
                        Below you will find some projects that I have worked on so far. There are 3 tabs separated by language used. If you hover over an item, it will display a description.
                        Clicking on the item will give a popup window for easier examination.
                    </p>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link className="firstT" eventKey="first">JS/React</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="secondT" eventKey="second">Java</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="thirdT" eventKey="third">Python</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="fourthT" eventKey="fourth">C/C++/C#</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            jsprojects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                        onImageClick={handleImageClick} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            javaprojects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    onImageClick={handleImageClick} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            pythonprojects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    onImageClick={handleImageClick} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <Row>
                                        {
                                            cprojects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    onImageClick={handleImageClick} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                            <Modal.Body className="proj-modal-body">
                                <img className="proj-modal-img" src={modalImg} alt="Large View" />
                            </Modal.Body>
                        </Modal>
                        <p className="note">Note: If you have any questions or want to see code, feel free to reach out!</p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}