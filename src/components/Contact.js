import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"; // Make sure to have this image in your assets folder
import emailjs from '@emailjs/browser'; // EmailJS kütüphanesini import ediyoruz

export const Contact = () => {
    const formInıtialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    
    const [formDetails, setFormDetails] = useState(formInıtialDetails);
    const [buttonText, setButtonText] = useState('Send');   
    const [status, setStatus] = useState({});

    // >>> BURADAKİ DEĞERLERİ KENDİ EMAILJS HESABINIZDAN ALDIĞINIZ GERÇEK DEĞERLERLE DEĞİŞTİRİN <<<
    const serviceId = 'service_8i9e6t6';   // Örn: 'service_xxxxxx'
    const templateId = 'template_zj2m287'; // Örn: 'template_yyyyyy'
    const publicKey = '9o5hSX-o4ry1daUxv';     // Örn: 'user_zzzzzz'

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); // Sayfanın yeniden yüklenmesini engeller
        setButtonText("Sending..."); // Buton metnini "Gönderiliyor..." olarak değiştirir

        try {
            // EmailJS ile e-posta gönderme işlemi
            // emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            const response = await emailjs.send(
                serviceId,
                templateId,
                formDetails, // formDetails objesi, EmailJS şablonunuzdaki değişkenlerle eşleşmeli
                publicKey
            );

            setButtonText("Send"); // Buton metnini tekrar "Gönder" yapar
            setFormDetails(formInıtialDetails); // Formu temizler

            if (response.status === 200) { // EmailJS başarılı yanıtı 200 OK ile verir
                setStatus({ success: true, message: "Message Sending Successful!" });
            } else {
                // EmailJS'ten gelen hata mesajlarını da gösterebiliriz
                setStatus({ success: false, message: `Message could not be sent. Error code: ${response.status}` });
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setButtonText("Send");
            setStatus({ success: false, message: "A network error occurred or there is a problem with the EmailJS service. Please check the console." });
        }
    };

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Contact Me</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Surname" onChange={(e) => onFormUpdate('lastName', e.target.value)} />   
                                </Col>
                                 <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="E-Mail" onChange={(e) => onFormUpdate('email', e.target.value)} />   
                                </Col>
                                 <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)} />   
                                </Col>
                                 <Col>
                                    <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && 
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
