import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";
const initializeAuthentication=() => {
    initializeApp(firebaseConfig);
};

export default initializeAuthentication;


//steps for authentication
/*
---------------------------
initial setup
1.firebase: Create Project
2. Create web app
3. get configuration
4. initialize firebase
5. enable auth method
-------------------------------
<Step-2></Step-2>
1. Create login route
2. Create login register component
3. Create Route for login and register
---------------------------------------
step3: Set Auth system

1. set up sign in method
2. setup sign out method
3. user state
4. special observer on auth state change
5. return necessary methods and states from usefirebase
-------------------------------------------------
step 4: Create auth context hook
>>create a auth context
>>create context provider
>>set context provider value
>>use auth provieder
>>create useAuth Hook
-----------------------------------------------------
step 5:
1. create private route
2.set private route
--------------------------------------------------------
step 6 Redirect after login
>>after login redirect user to their desired destination
>>
>>
>>
*/