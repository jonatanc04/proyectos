import './App.css';

import React, { useEffect, useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './comps/Nav';
import Login from './comps/Login';
import ProtectedRoutes from './comps/ProtectedRoutes';
import WeatherRow from './comps/WeatherRow2';
import axios from 'axios';
import Cities from './views/cities';

export default function App () {

  const [user, setUser] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [dayConditions, setDayConditions] = useState(null);

  const getDayConditions = useCallback(async (latitude, longitude) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0e667ddbcb64c26513245db14b041f67`
      );
      setDayConditions(res);
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);

  const setPosition = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }

  const getLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setPosition);
    } else {
      alert("Geolocation is not supported by this browser.")
    }
  }, []);

  const users = [
    {
      username: "jonatan",
      password: "1234"
    }
  ];

  const handleLogin = user => {
    setUser(user);
  }

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      getDayConditions(latitude, longitude);
    }
  }, [latitude, longitude, getDayConditions]);

  return (
    <Router>
      <div className="App">
        <Nav user={user} handleLogin={handleLogin}></Nav>
        <div className='body-container'>
        <Routes>
          <Route path='/' element={<WeatherRow text={"Day conditions"} dayConditions={dayConditions}/>} />
          <Route element={<ProtectedRoutes isLogged={user} redirectTo='/' />}>
            <Route path='/city' element={<Cities latitude={latitude} longitude={longitude} />}/>
          </Route>
          <Route path='/login' element={<Login users={users} handleLogin={handleLogin} />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}