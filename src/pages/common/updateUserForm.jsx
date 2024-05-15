import React, { useEffect, useNavigate, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UpdateUserForm() {
  const { id } = useParams();
  const [fname, setfname] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  //   const navigate = useNavigate() pats ref

  useEffect(() => {
    // try {
    //   const response = axios.get(`http://localhost:4002/user/register/${id}`);
    //   setUser(response.data);
    //   console.log(response.data)
    // //   console.log("value set ?: ",user)
    // } catch (error) {
    //   console.error("Error fetching rides:", error);
    axios
      .get(`http://localhost:4002/user/register/${id}`)
      .then((result) => {
        console.log(result);
        setfname(result.data.fname);
        setEmail(result.data.email);
        setRole(result.data.role);
      })
      .catch((err) => console.log("error occured", err));
  }, []);

  const UpdateUser = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4002/user/update/${id}`, { fname, email, role })
      .then((result) => {
        console.log(result);
        // navigate('/adminDashboard') pats ref
      })
      .catch((err) => console.log("error occured", err));
  };

  return (
    <div
      style={{ justifyContent: "center", display: "flex", marginTop: "50px" }}
    >
      <form className="shadow rounded w-50 p-4 " onSubmit={UpdateUser}>
        <h2>Edit User</h2>

        <div class="mb-3">
          <label for="exampleInputName1" class="form-label">
            User Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputName1"
            value={fname}
            onChange={(e) => {
              setfname(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="role" class="form-label">
            Role
          </label>
          <input
            type="text"
            class="form-control"
            id="role"
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
        </div>
        <button type="submit" class="btn btn-outline-primary ">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateUserForm;
