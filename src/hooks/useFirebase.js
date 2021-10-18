import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,createUserWithEmailAndPassword,  updateProfile,sendPasswordResetEmail } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from './../Firebase/firebase.initialize';

initializeAuthentication();

const useFirebase=() => {
    const [user, setUser]=useState({});
    const [isLoading, setIsLoading]=useState(true);
    const [personName, setPersonName]=useState(null);
    const [error, setError]=useState('');
    const [password, setPassword]=useState('');
    const [isLogin, setIsLogin]=useState(false);
    const [email, setEmail]=useState('');

    const auth=getAuth();

    const signInUsingGoogle=() => {
        setIsLoading(true);
        const googleProvider=new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
    };
    //sign up with email pw
     const setUserName=() => {
    const auth = getAuth();
    updateProfile(auth.currentUser, {
        displayName: personName
    })
  .then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});
  }
    const signInWithEmailAndPassword=(email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
  .then(result => {
    // Signed in
      const user=result.user;
      setError('');
        setUserName();
    // ...
  })
  .catch((error) => {
    setError(error.message)
    // ..
  });
    }
    //handle Log in
    const handleLogin=e => {
        e.preventDefault();
        processLogin(email, password)
    }
    // handle registration
    const handleRegistration=e => {
        e.preventDefault();
        console.log('sign uped');

        if(password.length<6) {
            setError('Password must be at least 6 character long');
            return;
        }
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password enter at least two uppercase number');
            return;
        }
        registerNewUser(email, password);
    }
    //process login & regiister
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
  const registerNewUser=(email, pw)=>{
    createUserWithEmailAndPassword(auth, email, pw)
      .then(result => {
        const user=result.user;
        console.log(user);
        setError('');
        setUserName();
      })
      .catch(error => {
      setError(error.message)
    })
  }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])
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

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,setUser,
email,setEmail,
isLoading,
personName,setPersonName,
error,setError,
isLogin,setIsLogin,
password,setPassword,
signInUsingGoogle,
setUserName,
signInWithEmailAndPassword,
        handleRegistration,
handleLogin,
handleResetPw,
logOut
    }
}

export default useFirebase;