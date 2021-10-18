import useAuth from './../../context/useAuth'
import React, {useState} from 'react';
import './Signup.css';
import {Link, useLocation, useHistory} from 'react-router-dom';

const Signup=() => {
    const {signInUsingGoogle, HandleRegistration, setEmail, email, setPassword, setPersonName, error, HandleResetPw}=useAuth();
  const [isLogin, setIsLogin]=useState(false);
  const location=useLocation();
    const HandleEmailChange=e => {
    setEmail(e.target.value);
    console.log(email);
  }
  const HandlePwChange=e => {
    setPassword(e.target.value);
    }
    const HandleNameChange=e => {
    setPersonName(e.target.value);
  }
  const toggleLogin=e => {
    setIsLogin(e.target.checked);
    console.log(isLogin);
  }

  const history=useHistory();
  console.log('came from ', location.state?.from);
  const redirect_uri=location.state?.from.pathname || '/home';
  const HandleGoogleLogin=() => {
    signInUsingGoogle().then(result => {
      history.push(redirect_uri);
    })
  }
    return (
        <div>
            <div className="signup m-5">
                <form onSubmit={HandleRegistration}>

        <h2 className='text-success text-center'>Please {isLogin? 'login':'Register'}</h2>
{!isLogin && <div className="row mb-3">
          <label htmlFor="inputAddress" className="form-label col-sm-2">Name</label>
          <div className="col-sm-10">
    <input type="text" onBlur={HandleNameChange} className="form-control" id="inputAddress" placeholder="Your Name"/></div>
  </div>}
        <div className="row mb-3">

    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onBlur={HandleEmailChange} type="email" className="form-control" id="inputEmail3" required/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
            <input onBlur={HandlePwChange} type="password" className="form-control" id="inputPassword3" required/>
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
          Already Registered Then <Link to='/login'>Log in</Link>
      </div>
    </div>
        </div>
        <div className="row mb-3 text-danger">{error}</div>
        <button type="submit" className="btn btn-primary">Register</button>
        <br />
        <button onClick={HandleResetPw} type="button" className="btn my-3 btn-outline-secondary btn-sm">Reset Password</button>
</form>


            </div>
            <button onClick={HandleGoogleLogin} className='btn btn-secondary'>Google Sign In</button>
        </div>
    );
};

export default Signup;