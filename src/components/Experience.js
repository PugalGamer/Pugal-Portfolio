import React from "react";
import { Card, Col, Row } from "react-bootstrap";

export default function Experience() {
  return (
    <div className="p-5" id="experience">
      <h1>Experience</h1>
      <Row style={{ textAlign: "justify" }} className="mt-5">
        <Col lg={4} md={6} sm={12} xs={12} className="mb-4">
          <Card
            className="border-0 shadow-sm p-2"
            style={{ backgroundColor: "#E3FDFD", height: "100%" }}
          >
            <Card.Body>
              <Card.Title className="justify-content-center d-flex">
                Software Engineer
              </Card.Title>
              <Card.Text>
                Presently working as a Software Engineer at
                <strong>
                  GRAVITYKEY TECHNOLOGIES PRIVATE LIMITED, Chennai.
                </strong>
                Currently involved in various projects.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} xs={12} className="mb-4">
          <Card
            className="border-0 shadow-sm p-2"
            style={{ backgroundColor: "#DBE2EF", height: "100%" }}
          >
            <Card.Body>
              <Card.Title className="justify-content-center d-flex">
                Junior Software Developer-Intern
              </Card.Title>
              <Card.Text>
                Worked as a Junior Software Developer Intern at
                <strong>
                  ROCKG MICRO TECHNOLOGY (INDIA) PRIVATE LIMITED, Trichy.
                </strong>
                Completed several Proof of Concept (POC) tasks from April to
                June.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} xs={12} className="mb-4">
          <Card
            className="border-0 shadow-sm p-2"
            style={{ backgroundColor: "#BDCDD6", height: "100%" }}
          >
            <Card.Body>
              <Card.Title className="justify-content-center d-flex">
                MCA
              </Card.Title>
              <Card.Text>
                Completed Master of Computer Applications (MCA) at
                <strong> Bishop Heber College, Trichy.</strong> Demonstrated
                leadership qualities as the President of the MCA department.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <h3>Projects</h3>
        <Col lg={4} md={6} sm={12} xs={12} className="mb-4">
          <Card
            className="border-0 shadow-sm p-2 bg-info"
            style={{ height: "100%" }}
          >
            <Card.Body>
              <Card.Title className="justify-content-center d-flex">
                <h5>Project 1</h5>
              </Card.Title>
              <Card.Text>Task Management App</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} xs={12} className="mb-4">
          <Card
            className="border-0 shadow-sm p-2"
            style={{ backgroundColor: "#FFA559", height: "100%" }}
          >
            <Card.Body>
              <Card.Title className="justify-content-center d-flex">
                <h5>Project 2</h5>
              </Card.Title>
              <Card.Text>MERN CRUD APP</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} xs={12} className="mb-4">
          <Card
            className="border-0 shadow-sm p-2"
            style={{ backgroundColor: "#A7FF83", height: "100%" }}
          >
            <Card.Body>
              <Card.Title className="justify-content-center d-flex">
                <h5>Project 3</h5>
              </Card.Title>
              <Card.Text>User and Admin particular pages Google Auth</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
