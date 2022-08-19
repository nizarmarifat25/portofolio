import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import project1 from '../asset/image/arya-fire.jpeg'
import project2 from '../asset/image/geotour-batur.jpeg'
import project3 from '../asset/image/wedding.jpeg'
import project4 from '../asset/image/zodiak.jpeg'
import img3 from '../asset/image/undraw_projections_re_ulc6.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Typewriter from "typewriter-effect";

export const Projects = () => {

    return (
        <div className='experience-wrapper'>
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
                                    strings: ['< Projects />'],
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
            <div className='project-list my-3 d-none d-md-block'>
                <Container>
                    <Row className='project-info align-items-center my-3'>
                        <Col md={6}>
                            <h2>Arya Fire</h2>
                            <div className='p-4 wrapper-project-title'>
                                <h3 >Strong reminder to replace extinguisher</h3>
                                <strong>Feature :</strong>
                                <ul>
                                    <li>Notification with audio</li>
                                    <li>Responsive</li>
                                    <li>Export data to excel with filter date</li>
                                    <li>CRUD</li>
                                </ul>
                                <span className='mx-2'>PHP</span>
                                <span className='mx-2'>Bootstrap</span>
                            </div>
                        </Col>
                        <Col>
                            <img src={project1} className="w-75 shadow project-img m-auto d-block my-2" />
                        </Col>
                    </Row>

                    <Row className='project-info align-items-center my-3'>
                        <Col>
                            <img src={project4} className="w-75 shadow project-img m-auto d-block my-2" />
                        </Col>
                        <Col md={6}>
                            <h2>ZODIAK GROUP</h2>
                            <div className='p-4 wrapper-project-title'>
                                <h3>Mining ERP</h3>
                                <strong>Feature :</strong>
                                <ul>
                                    <li>Authentication</li>
                                    <li>Control coal production</li>
                                    <li>Control finances (journals, worksheets, ledgers)</li>
                                    <li>Control the vehicle (service, fuel)</li>
                                    <li>Monitor Revenue, Production and Sales Coal</li>
                                    <li>Export and import data with filter date</li>
                                    <li>Etc</li>
                                </ul>
                                <span className='mx-2'>React Js</span>
                                <span className='mx-2'>React chart js</span>
                                <span className='mx-2'>Bootstrap</span>
                            </div>
                        </Col>
                    </Row>



                    <Row className='project-info align-items-center my-3'>
                        <Col md={6}>
                            <h2>INVITATION</h2>
                            <div className='p-4 wrapper-project-title'>
                                <h3 >Wedding Invitation</h3>
                                <strong>Feature :</strong>
                                <ul>
                                    <li>Comment box</li>
                                    <li>Music on the web</li>
                                    <li>Wedding Day Countdown</li>
                                    <li>Payment gateway QR</li>
                                    <li>Responsive</li>
                                </ul>
                                <span className='mx-2'>HTML</span>
                                <span className='mx-2'>CSS</span>
                                <span className='mx-2'>JavaScript</span>
                            </div>
                        </Col>
                        <Col>
                            <img src={project3} className="w-75 shadow project-img m-auto d-block my-2" />
                        </Col>
                    </Row>
                    <Row className='project-info align-items-center my-3'>
                        <Col>
                            <img src={project2} className="w-75 shadow project-img m-auto d-block my-2" />
                        </Col>
                        <Col md={6}>
                            <h2>GEOTOUR BATUR</h2>
                            <div className='p-4 wrapper-project-title'>
                                <h3 >Company Profile</h3>
                                <strong>Feature :</strong>
                                <ul>
                                    <li>Introduce company services, tourist attractions etc</li>
                                    <li>Responsive</li>
                                    <li>Testimonial</li>
                                </ul>
                                <span className='mx-2'>React Js</span>
                                <span className='mx-2'>Bootstrap</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* MOBILE */}
            <div className='project-list my-3 d-md-none d-sm-block'>
                <Container>
                    <Row className='project-info align-items-center mb-5'>
                        <h2>Arya Fire</h2>
                        <Col>
                            <img src={project1} className="w-75 shadow project-img m-auto d-block my-2" />
                        </Col>
                        <Col md={6}>
                            <div className='p-4 wrapper-project-title'>
                                <h3 >Strong reminder to replace extinguisher</h3>
                                <strong>Feature :</strong>
                                <ul>
                                    <li>Notification with audio</li>
                                    <li>Responsive</li>
                                    <li>Export data to excel with filter date</li>
                                    <li>CRUD</li>
                                </ul>
                                <span className='mx-2'>PHP</span>
                                <span className='mx-2'>Bootstrap</span>
                            </div>
                        </Col>
                    </Row>
                    <Row className='project-info align-items-center mb-5'>
                        <h2>ZODIAK GROUP</h2>
                        <Col>
                            <img src={project4} className="w-75 shadow project-img m-auto d-block my-2" />
                        </Col>
                        <Col md={6}>
                            <div className='p-4 wrapper-project-title'>
                                <h3>Mining ERP</h3>
                                <strong>Feature :</strong>
                                <ul>
                                    <li>Authentication</li>
                                    <li>Control coal production</li>
                                    <li>Control finances (journals, worksheets, ledgers)</li>
                                    <li>Control the vehicle (service, fuel)</li>
                                    <li>Monitor Revenue, Production and Sales Coal</li>
                                    <li>Export and import data with filter date</li>
                                    <li>Etc</li>
                                </ul>
                                <span className='mx-2'>React Js</span>
                                <span className='mx-2'>React chart js</span>
                                <span className='mx-2'>Bootstrap</span>
                            </div>
                        </Col>
                    </Row>

                    <Row className='project-info align-items-center mb-5'>
                            <h2>INVITATION</h2>
                        <Col>
                            <img src={project3} className="w-75 shadow project-img m-auto d-block my-2" />
                        </Col>
                        <Col md={6}>
                            <div className='p-4 wrapper-project-title'>
                                <h3 >Wedding Invitation</h3>
                                <strong>Feature :</strong>
                                <ul>
                                    <li>Comment box</li>
                                    <li>Music on the web</li>
                                    <li>Wedding Day Countdown</li>
                                    <li>Payment gateway QR</li>
                                    <li>Responsive</li>
                                </ul>
                                <span className='mx-2'>HTML</span>
                                <span className='mx-2'>CSS</span>
                                <span className='mx-2'>JavaScript</span>
                            </div>
                        </Col>
                    </Row>
                    <Row className='project-info align-items-center my-3'>
                            <h2>GEOTOUR BATUR</h2>
                        <Col>
                            <img src={project2} className="w-75 shadow project-img m-auto d-block my-2" />
                        </Col>
                        <Col md={6}>
                            <div className='p-4 wrapper-project-title'>
                                <h3 >Company Profile</h3>
                                <strong>Feature :</strong>
                                <ul>
                                    <li>Introduce company services, tourist attractions etc</li>
                                    <li>Responsive</li>
                                    <li>Testimonial</li>
                                </ul>
                                <span className='mx-2'>React Js</span>
                                <span className='mx-2'>Bootstrap</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
