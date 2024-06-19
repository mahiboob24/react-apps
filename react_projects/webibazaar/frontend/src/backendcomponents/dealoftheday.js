import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FaLongArrowAltRight } from "react-icons/fa";


export const Themeextimg = () => {
  return (
    <Container className="mt-4 mb-4">
      <Row className="row">
       
        
            
            <Col >
          <Card style={{ width: "50",position:"relative" }} className="">
            <div style={{ width: "50",position:"absolute",top:"70px",right:"140px" }}>
              <h5>
              Create Your Own VAIO Laptop
              </h5>
              <p>CHOOSE THE COLOUR, SCREEN SIZE AND PERFORMANCE</p>
              <a href="/" className="" style={{textDecoration:"none",}}>Shop Now<FaLongArrowAltRight /></a>
            </div>
            <Image src="/images/p5.jpg" fluid />
          </Card>
        </Col>
          
      </Row>
      <div className="d-flex mt-4">
        <h4 className="col-3">DEAL OF THE DAY </h4>
        {/* <hr className="col-8 "/> */}
        </div>
    </Container>
  );
};



export default Themeextimg;
