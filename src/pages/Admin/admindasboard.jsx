import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import axios from "axios";

const AdminDashboard = () => {
  const [ride, setRides] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchQuery2, setSearchQuery2] = useState("");

  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    if (!token) {
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
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4002/user/register");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

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
    const confirmed = window.confirm("Do you permanently want to delete the user?");
    if (confirmed) {
      axios.delete(`http://localhost:4002/user/register/${id}`).then(() => {
        setUsers(users.filter((user) => user._id !== id));
      }).catch((error) => {
        console.error("Error deleting user:", error);
      });
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setSearchQuery2(e.target.value);
  };

  const filteredRides = ride.filter(
    (ride) =>
      ride.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ride.start.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ride.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ride.route.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ride.startTime.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredUsers = users.filter(
    (user) =>
      user.fname.toLowerCase().includes(searchQuery2.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery2.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery2.toLowerCase())
  );

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
          <div ml-auto flex>
            <h5 className="text-white">ADMIN DASHBOARD</h5>
          </div>
        </div>
      </nav>

      <div className="m-4" style={{ justifyContent: "center", display: "flex" }}>
        <div>
          <h3 style={{ justifyContent: "center", display: "flex" }}> Welcome To Admin Dashboard </h3>
          <p> This is the dashboard to maintain and manage the users and rides. It can also be used for managing roles. </p>
        </div>
      </div>

      {/* Ride List */}
      <div className='rounded shadow p-4 m-5'>
        <div className="d-flex">
          <h2>ALL RIDES LISTS</h2>{" "}
          <input
            className="mx-4 border px-2 mb-2 rounded shadow"
            type="text"
            placeholder="Search rides..."
            value={searchQuery}
            onChange={handleInputChange}
          />
        </div>
        <table className="table">
          <thead>
            <tr className='table-dark'>
              <th>ID</th>
              <th>Author Name</th>
              <th>Start</th>
              <th>Destination</th>
              <th>Route</th>
              <th>Start Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredRides.map((ride, i) => (
              <tr key={ride._id}>
                <td scope="row">{i + 1}</td>
                <td>{ride.name}</td>
                <td>{ride.start}</td>
                <td>{ride.destination}</td>
                <td>{ride.route}</td>
                <td>{ride.startTime}</td>
                <td>
                  <button className="btn btn-dark btn-sm mx-2">
                    <Link to={`/updateRide/${ride._id}`} style={{ color: 'white', textDecoration: "none" }}>Edit</Link>
                  </button>
                  <button className="btn btn-success btn-sm" onClick={() => deleteRide(ride._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* User List */}
      <div className='rounded shadow p-4 m-5'>
        <div className="d-flex">
          <h2>ALL USERS </h2>{" "}
          <input
            className="mx-4 border px-2 mb-2 rounded shadow"
            type="text"
            placeholder="Search users..."
            value={searchQuery2}
            onChange={handleInputChange2}
          />
        </div>
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
            {filteredUsers.map((user, i) => (
              <tr key={user._id}>
                <td scope="row">{i + 1}</td>
                <td>{user.fname}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button className="btn btn-dark btn-sm">
                    <Link to={`/update/${

user._id}`} style={{ color: 'white', textDecoration: "none" }}>Edit</Link>
</button>
<button className="btn btn-success btn-sm mx-2" onClick={() => deleteUser(user._id)}>Delete</button>
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