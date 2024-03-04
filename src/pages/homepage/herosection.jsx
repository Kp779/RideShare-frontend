import React from "react";
import { Container,Row,Col, Button, } from "reactstrap";
import Heroimg from "../../assets/images/herosection.png" 
import styles from "../../styles/styles.module.css"
import { Img } from "@chakra-ui/react";


// import Image from "next/image";
const Herosection = () => {
    return (
        <>
<Container className="mt-5 bg-white" >
    <Row >
        <Col className="col-5 mt-5 ">
        <h2> RIDE. SHARE.</h2>
        <h1> CONNECT </h1>    
        <p>With RideShare, ditch cumbersome traffic jams and build networks as you go. Pool vehicles and serve the environment.</p>
        
        <button className={styles.btn}>
            Signup Now
        </button>
       
        
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
