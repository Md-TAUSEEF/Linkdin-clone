// Login.js
import React, { useState } from 'react';
import './Login.css';
import { auth } from './Components/Firebase';
import { useDispatch } from 'react-redux';
import { loginuser } from './Components/reduxcomponenet/Linkdinreducer';

export default function Login() {
  const [Signup, setSignup] = useState(false);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();

    if (!name || !photoURL || !email || !password) {
      return alert("Please fill all the details");
    }

    auth.createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: photoURL,
        }).then(() => {
          dispatch(loginuser({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            photoURL: photoURL,
            displayName: name,
          }));
        });
      })
      .catch(error => alert(error));

    // Reset the form fields
    setName("");
    setPhotoURL("");
    setEmail("");
    setPassword("");
  };

  const SignIn = ((e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("please enter email and password ");
    }
    auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch(loginuser({
          email: user.email,
          uid: user.uid,
          photoURL: user.photoURL,
          displayName: user.displayName,
        }));



      }).catch(error => alert(error));

  })

  return (
    <>
      <div className='loginscreen'>
        <img src='https://freelogopng.com/images/all_img/1656994565linkedin-png.png' alt="LinkedIn Logo" />

        {Signup ? (
          <form onSubmit={register}>
            <input type='text' placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type='text' placeholder='Profile picture url' value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} />
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type='submit' value="Sign Up" />
            <h4> Already a member? <span onClick={() => setSignup(false)}>Login Here</span></h4>
          </form>
        ) : (
          <form onClick={SignIn}>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type='submit' value="Sign In" />
            <h4> Not a member? <span onClick={() => setSignup(true)}>Register Here</span></h4>
          </form>
        )}

      </div>
    </>
  );
}
