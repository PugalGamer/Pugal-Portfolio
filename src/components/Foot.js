import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import {
  Facebook,
  Instagram,
  Github,
  Linkedin,
  Whatsapp,
} from "react-bootstrap-icons";

export default function Foot() {
  return (
    <div className="bg-dark text-light py-4">
      <Container>
        <Row className="justify-content-center mb-3">
          <Col lg={12}>
            <Row className="justify-content-center">
              <Col lg={1} md={2} sm={2} xs={2} className="text-center">
                <a
                  href="https://www.facebook.com/pugal.prasanna?mibextid=qi2Omg&rdid=F1LgXqkVLdZZ5vsc&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FS3mwfYQTF7DejYgR%2F%3Fmibextid%3Dqi2Omg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook
                    size={30}
                    style={{ color: "#4267B2" }}
                    className="icon"
                  />
                </a>
              </Col>
              <Col lg={1} md={2} sm={2} xs={2} className="text-center">
                <a
                  href="https://www.instagram.com/pugal.gamer?utm_source=qr&igshid=M2Zhend4MnUyOGRh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram
                    size={30}
                    style={{ color: "#C13584" }}
                    className="icon"
                  />
                </a>
              </Col>
              <Col lg={1} md={2} sm={2} xs={2} className="text-center">
                <a
                  href="https://github.com/PugalGamer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github
                    size={30}
                    style={{ color: "#ffffff" }}
                    className="icon"
                  />
                </a>
              </Col>
              <Col lg={1} md={2} sm={2} xs={2} className="text-center">
                <a
                  href="https://www.linkedin.com/in/pugalendhi-s-9a5229280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&original_referer=https%3A%2F%2Fwww.google.com%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin
                    size={30}
                    style={{ color: "#0077B5" }}
                    className="icon"
                  />
                </a>
              </Col>
              <Col lg={1} md={2} sm={2} xs={2} className="text-center">
                <Whatsapp
                  size={30}
                  style={{ color: "#25D366" }}
                  className="icon"
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="text-center " lg={6} md={6} sm={12} xs={12}>
            <p>
              9/15 KattaBomman Street, Jeeva Nagar,
              <br /> Trichy-620008.
            </p>
          </Col>
          <Col className="" lg={6} md={6} sm={12} xs={12}>
            <p>
              Ph:7871533595
              <br />
              pugalp702@gmail.com
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
