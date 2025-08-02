// Projects.js
import { useState } from "react"; // useState'i eklediğinizden emin olun
import { Col, Container, TabContainer, TabContent, Row, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { ProjectCard } from "./ProjectCard";
import vralani from "../assets/img/alan2.png";
import TrackVisibility from "react-on-screen";
import arenafight from "../assets/img/arenafight.png";
import arenafight1 from "../assets/img/arenafight1.png";
import arenafight2 from "../assets/img/arenafight2.png";
import arenafight3 from "../assets/img/arenafight3.png"; // Arena Fight görseli
import money from "../assets/img/deneme.png"; // Money AI Assistant görseli
import moneypay from "../assets/img/money_2_logo.png"; // Money AI Assistant ikinci görseli
import cx from "../assets/img/cxperium.jpeg"; // cxperium Development görseli
import alan1 from "../assets/img/1.png"; // vr görseli
import alan2 from "../assets/img/2.png"; // vr ikinci görseli
import alan3 from "../assets/img/3.png"; // vr üçüncü görseli
import alan4 from "../assets/img/4.png"; // vr dördüncü görseli
import alan5 from "../assets/img/5.png"; // vr beşinci görseli
import alan6 from "../assets/img/6.png"; // vr altıncı görseli
import simülasyonalani from "../assets/img/simulationarea.png"; // Autonomus Vehicle Simulation Area Design görseli
import simülasyonalani2 from "../assets/img/sim2.png"; // Autonomus Vehicle Simulation Area Design ikinci görseli
import simülasyonalani3 from "../assets/img/sim3.png"; // Autonomus Vehicle Simulation Area Design üçüncü görseli
import simülasyonalani4 from "../assets/img/sim4.jpg"; // Autonomus Vehicle Simulation Area Design dördüncü görseli
import horrorgame1 from "../assets/img/horrorgame1.png"; // Horror Game görseli
import horrorgame2 from "../assets/img/horrorgame2.png";
import horrorgame3 from "../assets/img/horrorgame3.png"; // Horror Game üçüncü görseli
import horrorgame4 from "../assets/img/horrorgame4.png"; // Horror Game dördüncü görseli
import horrorgame5 from "../assets/img/horrorgame5.png"; // Horror Game beşinci görseli
import horrorgame6 from "../assets/img/horrorgame6.png"; // Horror Game altıncı görseli


// YENİ: ProjectDetailsModal bileşenini import ediyoruz
import { ProjectDetailsModal } from './ProjectDetailsModal'; // Az önce oluşturduğumuz dosya

export const Projects = () => {
    // Proje verileri (önceki adımda güncellediğiniz haliyle)
    const projects = [
        {
            id: 1, // Her projeye benzersiz bir ID eklemeyi unutmayın
            title: "VR Learning Factory",
            description: "A VR App for Turkish German University",
            imgUrl: vralani,
            fullDescription: "This project involved creating a virtual reality environment for industrial training. Users could simulate operations on a production line, interact with machinery, and practice safety procedures in a risk-free environment. Key technologies used included Unity 3D for environment development, C# for scripting, and various VR hardware integrations.",
            videoUrl: "https://www.youtube.com/embed/UVckQVkr3fs?si=M9AsmDrnPNkoZF0H", // Örnek YouTube embed linki
            additionalImages: [ // Örnek olarak aynı görseli kullandım, farklı görsellerle değiştirin
                alan1,
                alan2,
                alan3,
                alan4,
                alan5,
                alan6
            ],
            liveDemoLink: "https://www.youtube.com/embed/UVckQVkr3fs?si=M9AsmDrnPNkoZF0H",
            githubLink: "https://github.com/Batuhankilac/VR-Learning-Factory"
        },
        {
            id: 2,
            title: "Arena Fight",
            description: "A game for personal project",
            imgUrl: arenafight,
            fullDescription: "This project involves developing Sumo Arena a competitive arena game with physics-based gameplay. Players control a ball within a designated arena, attempting to push other balls out of the field. The game's core mechanics challenge players with increasing difficulty with each level. Players can use various boosters to gain strategic advantages and defeat their opponents. This project showcases my skills in game mechanics design, physics simulation, and creating a dynamic gaming experience with increasing difficulty levels.",
            videoUrl: "https://www.youtube.com/embed/-Ko_zcqXSNU?si=V84_LYl0VRGAYfwB", // Örnek YouTube embed linki
            additionalImages: [
                arenafight1,
                arenafight2,
                arenafight3 // Örnek olarak aynı görseli kullandım, farklı görsellerle değiştirin
                
            ],
            liveDemoLink: "https://www.youtube.com/embed/-Ko_zcqXSNU?si=V84_LYl0VRGAYfwB",
            githubLink: "https://github.com/Batuhankilac/Arena-Fight"
        },
        {
            id: 3,
            title: "Money AI Assistant", // Başlığı güncelledim
            description: "Worked on this project at Colendi",
            imgUrl: money,
            fullDescription: "I contributed to the development of a chatbot that utilized GPT and BERT models to improve natural language understanding. As part of this process, I added over 2000 data entries and created approximately 200 tags to support accurate question-answer alignment. I performed extensive data cleaning and preprocessing using regular expressions and the Zemberek NLP library. Through data analysis, Word-Cloud visualization, and N-Gram techniques, I identified frequently reported issues, which informed further refinement of the model. I was also responsible for testing and evaluating various Large Language Models (LLMs), achieving a 74% accuracy rate by analyzing manually labeled tags and optimizing the models with newly developed patterns and labels. To further enhance the classification of user complaints and improve overall model performance, I designed and implemented new pattern structures and tagging methods. Throughout the project, I worked with tools and technologies such as Python, RegEx, Zemberek NLP, Pandas, Matplotlib, Jupyter Notebook, and models like Meta-Llama and Qwen.",
            videoUrl: null,
            additionalImages: [
                moneypay // Money AI Assistant için ikinci görsel
            ],
            liveDemoLink: null,        },
        {
            id: 4,
            title: "ChatBot Development with CXPerium",
            description: "Worked on this project at QSoft",
            imgUrl: cx,
            fullDescription: "I worked on the development and enhancement of a customer experience management platform designed to improve communication, streamline operations, and strengthen customer relationships. My role included implementing features such as surveys for measuring customer satisfaction, a helpdesk system for seamless support and issue resolution, and a chat interface to efficiently manage customer requests and distribute tasks among team members. I also contributed to the integration of a CRM module to support personalized customer engagement and drive sales growth. Additionally, I developed functionalities for sending bulk notifications to inform customers about products, services, and campaigns, boosting engagement and visibility. I played a key role in integrating external applications to optimize data management and automate business processes, ultimately improving operational efficiency. My responsibilities also involved leveraging advanced analytics tools to extract actionable insights, conduct visual reporting, and support data-driven decision-making and demand forecasting.",
            videoUrl: null,
            additionalImages: [],        },
        {
            id: 5,
            title: "Autonomus Vehicle Simulation Area Design",
            description: "A Teknofest Project, which I worked on at TGU Autonomous Car Club",
            imgUrl: simülasyonalani,
            fullDescription: "Within TGU TAC, I create simulations with Unity for autonomous vehicles and provide the connection between the Unity environment and ROS. We are working on designing the image processing of the vehicle.",
            videoUrl: "https://www.youtube.com/embed/tFGOYATRtWY?si=o2aTCNWgU-FBeDFu",
            additionalImages: [
                simülasyonalani2,
                simülasyonalani3,
                simülasyonalani4
            ],
            liveDemoLink: "https://www.youtube.com/embed/tFGOYATRtWY?si=o2aTCNWgU-FBeDFu",
            githubLink: null
        },
        {
            id: 6,
            title: "A Horror Game",
            description: "The game that we are developing at the moment at Google Game and Development Academy",
            imgUrl: horrorgame1,
            fullDescription: "The project, which has a mechanical mechanism, is highly dynamic and sensitive, and is being developed to function even under sunlight.\n\nPurpose and Core Mechanics:\n\n• Multiplayer Experience:\n  Provides an environment where players can interact cooperatively or competitively.\n\n• Exploration and Missions:\n  Encourages players to explore different scenes and complete recorded investigations through the \"mission system.\"\n\n• Inventory and Object Interaction:\n  Allows players to collect items, manage their inventory, and interact with objects in the environment to solve puzzles.\n\n• Character Control:\n  Gives full control over the character's basic movement abilities (walking, picking up objects).\n\n• Tension and Horror Elements:\n  Creates suspenseful moments through features like \"NPC stalking/fear\" and \"jumpscares.\"\n\n• Mini Games and Puzzles:\n  Enriches gameplay with mini games like \"safe cracking\" and puzzle-based tasks through the \"rescue system.\"\n\n• Dynamic Environment:\n  The \"time system\" and \"cream design/lighting\" enable the creation of an immersive game world with atmospheric elements.\n\nThe software-based development of the project not only contributes positively to its structure but also allows for detailed feedback.\n\nOur goal is to offer players a rich gaming experience that is both challenging and entertaining.",
            videoUrl: null,
            additionalImages: [
                horrorgame2,
                horrorgame3,
                horrorgame4,
                horrorgame5,
                horrorgame6

            ],
            liveDemoLink: null,
            githubLink: "https://github.com/Batuhankilac/akademi-grup12"
        },
    ];

    // YENİ: Modalın durumunu ve seçili projeyi tutacak state'ler
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    // YENİ: Modal açma fonksiyonu
    const handleShowModal = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    // YENİ: Modal kapama fonksiyonu
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProject(null); // Modalı kapatınca seçili projeyi temizle
    };

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                    <h2>Projects</h2>
                                    <p>Here are some of the projects I have worked on during my career as a software developer.</p>
                                </div>}
                        </TrackVisibility>
                        <TabContainer id="projects-tabs" defaultActiveKey="first">

                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first"> All Projects</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <TabContent>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={project.id} // Anahtar olarak proje ID'sini kullanmak daha iyidir
                                                        {...project}
                                                        // YENİ: ProjectCard'a tıklama olayını ekliyoruz
                                                        onClick={() => handleShowModal(project)}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>

                            </TabContent>
                        </TabContainer>
                    </Col>
                </Row>
            </Container>

            {/* YENİ: ProjectDetailsModal'ı buraya ekliyoruz */}
            <ProjectDetailsModal
                show={showModal}
                handleClose={handleCloseModal}
                project={selectedProject}
            />
        </section>
    )
}