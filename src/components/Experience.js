import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen'; // Animasyonlar için

// Örnek görselleri import edin. Kendi şirket/kulüp logolarınızla değiştirin.
// Bu yolları kendi assets/img klasörünüzdeki logolarınıza göre güncelleyin.
import oyunakademisi from '../assets/img/oyunakademisi.jpeg'; // Şirket logosu 1
import qsoft_bilisim_logo from '../assets/img/qsoft_bilisim_logo.jpeg';     // Kulüp logosu 1
import colendi_logo from '../assets/img/colendi_logo.jpeg'; // Şirket logosu 2
import tgu_autonomous_car_logo from '../assets/img/tgu_autonomous_car_logo.jpeg'; // Şirket logosu 3

export const Experience = () => {
    // Çalıştığınız şirketler ve üyesi olduğunuz kulüplerin verileri
    // Bu verileri kendi deneyimlerinize göre güncelleyin
    const experiences = [
        {
            id: 1,
            name: "Colendi", // Şirket/Kulüp Adı
            logo: colendi_logo, // Logo görseli
            role: "Data Scientist and AI Intern", // Rolünüz/Pozisyonunuz
            duration: "August 2024 - September 2024", // Çalışma/Üyelik Süresi
            description: "Worked with LLMs (BERT, GPT, Llama 3.1, 3.0, Qwin). Handled dataset labeling, fine-tuning, and retraining with Python and RegEx. Retraining BERT and GPT models based on test and reviewing the results.", // Kısa açıklama
            type: "company" // 'company' veya 'club'
        },
        {
            id: 2,
            name: "QSoft",
            logo: qsoft_bilisim_logo,
            role: "Software Developer Intern",
            duration: "October 2024 - December 2024",
            description: "Developed a WhatsApp API-integrated chatbot with automated responses using C# and .NET. Created intent logic via CX-Perium and set up RPA flows with Zooi RPA Studio.",
            type: "company"
        },
        {
            id: 3,
            name: "TGU Autonomous Car Club",
            logo: tgu_autonomous_car_logo,
            role: "Software Team Member",
            duration: "October 2024 - Now",
            description: "Within TGU TAC, I create simulations with Unity for autonomous vehicles and provide the connection between the Unity environment and ROS. We are working on designing the image processing of the vehicle.",
            type: "club"
        },
                {
            id: 4,
            name: "Google Game and Application Academy",
            logo: oyunakademisi,
            role: "Trainee",
            duration: "December 2024 - Now",
            description: "Game production alone or in groups of 5-6 people with Unity. Learning the processes of a business and company. Using Scrum for development processes. A 3D horror game is currently being developed with Unity and Blender. Learning Animation and Character Production with Blender",
            type: "club"
        },
        // Daha fazla deneyim ekleyebilirsiniz
    ];

    return (
        <section className="experience" id="experience">
            <Container>
                <Row>
                    <Col size={10}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>My Experiences</h2>
                                    <p>The companies I have worked for and the clubs I have actively participated in throughout my career. </p>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
                <Row className="experience-grid">
                    {
                        experiences.map((exp, index) => {
                            return (
                                <Col key={exp.id} sm={6} md={4} lg={3} className="experience-card-col">
                                    <div className="experience-card">
                                        <div className="experience-logo-container">
                                            <img src={exp.logo} alt={`${exp.name} Logo`} className="experience-logo" />
                                        </div>
                                        <h4>{exp.name}</h4>
                                        <p className="experience-role">{exp.role}</p>
                                        <p className="experience-duration">{exp.duration}</p>
                                        <p className="experience-description">{exp.description}</p>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    );
};
