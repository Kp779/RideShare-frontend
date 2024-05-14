import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { userVerify } from "../../services/Apis";

const Otp = () => {
  const [otp, setOtp] = useState("");

  const location = useLocation();
  const [adminName,changeAdminName] = useState('');
  const navigate = useNavigate();

  const LoginUser = async (e) => {
    e.preventDefault();

    if (otp === "") {
      toast.error("Enter Your Otp")
    } else if (!/[^a-zA-Z]/.test(otp)) {
      toast.error("Enter Valid Otp")
    } else if (otp.length < 6) {
      toast.error("Otp Length minimum 6 digit")
    } else {
      const data = {
        otp, email: location.state
      }

      const response = await userVerify(data);
      if (response.status === 200) {
        localStorage.setItem("userdbtoken", response.data.userToken);
        // response.data.userToken ---- this is the jwt token!!!
        toast.success(response.data.message);
        setTimeout(() => {
          if ( location.state === 'poorkarkompal22@gmail.com') {
            changeAdminName("Kompal");
            navigate("/adminDashboard");
          } else if(location.state === 'harshpatware1505@gmail.com' ){
            changeAdminName("Harsh");
            navigate("/adminDashboard");
          }
           else {
            navigate("/dashboard",);
          }
        }, 4000);
      } else {
        toast.error(response.response.data.error)
      }
    }
  }
   return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Please Enter Your OTP Here</h1>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="otp">OTP</label>
              <input type="text" name="otp" id="" onChange={(e) => setOtp(e.target.value)} placeholder='Enter Your OTP' />
            </div>
            <button className='btn' onClick={LoginUser}>Submit</button>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  )
}

export default Otp;
