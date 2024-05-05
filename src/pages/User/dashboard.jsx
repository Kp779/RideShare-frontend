import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../../styles/styles.module.css';
import logo from '../../assets/images/logo.png';
import { Link } from "react-router-dom";
import profileIcon from "../../assets/images/profileIcon.svg"
import CreateRideForm from './createRideForm';
const Dashboard = () => {

  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const navigate = useNavigate();

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

  const togglePopover = (e) => {
    e.preventDefault();
    setPopoverOpen(!isPopoverOpen);
  };

  
  return (
    <div >
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark ">
        <div className="container-fluid d-flex bd-highlight">
          <div className="w-100 bd-highlight">
            <img className="img-fluid" src={logo} alt="" style={{ maxHeight: '10rem', maxWidth: '10rem' }} />
            <button className="navbar-toggler flex-shrink-1 bd-highlight" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse flex-shrink-2 bd-highlight" id="navbarSupportedContent">
          
               <button className={styles.btn} style={{'borderRadius': '50%'}}> 
               <img src={profileIcon} alt="" /></button>
        
          </div>
        </div>
      </nav>
      <button
         onClick={togglePopover}
          className="open-button btn btn-primary "
        >
          Create Ride
        </button>

        {isPopoverOpen && (
          <CreateRideForm onClose={togglePopover}/>
        )}
      </div>
  )
}

export default Dashboard