import React from "react";

import "./Header.css";
import linkedin from "./Image/linkedin.png";
import { BiSearch } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdBusinessCenter } from "react-icons/md";
import { BiSolidMessageDetail } from "react-icons/bi";
import { Avatar } from "@mui/material";
import firebase from 'firebase/compat/app';
import { NavLink } from "react-router-dom";

// import { MdArrowDropDown } from "react-icons/md";

import { IoMdNotifications } from "react-icons/io";
import Headeroption from "./Headeroption";
import { useSelector } from "react-redux";




export default function Header() {

  const user = useSelector(state => state.user)
  console.log(user);

  return (
    <div className="header">
      <div className="header__left">
        <div className="header__leftimg">
          <img src={linkedin} alt="LinkedIn logo" />
        </div>
        <div className="header__leftsearch">
          <BiSearch />
          <input type="text" placeholder="Search here" />
        </div>
      </div>

      <div className="header__right">
       <NavLink to="/"><Headeroption Icon={<AiFillHome />} title=" Home" /></NavLink>
       <NavLink to="/"><Headeroption Icon={<BsFillPeopleFill />} title=" People" /></NavLink>
       <NavLink to="/event"><Headeroption Icon={<MdBusinessCenter />} title=" Job" /></NavLink>
        <NavLink to="/"><Headeroption Icon={<BiSolidMessageDetail />} title="Message" /></NavLink>
        <NavLink to="/"><Headeroption Icon={<IoMdNotifications />} title=" Notification" /></NavLink>
        <NavLink to="/"><Headeroption Icon={<Avatar src={user.photoURL} onClick={e => firebase.auth().signOut()} />} title={user.displayName} /></NavLink>



      </div>
    </div>
  );
}
