import React from "react";
import { Container, Row,Col } from "reactstrap";
import fullimg from "../../assets/images/full-img.png"
import { Img } from "@chakra-ui/react";
const About = () => {
    return(
        <>
        <Container className="mt-5 bg-1">
        <Row className=" text-center">
            <hr />
        <h1>About</h1>
        <hr />
        </Row>
        <Row className="mt-5">
            <Col className="col-5">
            <Img className="img-fluid" src={fullimg} alt="" />
            </Col>
            <Col className="col-7 mt-5">
            <h1>About</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo tempore distinctio, quisquam dicta harum nisi ducimus
                 molestiae dolor dolorum magnam ipsa debitis est nostrum facilis ea unde non officia corrupti!
                Nemo neque dignissimos architecto culpa mollitia cum molestias, totam eligendi! Perferendis voluptate eum 
                temporibus ut! Ratione a officia libero, quis dolore minima pariatur voluptates hic quidem enim inventore nulla alias!
            </p>
            </Col>
        </Row>
        
        </Container>
        </>
    );
}
export default About;