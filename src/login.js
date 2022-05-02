import React, { useState } from 'react'
import styles from "./login.module.css";
import clsx from 'clsx';
import axios from 'axios';
import appConfig from './app.config';

export default function Login() {
    const [db, setdb] = useState("not connected");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const loginUser = () => {
        axios.post(appConfig.baseUrl + appConfig.isUserUrl, {
            username: username,
            password: password
        }).then((res) => {
            if (res.data.isUser) {
                // setdb("connecting-" + username + " " + password + "logged IN"+ JSON.stringify(res.data))
                setdb("logged IN");
            }else {
                // setdb("connecting-" + username + " " + password + "Wrong username/password" + JSON.stringify(res.data))
                setdb("Wrong username/password");
            }
        }
        )
    }
    
    
  return (
    <div className="container">
        <div>database: {db}</div>
        <div className="row justify-content-center align-items-center" style={{height: "100vh"}}>
            <div className='col-4 border py-5 px-4'>
                <div className='fs-1 fw-normal'>Welcome to movies</div>
                <div className='fs-6 text-secondary'>Welcome back, please enter your details</div>
                <div className='row mt-3'>
                    <div>
                        <label for="1"
                            className='fs-6'
                        >Email address</label>
                        <input 
                        className='my-2 px-2 py-2 border rounded'
                        type="email" id="1" placeholder='Enter your password'
                        onChange={(e) => setUserName(e.target.value.toString())}
                        ></input>
                    </div>
                    <div>
                        <label for="2"
                        className='fs-6'
                        >Password</label>
                        <input 
                        className='my-2 px-2 py-2 border rounded'
                        type="password" id="2"
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value.toString())}
                        ></input>
                    </div>
                </div>
                <div className='row p-0 justify-content-end'>
                    <div className={clsx('col-4 p-0 justify-content-end text-primary', styles.forgot)}
                    onClick={() => setdb("not connected")}
                    >Forgot password?</div>
                </div>
                <div className="row px-3 my-2">
                    <div className={clsx("row justify-content-center border m-0 p-0 py-2 rounded bg-primary text-white", styles.login)}
                
                    onClick={() => loginUser()}
                    >Sign in</div>
                </div>
            </div>
        </div>
    </div>
  )
}
