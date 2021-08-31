import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

import React from 'react'

export default function Navs() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Text Analyzer  </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}
