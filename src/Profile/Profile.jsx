import React, { useState } from 'react'
import background from "../Assets/santa-maddalena-dolomites-rangesouth-tyrol.jpg";
import mainPhoto from "../Assets/Images/01-person2.jpg";
import sand from "../Assets/Images/02-R8aJwnbE.jpg";
import car from "../Assets/Images/04-BOvEXeUh.jpg";
import tree from "../Assets/Images/04-BOvEXeUh.jpg";
import user1 from "../Assets/Images/02-person3.jpg";

import "../Profile/profile.css";
import { Link, Outlet } from 'react-router';

const Profile = () => {

  const accounts=[
    {id:1,img:user1,name:"Frances Guerrero",desc:"50 mutual connections"},
    {id:2,img:user1,name:"Lori Ferguson",desc:"33 mutual connections"},
    {id:3,img:user1,name:"Samuel Bishop",desc:"21 mutual connections"},
    {id:4,img:user1,name:"Dennis Barrett",desc:"45 mutual connections"},
  ]

  const [clicked,setClicked]=useState('');

  const handleClick=(item)=>{
    setClicked(item);
  }
  return (
    <div className="container profile">
        <div className="left-main">
            <div className="header">
            <img  src={background} alt="background"/>
            <div className="content">
            <img  src={mainPhoto} alt="personal-img"/>
            <div className='user-name'> 
               <h3>Sam lanson <i class="fa-solid fa-circle-check"></i></h3>
               <span>250 connections</span>
            </div>
            <div className="editing-area">
              <button className="btn-red"><i class="fa-solid fa-pen"></i>     Edit profile</button>
              <i class="fa-solid fa-comment-dots"></i>
            </div>
            
            </div>
            </div>
            
            <div className="sections">
              <ul className="header-section">
                <li><Link to="/profile/about" className={clicked==="About"?"active":""} onClick={()=>handleClick("About")}>About</Link></li>
                <li><Link to="Connections" className={clicked==="Connections"?"active":""} onClick={()=>handleClick("Connections")}>Connections</Link></li>
                <li><Link to="Media" className={clicked==="Media"?"active":""} onClick={()=>handleClick("Media")}>Media</Link></li>
                <li><Link to="Events" className={clicked==="Events"?"active":""} onClick={()=>handleClick("Events")}>Events</Link></li>
                <li><Link to="Activity" className={clicked==="Activity"?"active":""} onClick={()=>handleClick("Activity")}>Activity</Link></li>
              </ul>

              <Outlet/>
            </div>
        </div>

        <div className="right-main">
          <div className="top-section">
          <h2>About</h2>
          <p>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy.</p>
            <ul className="details">
              <li> <i class="fa-solid fa-calendar"></i>  Born: <span>October 20, 1990</span></li>
              <li> <i class="fa-solid fa-heart"></i> Status:<span>Single</span></li>
              <li> <i class="fa-regular fa-envelope"></i> Email:<span>abc@xyz.com</span></li>
            </ul>
          </div>

          <div className="experience-section">
            <div className="header">
              <h2>Experience</h2>
              <i class="fa-solid fa-plus"></i>
            </div>

            <ul className="details">
              <li>
                <img src={sand} alt=""/>
                <div className="text">
                  <h4>Apple Computer, Inc.</h4>
                  <p>May 2015 – Present Employment Duration 8 mos</p>
                </div>
              </li>
              <li>
                <img src={car} alt=""/>
                <div className="text">
                  <h4>Apple Computer, Inc.</h4>
                  <p>May 2015 – Present Employment Duration 8 mos</p>
                </div>
              </li>
              <li>
                <img src={tree} alt=""/>
                <div className="text">
                  <h4>Apple Computer, Inc.</h4>
                  <p>May 2015 – Present Employment Duration 8 mos</p>
                </div>
              </li>
            </ul>

          </div>

          <div className="photos-section">
            <div className="header">
              <h2>Photos</h2>
              <div className="blue-btn">See all photo</div>
            </div>
            <div className="album">
              <div className="col1">
                <img src={sand} alt=""/>
                <img src={car} alt=""/>
              </div>
              <div className="col2">
                <img src={sand} alt=""/>
                <img src={tree} alt=""/>
                <img src={car} alt=""/>
              </div>
            </div>
          </div>

          <div className="friends">
            <div className="header">
              <h3>Friends  <span>230</span></h3>
              <div className="blue-btn">See all friends</div>
            </div>
            <ul className="accounts">
             <li>{
             accounts.map((account)=>(
              <div className="account" key={account.index}>
                <img src={account.img} alt=""/>
                <div className="text">
                  <h4>{account.name}</h4>
                  <p>{account.desc}</p>
                  <div className="btns">
                    <div className="blue-btn"><i class="fa-solid fa-message"></i></div>
                    <div className="btn-red"><i class="fa-solid fa-file-invoice"></i></div>
                  </div>
                </div>
              </div>
             ))
              }</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Profile
