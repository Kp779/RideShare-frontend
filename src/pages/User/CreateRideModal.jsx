import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const CreateRideModal = ({ loggedInUser, isOpen, closeModal,setisOpen }) => {
  const navigate = useNavigate();
  console.log("modal",loggedInUser?.fname)
  const [newRide, setNewRide] = useState({
    name: loggedInUser?.fname || '',
    start: "",
    destination: "",
    route: "",
    startTime: "",
  });
  const handleButtonClick = (e) => {
    e.preventDefault();
    setisOpen(!isOpen);
  };
  const inlineStyles = {
    backdrop: {
      zIndex: 2,
     backgroundColor: 'rgba(0, 0, 0, 0.75)',
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRide((prevRide) => ({ ...prevRide, [name]: value }));
  };

  const handleAddEmployee = (event) => {
    axios
      .post("http://localhost:4002/user/ride", newRide)
      .then((response) => {
        // Handle success
      })
      .catch((error) => {
        // Handle error
      });
    setisOpen(!isOpen);
    event.preventDefault();
  };

  return (
    <div>
         
        {isOpen && (
            <div  style={inlineStyles.backdrop} >   
            <div className='rounded bg-white shadow p-4 ' style={{width:"30%"}}>
             <div class="modal-header m-1 ">
              <h5 class="modal-title fs-5">CREATE NEW RIDE</h5>
              <button
                type="button"
                class="btn-close"
                aria-label="Close"
                onClick={closeModal}
              ></button>
            </div>
            
            <form>
              <label className="form-label">Author Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder={loggedInUser?.fname}
                value={newRide.name}
                onChange={handleInputChange}
                disabled
              />
              <label className="form-label">Start</label>
              <input
                className="form-control"
                type="text"
                name="start"
                value={newRide.start}
                onChange={handleInputChange}
              />
              <label className="form-label">Destination</label>
              <input
                className="form-control"
                type="text"
                name="destination"
                value={newRide.destination}
                onChange={handleInputChange}
              />
              <label className="form-label">Route</label>
              <input
                className="form-control"
                type="text"
                name="route"
                value={newRide.route}
                onChange={handleInputChange}
              />
              <label className="form-label">Start Time</label>
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
                className=" btn btn-success py-2 mt-4 form-button"
              >
                Add Ride
              </button>
             
            </form>
          </div>
          </div>
        )}
        
      </div>

  );
};

export default CreateRideModal;
