import React from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

export const ProjectDetailsModal = ({ show, handleClose, project }) => {
    if (!project) return null; // Proje bilgisi yoksa bir şey render etme

    return (
        <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>{project.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col md={12}>
                            {project.videoUrl && (
                                <div className="video-responsive">
                                    <iframe
                                        width="100%"
                                        height="400" // Yüksekliği ihtiyacınıza göre ayarlayın
                                        src={project.videoUrl}
                                        title={`${project.title} Demo`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            )}
                            {!project.videoUrl && project.imgUrl && ( // Eğer video yoksa ve ana görsel varsa onu göster
                                <img src={project.imgUrl} alt={project.title} className="img-fluid mb-3" />
                            )}
                            <p className="mt-3">{project.fullDescription || project.description}</p>
                        </Col>
                    </Row>
                    {project.additionalImages && project.additionalImages.length > 0 && (
                        <Row className="mt-4">
                            <Col md={12}>
                                <h4>Additional Images</h4>
                                <Row>
                                    {project.additionalImages.map((img, index) => (
                                        <Col xs={6} md={4} key={index} className="mb-3">
                                            <img src={img} alt={`${project.title} ${index + 1}`} className="img-fluid" />
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>
                    )}
                    <Row className="mt-4">
                        <Col md={12}>
                            {project.liveDemoLink && (
                                <Button variant="primary" href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="me-2">
                                    See Live Demo
                                </Button>
                            )}
                            {project.githubLink && (
                                <Button variant="secondary" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    View on GitHub
                                </Button>
                            )}
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};