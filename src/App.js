import Home from './pages/homepage'
import './styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Signup-login/login';
import Register from './pages/Signup-login/signup';
import Dashboard from './pages/dashboard/dashboard';
import Error from './pages/common/error';
import Otp from './pages/Signup-login/otp';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element= {<Home />}></Route>
        <Route path='/signup' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/user/otp' element={<Otp />} />
        <Route path='*' element={<Error />} />

      </Routes>
    </>
    // <div className="App">    
    //   <Home />
    // </div>
  );
}

export default App;
