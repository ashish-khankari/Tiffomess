import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import About from './Components/AboutUs/About';
import Menu from './Components/MenuSection/MenuSection';
import Home from './Components/Home/Home';
import { useCookies } from 'react-cookie';
import Login from './Components/LoginForm/Login';
import HotelRegistration from './Components/Hotel_Registration/Hotel_Registration';
import ShowUsers from './Components/ShowUsers/ShowUsers';

export default function App() {
  const [cookies] = useCookies(['access_token']);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.access_token) {
      // navigate("/register");
      navigate("/login");
    }
  }, [cookies.access_token, navigate]);

  return (
    <div className='App'>
      <Routes>
        {cookies.access_token ? (
          <>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/registerServices' element={<HotelRegistration/>} />
            <Route path='/showUsers' element={<ShowUsers/>} />
          </>
        ) : null}
        <Route path='/login' element={<Login/>}/>
        {/* <Route path='/register' element={<Register />} /> */}
      </Routes>
    </div>
  );
}
