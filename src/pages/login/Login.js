import useAuth from './../../context/useAuth'
import React, {useState} from 'react';
import './Login.css';
import {Link, useLocation, useHistory} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import {getAuth, signInWithEmailAndPassword} from '@firebase/auth';

const Login=() => {
    const {signInUsingGoogle,user, handleRegistration,HandleLogin, setEmail, email,setIsLoading, setPassword,password,HandleRegistration, error,setError, handleResetPw,logOut}=useAuth();
  const [isLogin, setIsLogin]=useState(false);
  // setIsLogin(true);
    const handleEmailChange=e => {
    setEmail(e.target.value);

  }
  const handlePwChange=e => {
    setPassword(e.target.value);
  }
  //redirect google login
  const location=useLocation();
  const history=useHistory();

  const redirect_uri=location.state?.from.pathname || '/home';
  const handleGoogleLogin=() => {
    signInUsingGoogle().then(result => {
      history.push(redirect_uri);
    }).finally(()=>setIsLoading(true))
  }
//handle login
  const HandleLoginCheck=()=>{
    HandleLogin().then(result => {
      history.push(redirect_uri)
    })
  }
    return (
        <div className='container login'>
            <div className="signup m-5">
                <form onSubmit={handleRegistration}>

        <h2 className='login-title text-center my-4'>Please login</h2>

        <div className="row mb-3">

    <label htmlFor="inputEmail3" className="login-email col-sm-2 col-form-label">Email: </label>
    <div className="col-sm-10">
      <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder='enter your email address (abc@def.com)' required/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="login-pw col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
            <input onBlur={handlePwChange} type="password" className="form-control" id="inputPassword3" placeholder='enter your password' required/>
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        Do not have an account ? <Link to='/signup'>Sign Up here</Link>
      </div>
    </div>
        </div>
        <div className="row mb-3 text-danger">{error}</div>
            {user.email? <button onClick={logOut} type="submit" className="btn btn-light">Log Out</button>:<button type='' onClick={HandleLogin} className="login-btn">Log in</button>}
            <small className='mx-5'>OR</small>
            <button onClick={handleGoogleLogin} className='google-btn me-3'>Google Sign In</button>
            <button onClick={handleResetPw} type="button" className="btn my-3  btn-sm">Reset Password</button>
</form>


            </div>

        </div>
    );
};

export default Login;