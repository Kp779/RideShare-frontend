import React, { useEffect, useState } from 'react'
import { useNavigate , useParams} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

import axios from "axios";
import { sendAuthorDetails } from "../../services/Apis";
import styles from '../../styles/styles.module.css';
import logo from '../../assets/images/logo.png';
import profileIcon from "../../assets/images/profileIcon.svg"
import { Container,Row,Col, Button, } from "reactstrap";
import Heroimg from "../../assets/images/herosection.png" 
 import { Img } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CreateRideModal from './CreateRideModal';

const Dashboard = ({onRandomTokenChange, loginUser }) => {
    const navigate = useNavigate();
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const [ride, setRide] = useState([]);
  const [personalRides, setPersonalRides] = useState([]);
  const [randomToken, setRandomToken] = useState('');  
  const { token } = useParams();
  const [loggedInUser, setLoggedInUser] =useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(()=>{
    setLoggedInUser(loginUser);
  })

  console.log("login user in dashboard:", loggedInUser?.fname);

  const [newRide, setNewRide] = useState({ 
    name: loggedInUser?.fname || '',
    start: "",
    destination: "",
    route: "",
    startTime: "",
  });
 
  useEffect(() => {
    setNewRide(prevRide => ({
      ...prevRide,
      name: loggedInUser?.fname || "",
    }));
  }, [loggedInUser]);
// userValidation and store JWT in local storage
  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    if (token) {
      console.log("user valid")
    } else {
      navigate("*")
    }
  }
  useEffect(() => {
    userValid();
  }, [])

  // handle create ride popover
  const handleButtonClick = (e) => {
    e.preventDefault();
    setPopoverOpen(!isPopoverOpen);
  };

// Save new ride
  useEffect(() => {
    axios
      .get("http://localhost:4002/user/ride")
      .then((response) => {
        const allRides = response.data;
        console.log(response.data)
        const personalRides = allRides.filter((ride) => ride.name === 'User Kompal');
        setRide(allRides);
        setPersonalRides(personalRides);
        console.log("Personal Rides:", personalRides);
      });
    
  }, []);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
   
    setNewRide((prevRide) => ({ ...prevRide, [name]: value }));
  };

  const handleAddEmployee = (event) => {
    axios
      .post("http://localhost:4002/user/ride", newRide)
      .then((response) => {
        setRide([...ride, response.data]);
        setNewRide({
          name: "",
          start: "",
          destination: "",
          route: "",
          startTime: "",
        });
      });
      setPopoverOpen(!isPopoverOpen);
      console.log("ride created successfully")
    event.preventDefault();
    
  };


  const requestRide = async (author) =>{
    toast.success("ride request sent!") ;
    console.log("Requesting ride from:", author);
    const requestRideDetails ={
      fname : author
    }
    console.log(requestRideDetails)
    const response = await sendAuthorDetails(requestRideDetails);
   
    // const confirmLinkToken = response.data.randomToken;
    // console.log("The random token is:",confirmLinkToken);
    
    const newRandomToken = response.data.randomToken;
        console.log("Random token:", newRandomToken); // Log the token here
        setRandomToken(newRandomToken);
        onRandomTokenChange(newRandomToken);
        
  };
  const logoutUser = () => {
    // Remove the JWT token from localStorage
    localStorage.removeItem("userdbtoken");
    // Remove any other relevant data from localStorage
    localStorage.removeItem("loggedUser");
    // Redirect the user to the login page or any other desired location
    navigate("/");
  };
  return (
    <div >
      {/* navbar */}
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark ">
        <div className="container-fluid d-flex bd-highlight">
          <div className="w-100 bd-highlight">
            <img className="img-fluid" src={logo} alt="" style={{ maxHeight: '10rem', maxWidth: '10rem' }} />
            <button className="navbar-toggler flex-shrink-1 bd-highlight" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          {/* user profile details modal */}
          <h5 className='mx-2' style={{color:'white'}}>Hi! {loggedInUser?.fname}</h5>

          <div className="collapse navbar-collapse flex-shrink-2 bd-highlight" id="navbarSupportedContent">

            <button type="button" className="btn btn-secondary profileBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src={profileIcon} alt="" />
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Hello { loggedInUser?.fname}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                   <b> Personal Details </b><br />
                    Name:{loggedInUser?.fname}<br />
                    email: {loggedInUser?.email} <br />
                    role: {loggedInUser?.role}
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-success">Logout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>


      <Container className="mt-5 bg-white" >
    <Row >
        <Col className="col-5 mt-5 ">
        <h2> RIDE. SHARE.</h2>
        <h1> CONNECT </h1>    
        <p>With RideShare, ditch cumbersome traffic jams and build networks as you go. Pool vehicles and serve the environment.</p>
        <div >
                    <button
                      className="btn btn-outline-success w-full py-2 mt-2"
                      onClick={openModal}
                    >
                      Create Ride
                    </button>
                    <CreateRideModal
                      isOpen={isModalOpen}
                      closeModal={closeModal}
                      setisOpen={setIsModalOpen}
                    />
                  </div>
        
       
        
        </Col> 
        <Col className="col-7">
        <Img className="img-fluid" src={Heroimg} alt="" />
        </Col>
    </Row>
</Container>

      {/* create ride form */}
   
     {/* show all rides */}
<div className=' rounded shadow p-4 m-5 '>
<h2>ALL RIDES</h2>

            <table class="table">
                <thead>
                    <tr className='table-dark'>
                        <th>ID</th>
                        <th>Author Name</th>
                        <th>Start</th>
                        <th>Destination</th>
                        <th>Route</th>
                        <th>Start Time</th>
                        <th>Request Ride</th>
                    </tr>
                </thead>
                <tbody>
                
                    {ride.map((ride,i=1) => (
              <tr key={ride._id}>
                <td scope="row">{i+1}</td>
                <td>{ride.name}</td>
                <td>{ride.start}</td>
                <td>{ride.destination}</td>
                <td>{ride.route}</td>
                <td>{ride.startTime}</td>
                <td>
                  <button className="btn btn-outline-dark btn-sm " onClick={() => requestRide(ride.name)}>Send Request</button>
                </td>
             </tr>
             ))}
                </tbody>
            </table>
        </div>
{/* Personal rides */}
        <div className=' rounded shadow p-4 m-5 '>
        <h2>MY RIDES</h2>

            <table class="table">
                <thead>
                    <tr className='table-dark'>
                        <th>ID</th>
                        <th>Author Name</th>
                        <th>Start</th>
                        <th>Destination</th>
                        <th>Route</th>
                        <th>Start Time</th>
                        <th>Request Ride</th>
                    </tr>
                </thead>
                <tbody>
                
                    {personalRides.map((ride,i=1) => (
              <tr key={ride._id}>
                <td scope="row">{i+1}</td>
                <td>{ride.name}</td>
                <td>{ride.start}</td>
                <td>{ride.destination}</td>
                <td>{ride.route}</td>
                <td>{ride.startTime}</td>
                <td>
                  <button className="btn btn-outline-dark btn-sm ">Edit</button>
                  <button className="btn btn-success btn-sm mx-2">Delete</button>
                </td>
             </tr>
             ))}
                </tbody>
            </table>
        </div>
        <ToastContainer />

    </div>
  )
}

export default Dashboard