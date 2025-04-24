import React, { useState } from "react";
import "./navbar.css";
import notPic from "../Assets/Images/07-DLMl_mTI.jpg";
import notPic2 from "../Assets/Images/02-person3.jpg"; 
import notPic3 from "../Assets/Images/01-person2.jpg"
import mainPhoto from "../Assets/Images/01-person2.jpg";
import { Outlet, Link } from "react-router-dom";


const Noti = [
  {
      id: 1,
      img: notPic,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      time: "1 sec",
  },
  {
      id: 2,
      img: notPic2,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit, quibusdam voluptatibus cupiditate provident...",
      time: "20 sec",
  },
  {
      id: 3,
      img: notPic,
      description: "Lorem ipsum dolor, Optio adipisci rem deleniti rerum vero pariatur, quibusdam voluptatibus cupiditate provident...",
      time: "1 min",
  },
  {
      id: 4,
      img: notPic3,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio adipisci rem deleniti rerum vero pariatur",
      time: "1 Hour",
  },
];
const Navbar = ({ toggleSetting , toggleMessage }) => {
  const [not, setNot] = useState(false);
  const [img,setImg]=useState(false);

  const notChange = () => {
    setNot(!not);
    setImg(false);
  };

  return (
    <div className="navbarContainer container">
      <div className="rightNav">
        <h2><Link to="/header">Social Media</Link></h2>
      </div>
      <div className="centerNav">
        <ul className="list">
          <li><a href="">Demo</a></li>
          <li><a href="">Pages</a></li>
          <li className="account">
            <Link to="#">Account <i className="fa-solid fa-caret-down"></i></Link>
              <ul className="accountList">
               <li><Link>Create a page</Link></li>
               <li><Link to="/messages">Messages</Link></li>
               <li><Link to="/settings">Settings</Link></li>
               <li><Link to="/HelpCenter">Help Center</Link></li>
               <li><Link to="/profile">profile</Link></li>
              </ul>
          </li>
          <li><Link to="/profile">My Network</Link></li>
        </ul>
      </div>
      <div className="leftNav icons">
        <div className="chatIcon">
        <Link to="/messages"><i className="fa-regular fa-comment" onClick={toggleMessage}></i></Link>
        </div>
        <div className="settingIcon">
        <Link to="/settings"><i className="fa-solid fa-gear" onClick={toggleSetting} ></i></Link>
        </div>
        <div className="notiSection">
        <div className="notivicationIcon">
          <i className="fa-regular fa-bell" onClick={notChange}></i>
        </div>
        <div className={`notovication ${not ? "active" : ""}`}>
          <div className="headNot">
            <div className="sub-headNot">
              <h3>Notification</h3>
              <p>4 New</p>
            </div>
            <div>
              <button type="button" className="main-btn">
                See All
              </button>
            </div>
          </div>

          {Noti && Noti.length > 0 ? (
            Noti.map((item) => (
              <div className="notification-content" key={item.id}>
                <img src={item.img} alt="Notification" />
                <p>{item.description}</p>
                <span>{item.time}</span>
              </div>
            ))
          ) : (
            <p>No notifications available</p>
          )}

          <div className="bottomNot">
            <button className="blue-btn">See all incoming activities</button>
          </div>
          
        </div>
        </div>
        <div className="userIcon"
          onClick={() => {
            setImg(!img);
            setNot(false);
          }}
        >         
        <img src={mainPhoto} alt="userImg" />
          {
            img && (
              <div className="userSection">
                
                <div className="head-user">
                   <img src={mainPhoto} alt="userImg"/>
                  <h5>Lori lompson</h5>
                </div>

                <button className="blue-btn">View Profile</button>

                <ul className="details">
                  <li><i class="fa-solid fa-gear"></i>            Setting and privacy</li>
                  <li><i class="fa-solid fa-phone"></i>           Support</li>
                  <li><i class="fa-solid fa-book"></i>            Documentation</li>
                </ul>
                
                <button className="blue-btn"><i class="fa-solid fa-right-from-bracket"></i></button>

              </div>
            )
          }

        </div>
      </div>
    </div>
  );
};

export default Navbar;
