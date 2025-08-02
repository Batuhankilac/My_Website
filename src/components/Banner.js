import { useState, useEffect, useCallback, useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { ArrowRightCircle } from "react-bootstrap-icons"; // Kullanılmadığı için kaldırıldı
import headerImg from "../assets/img/undraw_welcome-aboard.svg" 
// import "animate.css"; // Bu satırı kaldırdık
// import TrackVisibility from "react-on-screen"; // Kullanılmadığı için kaldırıldı


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    
    // toRotate dizisini useMemo ile sarmaladık
    const toRotate = useMemo(() => ["Computer Engineer", "Software Developer", "Game Developer"], []); 
    
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    const period = 2000; 

    // tick fonksiyonunu useCallback ile sarmaladık
    const tick = useCallback(() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(350); 
        }
    }, [loopNum, toRotate, isDeleting, text, period]);

    // useEffect bağımlılık dizisine şimdi tick fonksiyonunu güvenle ekleyebiliriz
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta); 

        return () => { clearInterval(ticker) };
    }, [text, delta, tick]); 


    // scrollToContact fonksiyonu kullanılmadığı için kaldırıldı
    // const scrollToContact = () => {
    //     const contactSection = document.getElementById('contact');
    //     if (contactSection) {
    //         contactSection.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    {/* TrackVisibility bileşenini kaldırdık */}
                    {/* {({ isVisible }) =>  */}
                    <div className={/* isVisible ? "animate__animated animate__fadeIn": "" */""}> {/* Animasyon sınıflarını kaldırdık */}
                        <span className="tagline" >Welcome to my Portfolio</span>
                        <h1>Hi! I'm Batuhan, I am a<span className="wrap"> {text}</span></h1>
                        <p>I'm a passionate software developer with a focus on creating innovative solutions. I love coding and am always eager to learn new technologies.</p>
                        {/* "Let's Connect" butonu kaldırıldı */}
                    </div>
                    {/* } */}
                    {/* TrackVisibility kapanış etiketini kaldırdık */}
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt=" Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
