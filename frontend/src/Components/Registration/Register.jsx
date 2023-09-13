import React, { useState } from 'react'
import styles from './Register.module.css'
import axios from 'axios'
import { useCookies } from "react-cookie"
import { useNavigate } from 'react-router-dom'
import Header from '../LandingPage/Header/Header'


const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const onsubmit = async (e) => {
        e.preventDefault()

        try {
            if (username && password) {
                axios.post("http://localhost:3800/register", { username, password })
                alert("Registration Success")
                navigate("/login")
            } else {
                alert("All fields are required")
            }
        } catch (error) {
            console.log("error")
        }
    }
    return (
        <div>

            <Header />
            <div className={styles.registration}>
                <div className={styles.loginContainer}>
                    <div className={styles.login}>
                        <div className={styles.leftSection}>
                            <img className={styles.registrationImg} src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" alt="" />
                        </div>

                        <div className={styles.rightSection}>
                            <h1>Member Registration</h1>

                            <form action="" className={styles.form} onSubmit={onsubmit}>
                                <input
                                    type="text"
                                    placeholder='Username'
                                    className={styles.inputField}
                                    name='username'
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                />
                                {/* <input 
                        type="email" 
                        placeholder='Email' 
                        className={styles.inputField} 
                        /> */}

                                <input
                                    type="password"
                                    placeholder='Password'
                                    className={styles.inputField}
                                    name='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                {/* <input 
                        type="password" 
                        placeholder='Confirm Password'  
                        className={styles.inputField}
                        /> */}

                                <button className={styles.loginButton}>Login</button>
                            </form>

                            <a href="">Forgot UserName/password</a>

                            <p className={styles.createAccount}>Create Your Account</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register