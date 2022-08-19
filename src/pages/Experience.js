import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../asset/image/SocketSpace-2.png'
import img1 from '../asset/image/img1.svg'
import img2 from '../asset/image/img2.svg'
import img3 from '../asset/image/apps.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Typewriter from "typewriter-effect";

export const Experience = () => {

    const data = [
        {
            id: 1,
            jabatan: 'Frontend',
            date: "Sep 2021 - Jun 2022",
            company: "PT Transformasi Data",
            skill: [
                'Develop website using React Js framework',
                'Design and implement solutions for user needs (web)',
                'Collaborate with Backend Team for API integration'
            ],
            logo: Logo,
            img: img2
        },
        {
            id: 2,
            jabatan: 'Jr.Frontend (Internship)',
            date: "Sep 2021 - Jun 2022",
            company: "PT Transformasi Data",
            skill: ['Develop website using Bootstrap framework'],
            logo: Logo,
            img: img1
        },
    ]

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
                                    strings: ['< Experience />'],
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
            <div className='experience-card-wrapper'>
                <Container >
                    {data.map((item, i) => {
                        return (
                            <Row key={i} className='experience-card pt-3 align-items-center justify-content-center '>
                                <Col md={5} className="text-center">
                                    <img src={item.img} className="w-50" />
                                </Col>
                                <Col md={5} className="title m-2 shadow p-5 mb-5 bg-body rounded">
                                    <Row className='d-flex'>
                                        <Col md={8}>
                                            <h3>{item.jabatan}</h3>
                                        </Col>
                                        <Col>
                                            <img src={item.logo} className="w-100  d-none d-md-block" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <strong className='text-secondary'>
                                                {item.company} | {item.date}
                                            </strong>
                                        </Col>
                                    </Row>
                                    <ul>
                                        {item.skill.map((s, i) => {
                                            return <li key={i}>{s}</li>
                                        })}
                                    </ul>
                                </Col>
                            </Row>
                        )
                    })}

                </Container>
            </div>
        </div>
    )
}
