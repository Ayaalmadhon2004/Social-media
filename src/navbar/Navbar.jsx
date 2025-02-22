import React, { useState } from "react";
import "./navbar.css";
import notPic from "../Assets/Images/07-DLMl_mTI.jpg";
import notPic2 from "../Assets/Images/02-person3.jpg"; 
import notPic3 from "../Assets/Images/01-person2.jpg"

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

  const notChange = () => {
    setNot(!not);
  };
  

  return (
    <div className="navbarContainer container">
      <div className="rightNav">
        <i className="fa-solid fa-headphones"></i>
        <input type="text" placeholder="search" />
      </div>
      <div className="centerNav">
        <ul className="list">
          <li>Demo</li>
          <li>Pages</li>
          <li>Account</li>
          <li>My Network</li>
        </ul>
      </div>
      <div className="leftNav icons">
        <div className="chatIcon">
          <i className="fa-regular fa-comment" onClick={toggleMessage}></i>
        </div>
        <div className="settingIcon">
          <i className="fa-solid fa-gear" onClick={toggleSetting} ></i>
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
              <div className="notification" key={item.id}>
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
        <div className="userIcon">
          <img src={notPic2} alt="userImg" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
