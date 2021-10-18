import React from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, sendEmailVerification, updateProfile, sendPasswordResetEmail} from "firebase/auth";
import initializeAuthentication from '../../Firebase/firebase.initialize';
import {useState} from 'react';
import {Link} from 'react-router-dom';
initializeAuthentication();
const auth=getAuth();

const Login2=() => {
      const [name, setName]=useState('');
  const [user, setUser]=useState({});
  const [email, setEmail]=useState('');
  const [error, setError]=useState('');
  const [isLogin, setIslogin]=useState(false);
    const [pw, setPw]=useState('');

    const HandleLogin=e => {
        e.preventDefault();
        processLogin(email, pw);
    }
    const processLogin=(email, pw) => {
    signInWithEmailAndPassword(auth, email, pw)
    .then(result => {
      const user=result.user;
      console.log(user);
      console.log('Logged In');
      setError('');
    })
    .catch(error => setError(error.message))
    }
    const handleEmailChange=e => {
    setEmail(e.target.value);
    console.log(email);
    }
    const handlePwChange=e => {
    setPw(e.target.value);
    }
    const toggleLogin=e => {
    setIslogin(true);
    }
    const verifyEmail=() => {
        const auth=getAuth();
        sendEmailVerification(auth.currentUser)
            .then(() =>
                result => {
                    console.log(result);
                }
            );
    }
        const handleResetPw=()=>{
    const auth = getAuth();
sendPasswordResetEmail(auth, email)
  .then(() => {
    console.log("An email sent to your email");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  }
    return (
        <div className="m-5">
      <form onSubmit={HandleLogin}>

        <h2 className='text-success text-center'>Please login</h2>
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

        <label>
          Do not have an account <Link to='/signup'>Sign Up</Link>
        </label>
      </div>
    </div>
        </div>
        <div className="row mb-3 text-danger">{error}</div>
        <button type="submit" className="btn btn-primary">Log In</button>
        <br />
</form>
      {
        user.name&&<p>{user.name}</p>

      }
    </div>
    );
};


export default Login2;
