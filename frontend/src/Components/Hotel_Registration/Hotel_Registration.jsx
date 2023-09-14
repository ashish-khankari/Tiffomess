import React, { useState } from 'react'
import Header from '../LandingPage/Header/Header'
import { useNavigate } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import  Select  from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import axios from 'axios'
import styles from './Hotel_Registration.module.css'

const HotelRegistration = () => {

  const [name, setName] = useState("")
  // const [pin, setPin] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [hotelName, setHotelName] = useState("")
  const [location, setLocation] = useState("")
  const [state, setState] = useState("")
  const [district, setDistrict] = useState("")
  const [pin, setPin] = useState("")
  const [image, setImage] = useState("")
  const [tiffinRate, setTiffinRate] = useState("")
  const [tiffinperDay, setTiffinPerDay] = useState("")
  const [tiffinperMonth, setTiffinPerMonth] = useState("")
  const [foodType, setFoodType] = useState("")
  const [holiday, setHoliday] = useState("")
  const [description, setDescription] = useState("")

  const [error, setError] = useState("")
  const navigate = useNavigate()

  function submit(e) {
    e.preventDefault()
    
    // || !email || !mobile|| !hotelName || !location|| !state|| !district|| !pin|| !image|| !tiffinRate|| !tiffinRate|| !tiffinperDay|| !tiffinperMonth || !foodType || !holiday || !description
    if (!name) {
      setError("Please Add full Name")
    } else {
      setError("")
    }
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Enter Correct Email");
    } else {
      setError("");
    }

    if (!hotelName) {
      setError("Please Add Name of Hotel")
    } else {
      setError("")
    }
    if (mobile.length != 10) {
      setError("Mobile Number should be of 10 digits")
    } else {
      setError("")
    }
    if (!location) {
      setError("Please Add full Name")
    } else {
      setError("")
    }
    if (!state) {
      setError("Please Add full Name")
    } else {
      setError("")
    }
    if (!district) {
      setError("Please Add full Name")
    } else {
      setError("")
    }
    if (!pin) {
      setError("Please Add full Name")
    } else {
      setError("")
    }
    if (!image) {
      setError("Please Add full Name")
    } else {
      setError("")
    }
    if (!tiffinRate) {
      setError("Please Seclect a value")
    } else {
      setError("")
    }
    if (!tiffinperDay) {
      setError("Please Seclect a value")
    } else {
      setError("")
    }
    if (!tiffinperMonth) {
      setError("Please Seclect a value")
    } else {
      setError("")
    }
    if (!foodType) {
      setError("Please Seclect a value")
    } else {
      setError("")
    }

    if (!holiday) {
      setError("Please Seclect a value")
    } else {
      setError("")
    }
    if (!description) {
      setError("Please Seclect a value")
    } else {
      setError("")
    }

    if(name, email, mobile, hotelName, location, district, state, pin, image, tiffinRate, tiffinperDay, tiffinperMonth, foodType, holiday, description ){
      axios.post("http://localhost:3000/hotelForm", { name, email, mobile, hotelName, location, district, state, pin, image, tiffinRate, tiffinperDay, tiffinperMonth, foodType, holiday, description })
      .then(result => console.log(result))
      .catch(err => console.log(err))
    navigate('/showUsers')
    }
  }

  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={styles.container}>
        <div className={styles.title}>
          <p>Register Your Services</p>
        </div>
        <div className={styles.Section}>
          <div className={styles.rightSection}>
            <form action="" onSubmit={submit}>
              <input
                type="text"
                placeholder='Enter Your Name*'
                className={styles.inputField}
                name='name'
                onChange={(e) => setName(e.target.value)}
                value={name}

              />
              <p className={styles.errorMessage}>{error}</p>
              <input
                type="email"
                placeholder='Enter Email*'
                className={styles.inputField}
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <p className={styles.errorMessage}>{error}</p>

              <input
                type="number"
                placeholder='Enter Mobile Number*'
                className={styles.inputField}
                name='mobile'
                onChange={(e) => setMobile(e.target.value)}
                value={mobile}
              />
              <p className={styles.errorMessage}>{error}</p>
              <input
                type="text"
                placeholder='Add Hotel/Mess/Restaurant Name*'
                className={styles.inputField}
                name='hotelName'
                onChange={(e) => setHotelName(e.target.value)}
                value={hotelName}

              />
              <p className={styles.errorMessage}>{error}</p>
              <input
                type="text"
                placeholder='Add Location*'
                className={styles.inputField}
                name='location'
                onChange={(e) => setLocation(e.target.value)}
                value={location}
              />
              <p className={styles.errorMessage}>{error}</p>
              <input
                type="text"
                placeholder='Add District*'
                className={styles.inputField}
                name='district'
                onChange={(e) => setDistrict(e.target.value)}
                value={district}
              />
              <p className={styles.errorMessage}>{error}</p>
              <input
                type="text"
                placeholder='Add State*'
                className={styles.inputField}
                name='state'
                onChange={(e) => setState(e.target.value)}
                value={state}
              />
              <p className={styles.errorMessage}>{error}</p>
              <input type="number"
                placeholder='Enter Pin'
                name='pin'
                onChange={(e) => setPin(e.target.value)}
                value={pin}
                className={styles.inputField}
              />
              <p className={styles.errorMessage}>{error}</p>
              <input type="text"
                placeholder='Add Image'
                name='pin'
                onChange={(e) => setImage(e.target.value)}
                value={image}
                className={styles.inputField}
              />
              <p className={styles.errorMessage}>{error}</p>
              {/* ********** */}

              <input
                type="number"
                placeholder='Enter Tiffin Rate*'
                className={styles.inputField}
                name='tiffinRate'
                onChange={(e) => setTiffinRate(e.target.value)}
                value={tiffinRate}
              />
              <p className={styles.errorMessage}>{error}</p>
              <FormControl>
                <InputLabel id="demo-simple-select-label">Enter Tiffin Rate/Day</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="Age"
                  className={styles.custominputField}
                  name='tiffinperday'
                  onChange={(e) => setTiffinPerDay(e.target.value)}
                  value={tiffinperDay}
                >
                  <MenuItem value={10}>40-50</MenuItem>
                  <MenuItem value={20}>50-60</MenuItem>
                  <MenuItem value={30}>60-70</MenuItem>

                </Select>
              </FormControl>
              <p className={styles.errorMessage}>{error}</p>
              <FormControl>
                <InputLabel id="demo-simple-select-label">Enter Tiffin Rate/Month</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="Age"
                  className={styles.custominputField}
                  name='tiffinperMonth'
                  onChange={(e) => setTiffinPerMonth(e.target.value)}
                  value={tiffinperMonth}
                >
                  <MenuItem value={10}>2400</MenuItem>
                  <MenuItem value={20}>3000</MenuItem>
                  <MenuItem value={30}>4000</MenuItem>

                </Select>
              </FormControl>
              <p className={styles.errorMessage}>{error}</p>
              <FormControl>
                <InputLabel id="demo-simple-select-label">Food Type</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="Age"
                  className={styles.custominputField}
                  name='foodType'
                  onChange={(e) => setFoodType(e.target.value)}
                  value={foodType}
                >
                  <MenuItem value={10}>Vegeterian</MenuItem>
                  <MenuItem value={20}>Non-Vegeterian</MenuItem>
                  <MenuItem value={30}>Special Order</MenuItem>

                </Select>
              </FormControl>
              <p className={styles.errorMessage}>{error}</p>
              <FormControl>
                <InputLabel id="demo-simple-select-label">Enter Holiday</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="Age"
                  className={styles.custominputField}
                  name='holiday'
                  onChange={(e) => setHoliday(e.target.value)}
                  value={holiday}
                >
                  <MenuItem value={10}>Monday</MenuItem>
                  <MenuItem value={20}>Tuesday</MenuItem>
                  <MenuItem value={30}>Wednesday</MenuItem>
                  <MenuItem value={30}>Thursday</MenuItem>
                  <MenuItem value={30}>Friday</MenuItem>
                  <MenuItem value={30}>Saturday</MenuItem>
                  <MenuItem value={30}>Sunday</MenuItem>
                </Select>
              </FormControl>
              <p className={styles.errorMessage}>{error}</p>
              <textarea
                name="description"
                id=""
                cols="10"
                rows="10"
                placeholder='Add Description'
                className={styles.inputFieldTextArea}
                onChange={(e) => setDescription(e.target.value)}
                value={description}

              ></textarea>
              <p className={styles.errorMessage}>{error}</p>
              <button className={styles.loginButton}>Add Services</button>            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HotelRegistration

