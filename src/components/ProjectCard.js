import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, description, imgUrl, onImageClick }) => {
    return (
        <Col sm={6} md={4} className="d-flex justify-content-center">
            <div className="proj-imgbox" onClick={() => onImageClick(imgUrl)} style={{cursor: "pointer"}}>
                <img src={imgUrl} alt="projImg"/>
                <div className="proj-text">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}