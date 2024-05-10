import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";

import styles from '../../styles/styles.module.css';
import logo from '../../assets/images/logo.png';
import profileIcon from "../../assets/images/profileIcon.svg"

const Dashboard = () => {

  const navigate = useNavigate();
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const [ride, setRide] = useState([]);
  const [newRide, setNewRide] = useState({
    name: "",
    start: "",
    destination: "",
    route: "",
    startTime: "",
  });

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
      .then((response) => setRide(response.data));
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
          <div className="collapse navbar-collapse flex-shrink-2 bd-highlight" id="navbarSupportedContent">

            <button type="button" className="btn btn-secondary profileBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src={profileIcon} alt="" />
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    ...
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Logout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* create ride form */}
      <div>
        <button
          onClick={handleButtonClick}
          className="open-button btn btn-primary "
        >
          Create Ride
        </button>
        {isPopoverOpen && (
          <div className="popover">
            <div class="modal-header m-1 ">
              <h5 class="modal-title fs-5">CREATE NEW RIDE</h5>
              <button
                type="button"
                class="btn-close"
                aria-label="Close"
                onClick={handleButtonClick}
              ></button>
            </div>
            <form>
              <label className="form-label">Author Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                value={newRide.name}
                onChange={handleInputChange}
              />
              <label className="form-label">Start</label>
              <input
                className="form-control"
                type="text"
                name="start"
                value={newRide.start}
                onChange={handleInputChange}
              />
              <label className="form-label">destination</label>
              <input
                className="form-control"
                type="text"
                name="destination"
                value={newRide.destination}
                onChange={handleInputChange}
              />
              <label className="form-label">route</label>
              <input
                className="form-control"
                type="text"
                name="route"
                value={newRide.route}
                onChange={handleInputChange}
              />
              <label className="form-label">startTime</label>
              <input
                className="form-control"
                type="text"
                name="startTime"
                value={newRide.startTime}
                onChange={handleInputChange}
              />
              <button
                onClick={handleAddEmployee}
                type="submit"
                className=" btn btn-success form-button"
              >
                Add Ride
              </button>
              <button
                onClick={handleButtonClick}
                className="btn btn-secondary form-button"
              >
                Close
              </button>
            </form>
          </div>
        )}
      </div>
{/* show all rides */}
<div className='container'>
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
                  <button className="btn btn-dark btn-sm ">Send</button>
                </td>
             </tr>
             ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Dashboard