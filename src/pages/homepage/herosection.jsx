import React from "react";
import { Container,Row,Col } from "reactstrap";
import Heroimg from "../../assets/images/Herosection-img.gif" 
import { Img } from "@chakra-ui/react";
// import Image from "next/image";
const Herosection = () => {
    return (
        <>
<Container className="mt-5 bg-white" >
    <Row >
        <Col className="col-5 mt-4">
        <h1> Ride share</h1>
        <p> Ridesharing is a transportation service that connects passengers in need of a 
            ride with drivers willing to provide that ride,
             often through the use of dedicated ridesharing platforms and mobile apps. 
            Its a more efficient and often more cost-effective alternative to traditional taxi services and public transportation.</p>
        
        </Col>
        <Col className="col-7">
        <Img className="img-fluid" src={Heroimg} alt="" />
        </Col>
    </Row>
</Container>
        </>
    );
}
export default Herosection ;
