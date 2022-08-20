import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img3 from '../asset/image/contact-img.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Typewriter from "typewriter-effect";
import { faGithub, faInstagram, faLinkedin, faWhatsapp, } from '@fortawesome/free-brands-svg-icons'

export const Contact = () => {
    return (
        <div>
            <div className='experience d-flex align-items-center justify-content-center'>
                <div className='effect-wrap'>
                    <FontAwesomeIcon icon={faPlus} className="effect-1 effect" />
                    <FontAwesomeIcon icon={faPlus} className="effect-2 effect" />
                    <FontAwesomeIcon icon={faPlus} className="effect-3 effect" />
                </div>
                <Container>
                    <Row className='align-items-center'>
                        <Col md={7}>
                            <Typewriter className="text-ceter"
                                options={{
                                    strings: ['< Contact />'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </Col>
                        <Col>
                            <img src={img3} className="w-100 mt-4" />
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container className=' my-5'>
                <Row className='text-center mb-4'>
                    <Col>
                        <h2 className='border-bottom border-secondary border-4 mx-auto w-50'>Let's Contact Me</h2>
                    </Col>
                </Row>
                <div className='wrapper-contact'>
                    <Row className='align-items-center'>
                        <Col md={6}>
                            <iframe title="google maps frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.9524684263015!2d108.01451871485865!3d-7.014872894932851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68cbbc7dac3ed5%3A0xda16c73776a33f47!2sKp.lame!5e0!3m2!1sid!2sid!4v1660811491895!5m2!1sid!2sid" width="100%" height="400px" allowFullScreen="" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </Col>
                        <Col className='info my-4'>
                            <h4>
                                <FontAwesomeIcon icon={faWhatsapp} className='me-2' /> +6282258766060
                            </h4>
                            <h4>
                                <FontAwesomeIcon icon={faEnvelope} className='me-2' /> nizarmarifat253@gmail.com
                            </h4>
                            <h4>
                                <a href="https://www.instagram.com/nizarmarifat/" target="_blank" rel="noreferrer" className='text-decoration-none text-dark'>
                                    <FontAwesomeIcon icon={faInstagram} className='me-2' target="_blank" /> nizarmarifat
                                </a>
                            </h4>
                            <h4>
                                <a href="https://github.com/nizarmarifat25" target="_blank" className='text-decoration-none text-dark'>
                                    <FontAwesomeIcon icon={faGithub} className='me-2' target="_blank" /> nizarmarifat25
                                </a>
                            </h4>
                            <h4>
                                <a href="https://www.linkedin.com/in/nizar-marifat/" className='text-decoration-none text-dark' target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} className='me-2' /> Nizar Marifat
                                </a>
                            </h4>
                            <h4>
                                <FontAwesomeIcon icon={faLocationDot} className='me-2' /> Kp. Lame, Desa Mekarsari, Kec. Selaawi, Kab.Garut, Provinsi Jawa Barat
                            </h4>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div >
    )
}
