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

  }
  const HandlePwChange=e => {
    setPassword(e.target.value);
    }
    const HandleNameChange=e => {
    setPersonName(e.target.value);
  }


  const history=useHistory();

  const redirect_uri=location.state?.from.pathname || '/home';
  const HandleGoogleLogin=() => {
    signInUsingGoogle().then(result => {
      history.push(redirect_uri);
    })
  }
    return (
        <div className='container signup'>
            <div className=" m-5 ">
                <form onSubmit={HandleRegistration}>

        <h2 className='text-success text-center my-4 fw-bold'>Please Register Here</h2>
<div className="row mb-3 ">
          <label htmlFor="inputAddress" className="form-label col-sm-2 signup-text">Name</label>
          <div className="col-sm-10">
    <input type="text" onBlur={HandleNameChange} className="form-control" id="inputAddress" placeholder="Your Name"/></div>
  </div>
        <div className="row mb-3">

    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label signup-text">Email</label>
    <div className="col-sm-10">
      <input onBlur={HandleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder='your email' required/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label signup-text">Password</label>
    <div className="col-sm-10">
            <input onBlur={HandlePwChange} type="password" placeholder='password must be more than 6 character with 2 capital letters' className="form-control" id="inputPassword3" required/>
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
        <button type="submit" className="btn btn-primary me-3 mt-3">Register</button>
         <button onClick={HandleGoogleLogin} className='btn btn-danger me-3 mt-3' >Google Sign In</button>
        <button onClick={HandleResetPw} type="button" className="btn  btn-outline-secondary  me-3 mt-3">Reset Password</button>
</form>


            </div>

        </div>
    );
};

export default Signup;