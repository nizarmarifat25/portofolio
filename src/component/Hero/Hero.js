import React from 'react'
import heroImg from '../../asset/image/gummy-coding.svg'
import Typewriter from "typewriter-effect";
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const Hero = () => {
    return (
        <div className='hero'>
            <Container>
            <div className='effect-wrap'>
                    <FontAwesomeIcon icon={faPlus} className="effect-1 effect" />
                    <FontAwesomeIcon icon={faPlus} className="effect-2 effect" />
                    <FontAwesomeIcon icon={faPlus} className="effect-3 effect" />
                </div>
                <Row className='justify-content-center align-items-center  d-none d-md-flex'>
                    <Col className='hero-title' md={6}>
                        <h1>Hi,</h1>
                        <h1>My Name is Nizar</h1>
                        <h1 className='d-inline me-3'>I'm</h1>
                        <Typewriter className="d-inline"
                            options={{
                                strings: ['< Front End />', '< Web Developer />'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        <p className='text-light'></p>
                    </Col>
                    <Col className='hero-img mt-5' md={6}>
                        <img className='w-100' src={heroImg} />
                    </Col>
                </Row>
                <Row className='justify-content-center align-items-center d-sm-block d-md-none '>
                    <Col className='hero-img' md={6}>
                        <img className='w-100' src={heroImg} />
                    </Col>
                    <Col className='hero-title' md={6}>
                        <h1>Hi,</h1>
                        <h1>My Name is Nizar</h1>
                        <h1 className='d-inline me-3'>I'm</h1>
                        <Typewriter className="d-inline"
                            options={{
                                strings: ['< Front End />', '< Web Developer />'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
