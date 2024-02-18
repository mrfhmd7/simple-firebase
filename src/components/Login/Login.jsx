import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.init';


const Login = () => {

     const [user, setUser] = useState(null);

     const auth = getAuth(app);
     const provider = new GoogleAuthProvider();

     const handleGoogleSignIn = () => {
          signInWithPopup(auth, provider)
               .then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
                    setUser(loggedUser);
               })
               .catch(error => {
                    console.log('error', error.message);
               });
     }

     return (
          <div>
               <button onClick={handleGoogleSignIn}>Google Login</button>
               {
                    user && 
                    <div>
                              <h2>User: {user.displayName}</h2>
                              <p>Email: {user.email}</p>
                              <img src={user.photoURL} alt="" />
                    </div>
               }
          </div>
     );
};

export default Login;