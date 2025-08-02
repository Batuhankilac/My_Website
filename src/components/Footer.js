import { Container, Row, Col } from "react-bootstrap";
// Sosyal medya ikon görsellerini import ediyoruz
import navIcon1 from '../assets/img/nav-icon1.svg';
import githublogo from '../assets/img/github-logo.png';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        {/* <img src={logo} alt="Logo" /> - Eğer footer'da logo isterseniz */}
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/batuhan-kilac-0061921a8/" target='_blank' rel='noopener noreferrer'>
                                <img src={navIcon1} alt='Linkedin' />
                            </a>
                            <a href="https://github.com/Batuhankilac" target='_blank' rel='noopener noreferrer'>
                                <img src={githublogo} alt='Github' className="github-logo" />
                            </a>
                            <a href="https://www.instagram.com/batuklac/" target='_blank' rel='noopener noreferrer'>
                                <img src={navIcon3} alt='Instagram' />
                            </a>
                        </div>
                        <p>Copyright 2025. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}