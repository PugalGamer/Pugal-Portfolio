import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Lottie from "react-lottie";
import animationData from "../assets/Animation - 1718099620553.json";

export default function Home() {
  return (
    <div className="bg-light" style={{ textTransform: "uppercase" }} id="home">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={12} className="text-center mb-5">
            <Lottie
            
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData,
              }}
              height={"100%"} // Make the height 100% of its parent container
              width={"100%"} // Make the width 100% of its parent container
            />
          </Col>
          <Col lg={6} md={12} sm={12} xs={12} className="mt-4 mt-lg-0">
            <h1
              style={{
                animation: "fadeIn 2s ease-in-out",
                opacity: 0,
                animationFillMode: "forwards",
                animationDelay: "1s",
              }}
            >
              Hi!
            </h1>
            <h2
              style={{
                animation: "fadeIn 2s ease-in-out",
                opacity: 0,
                animationFillMode: "forwards",
                animationDelay: "2s",
              }}
            >
              I'm Pugalendhi
            </h2>
            <h3
              style={{
                animation: "fadeIn 2s ease-in-out",
                opacity: 0,
                animationFillMode: "forwards",
                animationDelay: "3s",
              }}
            >
              Software Engineer
            </h3>
            <Button
            className="mb-3"
              variant="outline-info"
              size="lg"
              href="#about"
              style={{
                animation: "fadeIn 2s ease-in-out",
                opacity: 0,
                animationFillMode: "forwards",
                animationDelay: "4s",
              }}
            >
              About Me!
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
