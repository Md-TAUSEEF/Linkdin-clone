import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Messageoption.css";
import { BsFillImageFill } from "react-icons/bs";
import { RxVideo } from "react-icons/rx";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { MdArticle } from "react-icons/md";
import { db } from "./Components/Firebase";
import FlipMove from "react-flip-move";
import Post from "./Post";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {NavLink } from 'react-router-dom';
import 'firebase/compat/firestore';
import { useSelector } from "react-redux";



export default function Messageoption() {
 
  const user = useSelector(state => state.user);
  const [posts, setPost] = useState([]);
  const [input, setInput] = useState();

  const submitfun =async (e) => {
    e.preventDefault();

    // Check if user and user.displayName are defined
    if (!user || !user.displayName) {
      console.error("User or user.displayName is undefined.");
      return;
    }

    // Check if input is defined
    if (typeof input === 'undefined') {
      console.error("Input is undefined.");
      return;
    }

    // Add a document to Firestore

    try{
     await db.collection("Posts").add({
      name: user.displayName,
      description: "This is my description",
      message: input,
      photoURL: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  }catch(error){
    console.error("error adding in document",error);
  }
  };

  useEffect(() => {
    // Subscribe to Firestore collection changes
    const unsubscribe = db.collection("Posts").orderBy("timestamp", "desc").onSnapshot(snapshot => {
      // Update posts state with the latest data
      setPost(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })));
    });

    // Unsubscribe when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="feed">
      <div className="feed__input">
        <div className="feed__form">
          <Avatar src={user.photoURL} />
          <form onSubmit={submitfun}>
            <input type="text" placeholder="Search here user" value={input} onChange={e => setInput(e.target.value)} />
            <input type="submit" />
          </form>
        </div>
        <div className="feed__option">
          <div className="option">
            <BsFillImageFill style={{ color: "#378FE9" }} />
            <span>Photo</span>
          </div>
          
              
            
          <div className="option" >
          <NavLink to="/youtube">
          <RxVideo style={{color:"red"}}/>
            <span>Video</span>
            </NavLink>
          </div>
          
          <div className="option">
          <NavLink to="/event">
          <BsFillCalendarEventFill style={{ color: "C37D17" }} />
            <span>Event</span>
           </NavLink>
          </div>
          
          <div className="option">
          <NavLink to="/article">
            <MdArticle style={{ color: "E06847" }} />
            <span>Write article</span>
            </NavLink>
          </div>
        </div>
      </div>

      <FlipMove>
      {
        posts.map(({ id, data: { name, description, message, photoURL } }) => {
          return <Post key={id} Name={name} dispcription={description} Message={message} Photo={photoURL} />
        })
      }
      </FlipMove>
    </div>
  );
}
