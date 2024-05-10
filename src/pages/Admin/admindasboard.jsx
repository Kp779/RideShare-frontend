import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import axios from "axios";

// import Rides from "./rides";
// import Users from "./users";
 const AdminDashboard = () => {
  const [ride, setRides] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    if (token) {
      console.log("user valid");
    } else {
      navigate("*");
    }
  };

  useEffect(() => {
    userValid();
    fetchRides();
    fetchUsers();
  }, []);

  const fetchRides = async () => {
    try {
      const response = await axios.get("http://localhost:4002/user/ride");
      setRides(response.data);
    } catch (error) {
      console.error("Error fetching rides:", error);
    }
  }
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4002/user/register");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching rides:", error);
    }
  }
  const deleteRide = (id) => {
    const confirmed = window.confirm("Do you permanently want to delete the ride?");
    if (confirmed) {
      axios.delete(`http://localhost:4002/user/ride/${id}`).then(() => {
        setRides(ride.filter((ride) => ride._id !== id));
      }).catch((error) => {
        console.error("Error deleting ride:", error);
      });
    }
  };
  const deleteUser = (id) => {
    const confirmed = window.confirm("Do you permanently want to delete the ride?");
    if (confirmed) {
      axios.delete(`http://localhost:4002/user/register/${id}`).then(() => {
        setUsers(users.filter((user) => user._id !== id));
      }).catch((error) => {
        console.error("Error deleting ride:", error);
      });
    }
  };  


  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark ">
        <div className="container-fluid d-flex bd-highlight">
          <div className="w-100 bd-highlight">
            <img
              className="img-fluid"
              src={logo}
              alt=""
              style={{ maxHeight: "10rem", maxWidth: "10rem" }}
            />
          </div>
          <div>
            {/* <Link to={Users} >USERS</Link>
            <Link to={Rides} >RIDES</Link> */}
          </div>

          <div ml-auto flex>
            <h5 className="text-white">NAME OF ADMIN</h5>
          </div>
        </div>
      </nav>

      {/* Ride List */}
      <h2>Ride List</h2>
      <div className='container'>
        <table className="table">
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
            {ride.map((ride, i) => (
              <tr key={ride._id}>
                <td scope="row">{i + 1}</td>
                <td>{ride.name}</td>
                <td>{ride.start}</td>
                <td>{ride.destination}</td>
                <td>{ride.route}</td>
                <td>{ride.startTime}</td>
                <td>
                  <button className="btn btn-primary btn-sm" >Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => deleteRide(ride._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* User List */}
      <h2>User List</h2>
      <div className='container'>
        <table className="table">
          <thead>
            <tr className='table-dark'>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <td scope="row">{i + 1}</td>
                <td>{user.fname}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button className="btn btn-primary btn-sm" >
                    <Link to={`/update/${user._id}`} style={{color:'white'}}>Edit</Link></button>
                  <button className="btn btn-danger btn-sm" onClick={() => deleteUser(user._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  );
};

export default AdminDashboard;
