import { Col, Container, Nav, Tab, Row, Modal } from "react-bootstrap"
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { dateProj_img, nasaProj_img, boardgameDB_img, 
    pythonCalc, weightedGrades, checkers,
drivingTest, gymApp, serverGuess, multiPerceptron } from '../assets/img';

export const Projects = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalImg, setModalImg] = useState("");

    const handleImageClick = (imgUrl) => {
        setModalImg(imgUrl);
        setShowModal(true);
    }

    const javaprojects = [
        {
            title: "Due Date Tracker",
            description: "Personal Project\n Tracks all class due dates and displays in order of nearest date.",
            imgUrl: dateProj_img,
        },
        {
            title: "Board Game Event Database",
            description: "School Group Project\n Tracks board games and events associated with them in SQL.",
            imgUrl: boardgameDB_img,
        },
        {
            title: "Checkers Game",
            description: "School Solo Project\n Checkers GUI game which has computer player implementation. Optionally can be played in CLI.",
            imgUrl: checkers,
        },
        {
            title: "Gym App",
            description: "School Group Project\n Gym application, which allows users such as clients, trainers, and owners to register or login. Each role has different permissions.",
            imgUrl: gymApp,
        },
        {
            title: "Server Guess Game",
            description: "School Solo Project\n Host and client implementation for guessing game. Shows movie quote and picture and allows user to guess the movie. Includes leaderboard functionality.",
            imgUrl: serverGuess,
        }
    ];

    const pythonprojects = [
        {
            title: "Periodic Payment Calculator",
            description: "School Solo Project\n Receives input for payment, interest, and number of payments to calculate a total. GUI uses Tkinter.",
            imgUrl: pythonCalc,
        },
        {
            title: "Weighted Grade Calculation",
            description: "School Solo Project\n Grabs input csv file with student data. Calculates student grades with assignment weights and outputs as CLI.",
            imgUrl: weightedGrades,
        },
        {
            title: "Machine Learning Multi-Layer Perceptron",
            description: "School Solo Project\n Implements a multi-layer perceptron machine learning model to learn quadratic function.",
            imgUrl: multiPerceptron,
        }
    ];

    const cprojects = [
        {
            title: "Driving Test Grader",
            description: "School Solo Project: C++\n With answers received from test, grades test and informs user of pass or fail. Error handling included.",
            imgUrl: drivingTest,
        },
        {
            title: "NASA Psyche Mission Simulation",
            description: "School Group Project: C#\n Simulation of NASA mission currently underway. This project uses Unity/C# scripts.",
            imgUrl: nasaProj_img,
        },
    ];

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
                                    <Nav.Link className="firstT" eventKey="first">Java</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="secondT" eventKey="second">Python</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="thirdT" eventKey="third">C/C++/C#</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
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
                                <Tab.Pane eventKey="second">
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
                                <Tab.Pane eventKey="third">
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