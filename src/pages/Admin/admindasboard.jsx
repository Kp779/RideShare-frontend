import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
// import Rides from "./rides";
// import Users from "./users";
 const AdminDashboard = () => {
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
  }, []);
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
          ''
            {/* <Link to={Users} >USERS</Link>
            <Link to={Rides} >RIDES</Link> */}
          </div>

          <div ml-auto flex>
           
            <h5 className="text-white">NAME OF ADMIN</h5>
          </div>
        </div>
      </nav>
      {/* <Rides/>
      <Users/> */}
    </>
  );
};

export default AdminDashboard;
