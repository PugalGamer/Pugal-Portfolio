import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import pugal from "../assets/pugal.jfif";

export default function Head() {
  const [activeLink, setActiveLink] = useState("home");

  const handleSelect = (eventKey) => {
    setActiveLink(eventKey);
  };

  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="md" >
      <Container fluid>
        <Navbar.Brand href="/">
          <h3>
            <img alt="" src={pugal} width={50} className="rounded-circle" />{" "}
            Pugal
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="ms-auto"
            activeKey={activeLink}
            onSelect={handleSelect}
          >
            <Nav.Link
              eventKey="home"
              href="#home"
              style={{
                borderBottom:
                  activeLink === "home" ? "2px solid white" : "none",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              eventKey="about"
              href="#about"
              style={{
                borderBottom:
                  activeLink === "about" ? "2px solid white" : "none",
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              eventKey="experience"
              href="#experience"
              style={{
                borderBottom:
                  activeLink === "experience" ? "2px solid white" : "none",
              }}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              eventKey="contact"
              href="#contact"
              style={{
                borderBottom:
                  activeLink === "contact" ? "2px solid white" : "none",
              }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
