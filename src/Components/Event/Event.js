import React from 'react';
import "./Event.css";
import Header from '../Header';
import logo from "../Image/linkedin.png";

const Event = () => {
    return (
        <div className='container3'>
            <Header/>
            <ol className="list list-group">
                <h3>Recommended for you</h3>
                <p>Based on your profile and search history</p>
               
                <li className="event list-group-item d-flex justify-content-between align-items-start">
                    <img className='event-image' src={logo} alt='this is event image'/>
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Frontend Developer (All Levels)</div>
                        Outscal
                        <p>India (Remote)</p>
                        <p>6 weeks ago</p>
                    </div>
                    <span className="badge rounded-pill">Easy Apply</span>
                </li>
                <li className="event list-group-item d-flex justify-content-between align-items-start">
                <img className='event-image' src={logo} alt='this is image'/>
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">ReactJS Developer</div>
                        Techno Softwares
                        <p>India (Remote)</p>
                        <p>6 weeks ago</p>
                    </div>
                    
                    <span className="badge rounded-pill">Easy Apply</span>
                </li>
                
                <li className="event list-group-item d-flex justify-content-between align-items-start">
                <img className='event-image' src={logo} alt='this is image'/>
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Frontend Developer</div>
                        Braincuber Technologies
                        <p>India (Remote)</p>
                        <p>6 weeks ago</p>
                    </div>
                    <span className="badge rounded-pill">Easy Apply</span>
                </li>
            </ol>
        </div>
    );
};

export default Event;
