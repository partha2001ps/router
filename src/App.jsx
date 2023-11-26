import axios from 'axios';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLogin from './components/UserLogin';
import UserRegister from './components/UserRegister';
import ResetPassword from './components/ResetPassword';

function App() {
  const [registerData, setRegisterData] = useState({
    username: '',
    name: '',
    password: ''
  });
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [mgs, setMgs] = useState('');
  const [res_mgs, setRes_Mgs] = useState('');
 
  const handlePassword = async (e) => {
    setMgs('')
    e.preventDefault();
    const data = {
      username: loginData.username,
      password: loginData.password
    };

    try {
      const res = await axios.post('https://password-reset-backend-gaqe.onrender.com/api/login', data);
      const info = res.data;
      setMgs(`${info.message}`);
      console.log(info);
      setLoginData({ username: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<UserLogin setRes_Mgs={setRes_Mgs} res_mgs={res_mgs} setLoginData={setLoginData} loginData={loginData} handlePassword={handlePassword} mgs={mgs} setMgs={setMgs} />} />
          <Route path='/register' element={<UserRegister setRegisterData={setRegisterData}  registerData={registerData} mgs={mgs} setMgs={setMgs} />} />
          <Route path='/reset_password' element={<ResetPassword  setRes_Mgs={setRes_Mgs} res_mgs={res_mgs}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
