// ProjectCard.js
import { Col } from "react-bootstrap"

// YENİ: onClick prop'unu alıyoruz
export const ProjectCard = ({ title, description, imgUrl, onClick }) => {
    return (
        // YENİ: Tıklama olayını div'e ekliyoruz
        <Col sm={6} md={4} onClick={onClick} style={{ cursor: 'pointer' }}> 
            <div className="proj-imgbx">
                <img src={imgUrl} alt={title} /> {/* alt prop'u eklemeyi unutmayın */}
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}