import React, { useState } from 'react'
import "./events.css"
import comedy from "../Assets/Images/01-RXr5nQxr.jpg"

const Events = () => {
  const[close,setClose]=useState(false);
  const handleClose=()=>{
    setClose(!close);
  }
  return (
    <div className="container events">
      <div className="header">
        <h3>Discover Events</h3>
        <div className="blue-btn"><i class="fa-solid fa-plus"></i>  Create events</div>
      </div>
      <div className={`green-style ${close?"active":""}`} >
        <p><span>Upcoming event:</span> The learning conference on Sep 19 2024</p>
        <button className='green-btn'>View event</button>
        <i class="fa-solid fa-xmark" onClick={handleClose}></i>
      </div>
      <div className="comedy-event">
        <img src={comedy} alt="comedy"/>
        <div className="details">
          <h3>Comedy on the green</h3>
          <div className="sub-details">
            <span><i class="fa-solid fa-calendar-days"></i>Mon, Sep 25, 2020 at 9:30 AM</span>
            <span><i class="fa-solid fa-location-dot"></i>San francisc</span>
            <span><i class="fa-solid fa-person"></i>77 going</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
