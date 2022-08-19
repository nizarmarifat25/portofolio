import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Hero } from '../component/Hero/Hero'
import nizar from '../asset/image/nizar.jpeg'
export const Home = () => {
  return (
    <div>
      <Hero />
      <div className='experience-wrapper'>
        <Container>
          <h2 className='border-bottom border-secondary text-center border-4 my-4 mx-auto w-25'>About Me</h2>
          <Row className='align-items-center '>
            <Col>
              <p>Hello! My name is Nizar,I am a graduate from Computer and
                Network Engeenering, currently working
                as Front End Web Developer. I have
                been working with a small team to
                develop website and maintaining good
                communication between team members
                and I enjoy creating things that live on the internet. My interest in web development started back in 2021.
              </p>
            </Col>
            <Col className='text-center'>
              <img src={nizar} className="w-50 d-md-inline d-none" />
              <img src={nizar} className="w-100 d-sm-inline d-md-none" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
