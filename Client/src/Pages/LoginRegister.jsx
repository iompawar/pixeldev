import React, { createContext, useState } from 'react'
import './LoginRegister.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const LoginRegister = () => {
    let [userExist, setUserExist] =  useState(true)
    let Navigate = useNavigate();

// ========================================= Login Form comp ============================
const LoginForm = () => {
    let [loginData, setLoginData] = useState({})
    let [loginErr, setLoginErr] = useState(null);

    const getLoginFormValue = (e) => {
        setLoginData({...loginData, [e.target.name]:e.target.value});
    }

    const loginUser = (e) => {
        e.preventDefault();

        axios.post("http://localhost:5000/backend/login", loginData).then((res)=>{
            if(res.data === false){
                setLoginErr("User not found please")
            }
            else if(res.data.success === true)  //if user is successfully loged in
            {
                let {username} = res.data.user
                Navigate(`/?user=${username}`);
            }
            else{
                setLoginErr(res.data)
            }
        })
    }
    return <>
        <form action="" method='post'>
            <div className='form-heading'>
                <h1>Login</h1>
            </div>
            <div>
                <label htmlFor="email">Email:
                    <input className='' type="email" name='email' placeholder='enter email here...' onChange={getLoginFormValue}/>
                </label>
            </div>

            <div>
                <label htmlFor="username">Username:
                    <input type="text" name='username' placeholder='enter username here...' onChange={getLoginFormValue}/>
                </label>
            </div>

            <div>
                <label htmlFor="password">Password:
                    <input type="text" name='password' placeholder='enter password here...' onChange={getLoginFormValue}/>
                </label>
            </div>

            <div> 
                <button className="btn btn-success" type='submit' onClick={loginUser}>
                Login
                </button> 
            </div>

            <div className='donkey'>
                <p className='login-err-txt'>{loginErr}</p>
                {(loginErr !== null) ? <a className='gotoregister' onClick={()=> setUserExist(false)}>Register</a> : null}
            </div>
        </form>
    </>
}
    // Register Form comp
const RegisterForm = () => {
    let [registerData, setRegisterData] = useState({});
    let [alreadyExistErr, setAlreadyExistErr] = useState(null);
    const getRegisterFromData = (e) => {
        setRegisterData({...registerData, [e.target.name]:e.target.value});
    }

    const registerUser = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/backend/register", registerData).then((res)=>{
            setAlreadyExistErr(res.data);
        }).catch((err)=>{
            console.log("err in register", err.message);
        })
    }
     return <>
        <form action="" method='post' onSubmit={registerUser}>
            <div className='form-heading'>
                <h1>Register</h1>
            </div>
            <div>
                <label htmlFor="email">Email:
                    <input className='' type="text" name='email' placeholder='enter email here...' onChange={getRegisterFromData}/>
                </label>
            </div>

            <div>
                <label htmlFor="username">Username:
                    <input type="text" name='username' placeholder='enter username here...' onChange={getRegisterFromData}/>
                </label>
            </div>

            <div>
                <label htmlFor="password">Password:
                    <input type="text" name='password' placeholder='enter password here...' onChange={getRegisterFromData}/>
                </label>
            </div>

            <div>
                <button className='btn btn-success' type='submit'>
                    Register
                </button>
            </div>

            <div>
                <p className='errorTxt'>{alreadyExistErr}</p> 
                {(alreadyExistErr === true) ? <button className='btn btn-success p-2' onClick={() => {setUserExist(true)}}>Login</button> : null}
            </div>
        </form>
    </>
}
    return (
        <div className='loginRegister-comp'>
            {(userExist) ? <LoginForm/> : <RegisterForm/>}
        </div>
    )
}

export default LoginRegister