import React from 'react'
import styles from './Header.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { } from 'react-icons/pi'


const Header = () => {
    const [cookies, setCookies] = useCookies(["access_token"])
    const navigate = useNavigate()
    const logout = () => {
        setCookies("access_token", "")
        window.localStorage.removeItem("userID")
        navigate("/login")
    }
    return (
        <div className={styles.header}>
            <nav>
                <div className={styles.icon}>
                    <p>Tiffome</p>
                </div>
            </nav>
            <div className={styles.listNames}>
                <ul>
                    <Link to={'/'}><li>Home</li></Link>
                    <Link to={'/menu'}><li>Menu</li></Link>
                    <Link to={'/contact'}><li>Contact</li></Link>
                    <Link to={'/about'}><li>About Us</li></Link>

                    {/* <Link to={'/register'}><li>Register</li></Link> */}
                    {
                        !cookies.access_token ?
                            (
                                <ul>
                                    <li><Link to={'/login'}><li>Login/Register</li></Link></li>
                                </ul>)
                            :
                            (<button onClick={logout}>Logout</button>)
                    }
                </ul>
                <Link to={'/registerServices'}><button className={styles.btn}>Register Here</button></Link>
            </div>
        </div>
    )
}

export default Header