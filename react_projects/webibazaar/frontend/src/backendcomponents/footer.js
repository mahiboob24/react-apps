import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ImYoutube2 } from "react-icons/im";
import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaRss, FaInstagram } from "react-icons/fa";
export const Footer = () => {
    return (
        <>
            <div className="container">
                <Navbar expand="lg" className="bg-primary mb-5 p-3">
                    <Container fluid>
                        {/* <Navbar.Brand href="#" className="bg-white p-2 rounded"><FaFacebookF /></Navbar.Brand> */}
                        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll >
                                <Nav.Link  href="#action1" className="bg-white px-3 me-2 rounded" >
                                    <FaFacebookF />
                                </Nav.Link>
                                <Nav.Link  href="#action2  " className="bg-white px-3 me-2 ms-2 rounded" >
                                    <FaTwitter />
                                </Nav.Link>
                                <Nav.Link href="#action3  "className="bg-white px-3 me-2  ms-2 rounded">
                                    <FaRss />
                                </Nav.Link>
                                <Nav.Link  href="#action2  "className="bg-white px-3 me-2 ms-2 rounded">
                                    <ImYoutube2 />
                                </Nav.Link>
                                <Nav.Link href="#action2  " className="bg-white px-3 me-2 ms-2 rounded" >
                                    <FaInstagram />
                                </Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Nav.Link className="text-white me-5  fs-4">
                                    SIGN UP FOR NEWSLETTER
                                </Nav.Link>
                                <Form.Control type="email" placeholder="Your email address"  className="ms-5" aria-label="Search"
                                    style={{ width: "310px" }}
                                />
                                <Button
                                    variant="outline-success "
                                    className="text-white bg-warning me-2"
                                >
                                    SUBSCRIBE
                                </Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            <div className="container d-flex justify-content-between">
                <ul className="" style={{ listStyleType: "none" }}>
                    <h4>CONTACT US</h4>
                    <li><IoLocation className="text-primary me-2" />1093 Marigold Lane, Coral Way,Miami,</li>
                    <li className="ms-4 "> Florida, 33169</li>
                    <li><FaPhone className="text-primary me-2" />610-403-403</li>
                    <li><IoMdMail className="text-primary me-2" />company@example.com</li>
                    <li className="mt-2">
                        <img src="/images/playstore.jpg" alt="imge" className="rounded me-2" style={{ width: "80px" }} />
                        <img src="/images/applestore.jpg" alt="imge" className="rounded" style={{ width: "100px" }} />
                    </li>
                </ul>

                <ul style={{ listStyleType: "none" }}>
                    <h4>MY ACCOUNT</h4>
                    <Nav.Link>Orders</Nav.Link>
                    <Nav.Link>My Account</Nav.Link>
                    <Nav.Link>Checkout</Nav.Link>
                    <Nav.Link>Downloads</Nav.Link>
                    <Nav.Link>Account details</Nav.Link>
                </ul>
                <ul style={{ listStyleType: "none" }}>
                    <h4>CATEGORIES</h4>
                    <Nav.Link>Hydraulic</Nav.Link>
                    <Nav.Link>Atomtronics</Nav.Link>
                    <Nav.Link>Cryotronics</Nav.Link>
                    <Nav.Link>induction</Nav.Link>
                    <Nav.Link>Spintronics</Nav.Link>
                    <Nav.Link>Pro Electron</Nav.Link>
                </ul>
                <ul style={{ listStyleType: "none" }}>
                    <h4>INFORMATION</h4>
                    <Nav.Link>About Us</Nav.Link>
                    <Nav.Link>Delivery Information</Nav.Link>
                    <Nav.Link>Privacy PoNav.Linkcy</Nav.Link>

                    <Nav.Link> Contact Us</Nav.Link>
                </ul>
            </div>
            <hr />

            <div className="container">
                <p>
                    <pre className="text-center">

                        Radio | Hydraulic | Lamp | Pro Electron | Atomtronics | Avionics |
                        Radio | Cryotronics | induction | Circuits | Cryotronics
                    </pre>
                </p>
                <p>
                    <pre className="text-center">

                        | Spintronics | Accessories | Electronics | Chairs | Bar Table |
                        Bioelectronics | Circuits
                    </pre>
                </p>
            </div>
            <hr />
            <p className="text-center">Designed by <a href="g" className="text-dark" style={{ textDecoration: "none" }}> Demo Theme</a> All rights reserved.</p>
            <p className="text-center">
                <img src="/images/meastro.jpg" alt="iage" className="rounded me-2" style={{ width: "50px" }} />
                <img src="/images/ame1.jpg" alt="age" className="rounded me-2" style={{ width: "50px" }} />
                <img src="/images/pp.jpg" alt="imae" className="rounded me-2" style={{ width: "30px" }} />
                <img src="/images/cc.jpg" alt="im" className="rounded me-2" style={{ width: "50px" }} />

            </p>
        </>
    );
};

export default Footer;
