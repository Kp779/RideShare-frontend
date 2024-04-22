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
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element= {<Home />}></Route>
        <Route path='/signup' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/admindashboard' element={<AdminDashboard />} />
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
