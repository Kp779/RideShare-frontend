import Home from './pages/homepage'
import './styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Signup-login/login';
import Register from './pages/Signup-login/signup';
import Dashboard from './pages/User/dashboard';
import Error from './pages/common/error';
import Otp from './pages/Signup-login/otp';
import AdminDashboard from './pages/Admin/admindasboard';
import '../src/styles/tailwind.css';
import UpdateUserForm from './pages/common/updateUserForm';
import ConfirmRide from './pages/User/confirmRide';
import UpdateRideForm from "./pages/common/updateRideForm";
import { useState } from 'react';
function App() {
  
  // const randomtoken = "22f422e";
  const [randomToken, setRandomToken] = useState('');
  const [loggedUser, setLoggedUser] =useState('');

  const handleRandomToken = (token) => {
    setRandomToken(token);
    console.log("new token is:", token);
  };

  const getLoggedUser = (user) =>{
    setLoggedUser(user);
  
    console.log("logged user in app.js is:",user);
  }
  return (
    <>
    {console.log(loggedUser)}
      <Routes>
        <Route path='/' element= {<Home />}></Route>
        <Route path='/signup' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard onRandomTokenChange={handleRandomToken} loginUser={loggedUser} />} />
        <Route path='/admindashboard' element={<AdminDashboard />} />
        <Route path='/user/otp' element={<Otp  onGetLoggedUser = {getLoggedUser} />} />
        <Route path='/update/:id' element={<UpdateUserForm/>}/>
        <Route path='/updateRide/:id' element={<UpdateRideForm/>}/>

        <Route path={`/confirm-ride/:token`} element={<ConfirmRide />} />
        <Route path='*' element={<Error />} />

      </Routes>
    </>
    // <div className="App">    
    //   <Home />
    // </div>
  );
}

export default App;
