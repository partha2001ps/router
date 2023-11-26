import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserRegister({  registerData, setRegisterData, mgs,setMgs }) {
    const navigate = useNavigate();
    setMgs('')
    const handleRegister = async (e) => {
      e.preventDefault();
  
      const data = {
        username: registerData.username,
        name: registerData.name,
        password: registerData.password
      };
  
      try {
        const res = await axios.post('https://password-reset-backend-gaqe.onrender.com/api/user', data);
        setMgs('')
        console.log('successfully created');
        setRegisterData({ username: '', name: '', password: '' });
        const info = res.data;
        setMgs(`successfully user created`);
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    };
  
  return (
    <div className='container'>
      <form onSubmit={handleRegister} className='inside'>
        <h2>Register Form:</h2>
      <div>
        <label>Email Id:</label><br />
        <input
          type="email"
          value={registerData.username}
          onChange={(e) => {
            setRegisterData({ ...registerData, username: e.target.value });
          }}
          required
        />
      </div>
      <div>
        <label>Full Name:</label><br />
        <input
          type="text"
          value={registerData.name}
          onChange={(e) => {
            setRegisterData({ ...registerData, name: e.target.value });
          }}
          required
        />
      </div>
      <div>
        <label>Password:</label><br />
        <input
          type="password"
          value={registerData.password}
          onChange={(e) => {
            setRegisterData({ ...registerData, password: e.target.value });
          }}
          required
        />
      </div>
      <button type="submit">
        REGISTER
              </button>
              <p>{mgs}</p>
        <div><Link to='/'>Login</Link></div>
    </form>
  </div>
)
}
export default UserRegister
