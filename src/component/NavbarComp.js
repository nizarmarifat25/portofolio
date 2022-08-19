
import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  NavLink } from 'react-router-dom';

export const NavbarComp = () => {

    const navscroll = () => {
        const navbar = document.getElementById("navbar")
        if (window.scrollY >= 80) {
            navbar.classList.add("sticky");
        } else { navbar.classList.remove("sticky"); }
    }
    useEffect(() => {
        window.addEventListener('scroll', navscroll)
    })
    return (
        <div>
            <Navbar bg="light" expand="lg" id="navbar" onScroll={navscroll}>
                <Container>
                    <Navbar.Brand href="#home">
                        NIZAR MARIFAT
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="ms-auto">
                            <NavLink className={({ isActive }) =>
                                isActive ? "active nav-link" : "nav-link"} to={'/'}>Home</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? "active nav-link" : "nav-link"
                            } to={'/experience'}>Experience</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? "active nav-link" : "nav-link"
                            } to={'/projects'}>Projects</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? "active nav-link" : "nav-link"
                            } to={'/skills'}>Skills</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? "active nav-link" : "nav-link"
                            } to={'/contact'}>Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
