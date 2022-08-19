import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import skill_logo from '../asset/image/skills.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Typewriter from "typewriter-effect";
import img1 from '../asset/image/html.svg'
import img2 from '../asset/image/mysql.svg'
import img3 from '../asset/image/js.svg'
import img4 from '../asset/image/css-icon.svg'
import img5 from '../asset/image/php.svg'
import img6 from '../asset/image/phpmyadmin.svg'
import img7 from '../asset/image/vue-js-icon.svg'
import img8 from '../asset/image/react-js-icon.svg'
import img9 from '../asset/image/bootstrap.svg'
import img10 from '../asset/image/git.svg'
import img11 from '../asset/image/github.svg'
import img12 from '../asset/image/vs-code.svg'

export const Skills = () => {

    const languages = [img1, img3, img4, img5, img6, img2]
    const frameWork = [img7, img8, img9]
    const tools = [img10, img11, img12]
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
                                    strings: ['< Skills />'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </Col>
                        <Col>
                            <img src={skill_logo} className="w-100 mt-4" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className=' experience-wrapper'>
                <Container className='mt-4  d-none d-md-block'>
                    <h1 className='border-bottom border-secondary border-4 d-inline'>Languages and Databases</h1>
                    <Row className='align-items-center mb-5'>
                        {languages.map((item, i) => {
                            return (
                                <Col md={2} key={i}>
                                    <img src={item} className="w-100 p-5" />
                                </Col>
                            )
                        })}
                    </Row>
                    <h1 className='border-bottom border-secondary border-4 d-inline'>Framework</h1>
                    <Row className='align-items-center mb-5'>
                        {frameWork.map((item, i) => {
                            return (
                                <Col md={2} key={i}>
                                    <img src={item} className="w-100 p-5" />
                                </Col>
                            )
                        })}
                    </Row>
                    <h1 className='border-bottom border-secondary border-4 d-inline'>Tools</h1>
                    <Row className='align-items-center mb-5'>
                        {tools.map((item, i) => {
                            return (
                                <Col md={3} key={i}>
                                    <img src={item} className="w-100 p-5" />
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
                {/* MOBILE */}
                <Container className='mt-4  d-sm-block d-md-none'>
                    <h1 className='border-bottom border-secondary border-4 d-inline'>Languages and Databases</h1>
                    <Row className='align-items-center mb-5'>
                        {languages.map((item, i) => {
                            return (
                                <img src={item} key={i} className="w-50 p-5" />
                            )
                        })}
                    </Row>
                    <h1 className='border-bottom border-secondary border-4 d-inline'>Framework</h1>
                    <Row className='align-items-center mb-5'>
                        {frameWork.map((item, i) => {
                            return (
                                <img src={item} key={i} className="w-50 p-5" />
                            )
                        })}
                    </Row>
                    <h1 className='border-bottom border-secondary border-4 d-inline'>Tools</h1>
                    <Row className='align-items-center mb-5'>
                        {tools.map((item, i) => {
                            return (
                                <img src={item} key={i} className="w-50 p-5" />
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </div>
    )
}
