import React from "react";
import "./Rightside.css";
import { FaInfoCircle } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Rightside() {
  return (
    <div className="rightside">

      <div className="rightside__top">
        <div className="rightside__head">
          <div className="rightside__mid">
            <h3>Linkedin News </h3>
            <FaInfoCircle />
          </div>

          <div className="rightside__mid2">
            <ul className="rightoption__side">
              <li>
                <h4>Slaying job  Search Fees</h4>
                <p>6d ago * 4,55 readers</p>
              </li>
              <li>
                <h4>Slaying job  Search Fees</h4>
                <p>6d ago * 4,55 readers</p>
              </li>
              <li>
                <h4>Slaying job  Search Fees</h4>
                <p>6d ago * 4,55 readers</p>
              </li>
              <li>
                <h4>Slaying job  Search Fees</h4>
                <p>6d ago * 4,55 readers</p>
              </li>
              <li>
                <h4>Slaying job  Search Fees</h4>
                <p>6d ago * 4,55 readers</p>
              </li>
              <li>
                <h4>Slaying job  Search Fees</h4>
                <p>6d ago * 4,55 readers</p>
              </li>
            </ul>

          </div>
        </div>
      </div>
      <div className="rightside__bottom">
        <div className="rightside__head">
          <div className="rightside__mid">
            <h3>Contact </h3>
            <IoIosContact />
          </div>

          <div className="rightside__mid2">
            <div className="row my-4">
            <div className="col contact_info">
              <a href="https://www.linkedin.com/in/md-tauseef/"><IoLogoLinkedin style={{color: "#0077B5"}}/>
              linkedin</a>
            </div>
            <div className="col contact_info">
            <a href="https://github.com/md-tauseef"><FaGithub style={{color: "black"}}/>
              Github</a>
            </div>
            </div>
            <div className="row my-3">
            <div className="col contact_info">
            <a href="https://www.youtube.com/@DSKtechnology1"><FaYoutube style={{color: "red"}}/>
              Youtube</a>
            </div>
            <div className="col contact_info">
            <a href="mailto: mdtauseefkhan@gmail.com"><MdEmail style={{color: "green"}}/>
              Email</a>
            </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
