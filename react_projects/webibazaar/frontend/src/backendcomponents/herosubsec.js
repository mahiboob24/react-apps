import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FaLongArrowAltRight } from "react-icons/fa";


function Cards() {
  return (
    <Container className="mt-3">
      <Row className="mb-5 mt-3">
        <Col lg={6} md={6} sm={12} xs={12} className="mb-4">
          <Card style={{ width: "50",position:"relative" }} className="card-container">
            <div style={{ width: "50",position:"absolute",top:"50px",left:"50px" }} className="">
              <h5>
              New Smart Watch
              </h5>
              <p>GET UP TO 50% OFF</p>
              <a href="/" className="" style={{textDecoration:"none",}}>Shop Now<FaLongArrowAltRight /></a>
            </div>
            <Image src="/images/hsub1.jpeg" fluid />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12} >
          <Card style={{ width: "50",position:"relative" }}>
          <div style={{ width: "50",position:"absolute",top:"50px",left:"50px" }}>
              <h5>
              New Mobile
              </h5>
              <p>GET UP TO 50% OFF</p>
              <a href="/" className="" style={{textDecoration:"none",}}>Shop Now<FaLongArrowAltRight /></a>
            </div>
            <Image src="/images/hsub2.jpeg" fluid />
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card style={{ width: "50" }}>
            <Card.Body className="">
              <div className="d-flex justify-content-between">
                <div className="d-flex ">
                  <div className=" me-3 ">
                    <img src="/images/electronic/girl.png" alt="" width={40} />
                  </div>
                  <div>
                    <h4>24/7 Support</h4>
                    <p>Online Support 24/7</p>
                  </div>
                </div>
                <div className="vr">
                  <div className=""></div>
                </div>
                <div className="d-flex ">
                  <div className=" me-3 circle">
                    <img src="/images/electronic/piggy.png" alt="" width={40} />
                  </div>
                  <div>
                    <h4>Money Back Guarantee</h4>
                    <p>100% Secure Payment</p>
                  </div>
                </div>
                <div className="vr">
                  <div className=""></div>
                </div>
                <div className="d-flex ">
                  <div className=" me-3 circle">
                    <img src="/images/electronic/gift.png" alt="" width={40} />
                  </div>
                  <div>
                    <h4>Special Gift Cards</h4>
                    <p>Give The Perfect Gift</p>
                  </div>
                </div>
                <div className="vr">
                  <div className=""></div>
                </div>
                <div className="d-flex ">
                  <div className=" me-3 circle ">
                    <img
                      src="/images/electronic/tempo.png"
                      alt=""
                      className=""
                      width={60}
                    />
                  </div>
                  <div>
                    <h4>Free Shipping</h4>
                    <p>On Order Over $99</p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;