import React, { useState } from 'react'
import Add from '../images/addAvatar.png';
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase';
import { storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const Register = () => {

  //error/no error indication state for 
  //try catch of auth process
  const[error,setError]=useState(false);

  //function to handle form inputs
  //It became async cause of auth process down below inside
  const handleSubmit=async (e)=>{

    e.preventDefault();
    //console.log(e.target[0].value);
    // console.log(e.target[1].value);
    // console.log(e.target[2].value);
    // console.log(e.target[3].value); //This is where I found c:\fakepath

    //varaibles to hold form input//
    const displayName=e.target[0].value; 
    const email=e.target[1].value;
    const password=e.target[2].value;
    const file=e.target[3].files[0];

    //To send email and password to firebase and do auth
    //createUserWithEmailAndPassword(auth which is  from "firebase/auth",
    //email is form value for auth process, 
    //password is form value for auth process);
    //It is asynchronous process
   
    //try catch for the auth process 
    try {

      const response=await createUserWithEmailAndPassword(auth, email, password);

      //sending file to fire storage
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      
      // Register three observers:
      uploadTask.on(

        (error) => {
          setError(true);//this will trigger error sentenc in JSX 
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
            await updateProfile(response.user,{ //this take 2 objs
              displayName:displayName,
              photoURL:downloadURL
            });
          });
        }

    );

    
    }catch (error) {
      setError(true);
    }

  }

  return (
    <div className='form-container'>
       <div className='form-wrapper'>
        <span className='logo'>React Chat</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='name' autoComplete='off' />
            <input type="email" placeholder='email' autoComplete='off'/>
            <input type="password" placeholder='password' autoComplete='off'/>
            <input style={{display:"none"}} type="file" id='file' />
            <label htmlFor="file">
                <img src={Add} alt="" />
                <span>Add an avater</span>
            </label>
            <button>Sign Up</button>
            {/* error/no error indication state form */}
            {/* try catch of auth process */}
            {error && <span>Something went wrong</span>}
        </form>
        <p>Do you have an account? Login</p>
       </div>
    </div>
  )
}

export default Register
