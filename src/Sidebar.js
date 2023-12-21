import React from 'react'
import './Sidebar.css';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
export default function Sidebar() {

   const user=useSelector(state=>state.user)
   console.log(user);
  return (
    <div className='sidebar'>
    <div className='profile'>
        <img src='https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww' alt='this profileimage'/>
        <div className='profile__sidebar'>
            <Avatar style={{width:50,height:50,margin:"0 auto", objectFit:"contain"}}  src={user.photoURL}/>
            <h4>{user.displayName}</h4>
            <p>{user.email}</p>
        </div>

        <div className='profile__stats '>
            <span>Profile viewers</span>
            <span className='set__number'>20</span>
        </div>
        
        <div className='profile__stats'>
            <span>Post impressions</span>
            <span className='set__number'>120</span>
        </div>
        <div className='profile__stats'>
            <a href="/"><b>Grow your network</b></a>
        </div>
    </div>

    <div className='sidebar__recent'>
        <h3 className='hash_head'>Recent</h3>
        <p className='hash'><span>#</span>Branding</p>
        <p className='hash'><span>#</span>marketing</p>
        <p className='hash'><span>#</span>Web Devloper</p>
        <p className='hash'><span>#</span>Programming</p>
        <p className='hash'><span>#</span>React.js</p>
        <p className='hash'><span>#</span>Javascript</p>
        <p className='hash'><span>#</span>DBMS</p>
    </div>
      
    </div>
  )
}
