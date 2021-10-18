import useAuth from './../../context/useAuth'
import React, {useState} from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const Signup=() => {
    const {signInUsingGoogle,user, handleRegistration, setEmail, email, setPassword, error,handleLogin, handleResetPw,logOut}=useAuth();
    const [isLogin, setIsLogin]=useState(false);
    const handleEmailChange=e => {
    setEmail(e.target.value);
    console.log(email);
  }
  const handlePwChange=e => {
    setPassword(e.target.value);
    }

    return (
        <div>
            <div className="signup m-5">
                <form onSubmit={handleRegistration}>

        <h2 className='text-success text-center'>Please login</h2>
{!isLogin && <div className="row mb-3">

  </div>}
        <div className="row mb-3">

    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
            <input onBlur={handlePwChange} type="password" className="form-control" id="inputPassword3" required/>
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
        {user.email?<button onClick={logOut} type="submit" className="btn btn-light">Log Out</button>:<button onClick={handleLogin} className="btn btn-light">Log in</button>}
        <br />
                    <button onClick={handleResetPw} type="button" className="btn my-3 btn-outline-secondary btn-sm">Reset Password</button>
                    {
                        user.email&&<h2>{user.displayName}</h2>
                    }
</form>


            </div>
            <button onClick={signInUsingGoogle} className='btn btn-secondary'>Google Sign In</button>
        </div>
    );
};

export default Signup;