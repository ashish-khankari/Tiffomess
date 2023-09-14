import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './ShowUsers.module.css'; // Import your CSS file
import Header from '../LandingPage/Header/Header';

export default function ShowUsers() {
    const [myData, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3800")
            .then(result => setData(result.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className={styles.mainContainer}>
            <Header/>
            <div className={styles.container}>
                {myData.map((user) => (
                    <div className={styles.card} key={user._id}>
                        <div className={styles.cardBody}>
                            <div className={styles.leftPart}>
                                <img src={user.image} className={styles.userImage} />
                            </div>
                            <div className={styles.rightSection}>
                                <div className={styles.names}>
                                    <h1 className={styles.username}>{user.hotelName}</h1>
                                    <div>
                                        <p className={styles.location}>{user.location + ", " + user.district + ", " + user.state}</p>
                                    </div>
                                </div>
                                <div className={styles.details}>
                                    <p> <span>Owner:</span>  {user.name}</p>
                                    <p><span>Mobile:</span> {user.mobile}</p>
                                    <p><span>Email:</span> {user.email}</p>
                                    <p><span>Pin:</span> {user.pin}</p>
                                    <p><span>Tiffin Rate/Month:</span> {user.tiffinRate}</p>
                                    {/* <p><span>Single Tiffin:</span> {user.tiffinperDay}</p>
                                    <p><span>Food Type:</span> {user.foodType}</p>
                                    <p><span>Holiday:</span> {user.holiday}</p> */}
                                    <p><span>Description:</span> {user.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}