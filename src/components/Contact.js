import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import contact from "../assets/AnimationCantact.json";
import Lottie from "react-lottie";
import { ToastContainer, toast } from "react-toastify";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const userName = formData.get("user_name");
    const userEmail = formData.get("user_email");
    const userNumber = formData.get("number");
    const userMessage = formData.get("message");

    if (!userName || !userEmail || !userNumber || !userMessage) {
      toast.warning("Please fill in all the fields", {
        position: "bottom-center",
      });
      return;
    }

    emailjs
      .sendForm("service_saxp2z4", "template_uyh7xe8", form.current, {
        publicKey: "aVws4yOHUwrHDYyyB",
      })
      .then(
        () => {
          toast.success("Success!", { position: "bottom-center" });
          console.log("SUCCESS!");
          form.current.reset(); // Clear the form fields
        },
        (error) => {
          toast.error("Failed...", { position: "bottom-left" });
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="bg-light p-5" id="contact">
      <h1>Contact Me!</h1>

      <Row className="align-items-center mt-3">
        <Col lg={7} md={12} sm={12} xs={12} className="mb-4 mb-lg-0">
          <div className="d-flex justify-content-center">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: contact,
              }}
              height={"100%"}
              width={"100%"}
              style={{ maxWidth: 500, maxHeight: 500 }}
            />
          </div>
        </Col>
        <Col lg={5} md={12} sm={12} xs={12}>
          <Card
            className="shadow border-0  bg-light p-3 p-lg-4 p-md-4 p-sm-5"
            style={{ borderRadius: 10 }}
          >
            <Form
              className=" p-lg-3 p-md-5 p-sm-4 px-2"
              ref={form}
              onSubmit={sendEmail}
            >
              <h5>Get in Touch!</h5>

              <Form.Control
                type="text"
                placeholder="Your Name"
                className="mb-3"
                name="user_name"
              />
              <Form.Control
                type="email"
                placeholder="Your Email"
                className="mb-3"
                name="user_email"
              />
              <Form.Control
                type="number"
                placeholder="Mobile Number"
                className="mb-3"
                name="number"
              />
              <Form.Control
                as="textarea"
                placeholder="Message"
                className="mb-3"
                name="message"
              />
              <Button
                variant="info"
                size="lg"
                className="mt-3 w-100"
                value="Send"
                type="submit"
              >
                Send
              </Button>
              <ToastContainer />
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
