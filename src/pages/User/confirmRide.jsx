import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { sendConfirmMail, sendRejectMail } from '../../services/Apis';

function ConfirmRide() {

  const loginUserInfo =JSON.parse(localStorage.getItem('loggedUser'));
  const userEmail = loginUserInfo.email;
  console.log("confirm ride side:",userEmail)

const callConfirmRide = async (userMail) =>{
  toast.success("confirmation email sent") ;
  const userMailDetails ={
    email : userMail
  }
  console.log("userMail:", userMail)
  const response = await sendConfirmMail(userMailDetails);
}

const callRejectRide = async (userMail) =>{
  toast.success("ride denied email sent") ;
  const userMailDetails ={
    email : userMail
  }
  console.log("userMail:", userMail)
  const response = await sendRejectMail(userMailDetails);
}

  return (
    <>
    <div className='container m-2 p-2'>
      Hello Author! <br />
      What is your decision?
    </div>
    <div className='m-2 p-2 d-flex ' >
      <div className='rounded shadow'>
      <button className="btn btn-success m-2" onClick={()=>callConfirmRide(userEmail)}>Confirm Ride Request</button>
      </div>
     <div className='rounded shadow'>
     <button className="btn btn-danger m-2" onClick={()=>callRejectRide(userEmail)}>Reject Ride Request</button>
     </div>
      
      <ToastContainer />
    </div>
    </>
    
  )
}

export default ConfirmRide
