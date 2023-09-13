import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Header from '../LandingPage/Header/Header';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false); // State to toggle between Login and Register forms
  const navigate = useNavigate();

  const [_, setCookies] = useCookies(['access_token']);

  const toggleForm = () => {
    setIsRegister(!isRegister); 
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        // Registration form
        const response = await axios.post('http://localhost:3800/register', { username, password });
        console.log(response)
        if (response.status === 200) {
          alert('Registration Success');
        }
      } else {
        // Login form
        const response = await axios.post('http://localhost:3800/login', { username, password });
        if (!response.data.token) {
          alert(response.data.message);
        } else {
          setCookies('access_token', response.data.token);
          window.localStorage.setItem('userID', response.data.userID);
          navigate('/');
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="loginContainer">
        <div className="login">
          <div className="leftSection">
            {/* Conditionally render the image based on the isRegister state */}
              <img className="registerImage"src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png" alt="" />
          </div>

          <div className="rightSection">
            <h1>{isRegister ? 'Member Registration' : 'Member Login'}</h1>

            <form action="" className="form" onSubmit={onsubmit}>
              <input
                type="text"
                placeholder="Username"
                className="inputField"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                name="username"
              />
              <input
                type="password"
                placeholder="Password"
                className="inputField"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
              />

              <button className="loginButton" type="submit">
                {isRegister ? 'Register' : 'Login'}
              </button>
            </form>

            {isRegister ? (
              <p>
                Already have an account?{' '}
                <span className="toggleLink" onClick={toggleForm}>
                  Login here
                </span>
              </p>
            ) : (
              <p>
                Don't have an account?{' '}
                <span className="toggleLink" onClick={toggleForm}>
                  Register here
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
