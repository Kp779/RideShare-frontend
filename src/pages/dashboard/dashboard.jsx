import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

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
  return (
    <h1>Dashboard</h1>
  )
}

export default Dashboard