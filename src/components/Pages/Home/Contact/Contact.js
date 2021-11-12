import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import Zoom from "react-reveal/Zoom";

const Contact = () => {
    return (
        <div className="contact-area py-5" style={{ backgroundColor: '#f9edde'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <Zoom>
                        <div className="contact py-5">
                            <h2 className="text-center py-5 theme-color">Contact Us</h2>
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="First Name" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Last Name" />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="tel" placeholder="Phone Number" />
                                    </Form.Group>
                                </Row>

                                <FloatingLabel controlId="floatingTextarea2" label="Your Message">
                                    <Form.Control
                                    as="textarea"
                                    placeholder="Your Message"
                                    style={{ height: '100px' }}
                                    />
                                </FloatingLabel>

                                <button className="btn text-center theme-bg text-white mt-3 px-4" type="submit">
                                    Submit
                                </button>
                            </Form>
                        </div>
                        </Zoom>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;