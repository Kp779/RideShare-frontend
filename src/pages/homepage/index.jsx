import React from "react";
import HomeNavbar from "./navbar";
import Herosection from "./herosection";
import Footer from "./footer";
import About from "./about";
// import C from "./figures";
const Home = () => {
    return(
        <>
        <HomeNavbar/>
        <Herosection/>
        {/* <C/> */}
        <About/>
        <Footer/>
        </>
        
    );
}
export default Home ;