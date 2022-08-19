import React from 'react'
import { Container } from 'react-bootstrap'
import { FaInstagram, FaLinkedin, } from 'react-icons/fa'


export const Footer = () => {
    return (
            <footer>
                <div className="art text-center mt-4">
                    <Container>
                        <p className="text-white">Kp. Lame, Desa Mekarsari,  Kec. Selaawi, Kab.Garut, Provinsi Jawa Barat</p>
                        <p className="text-white">Follow Me On :</p>
                        <a className="btn-floating text-dark" href="https://www.instagram.com/nizarmarifat/" target="_blank">
                            <i className="fab fa-instagram"><FaInstagram /></i>
                        </a>
                        <a className="btn-floating text-dark" href="https://www.linkedin.com/in/nizar-marifat/" target="_blank">
                            <i className="fab fa-linkedin"><FaLinkedin /></i>
                        </a>
                        <p className="text-white" >Contact Me | <span className="text-dark">+6282258766060</span></p>
                    </Container>
                </div>
            </footer>
    )
}
