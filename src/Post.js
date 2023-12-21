import { Avatar } from "@mui/material";
import React from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { BiRepost } from "react-icons/bi";
import { IoMdSend } from "react-icons/io";
import RecommendRoundedIcon from '@mui/icons-material/RecommendRounded';
import "./Post.css";
// import { useNavigate } from "react-router-dom";

const Post = ({ Photo, Name, dispcription, Message, forwardedRef }) => {
  // const navigate= useNavigate();
  return (
    <div className="posts" ref={forwardedRef}>
      <div className="post__header">
        <div className="post__headerleft">
          <Avatar src={Photo} />
          <div className="post__profile__details">
            <h3>{Name}</h3>
            <p>{dispcription}</p>
          </div>
        </div>
        < FaEllipsisVertical/>
      </div>
      <div className="post__body">
        <p>{Message}</p>
      </div>
      <div className="post_react">
            <div className="post_left">
               <div className="post_left">
               <RecommendRoundedIcon style={{color: "#378FE9"}}/>
               
               <a href="/" className="post_like">Tauseef and 24 others</a>
               </div>
               
               <a href="/" className="post_right">12 comments</a>
            </div>
            
         </div>
      <hr style={{margin: "3px 0 5px 0"}}/>
      <div className="footer__iconoption">
        <div className="icon__body">
          <AiFillLike />
          <span>Like</span>
        </div>
        <div className="icon__body">
          <BiCommentDetail />
          <span>Comments</span>
        </div>
        <div className="icon__body">
          <BiRepost />
          <span>Repost</span>
        </div>
        <div className="icon__body">
          <IoMdSend />
          <span>Send</span>
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef((props, ref) => (
  <Post {...props} forwardedRef={ref} />
));
