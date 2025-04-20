import React from 'react'
import "./media.css"
import photo1 from "../Assets/Images/image1_0.jpg";
import photo2 from "../Assets/Images/image1_0.jpg";
import photo3 from "../Assets/Images/image1_0.jpg";
import photo4 from "../Assets/Images/image1_0.jpg";
import photo5 from "../Assets/Images/image1_0.jpg";
import photo6 from "../Assets/Images/image1_0.jpg";

const Media = () => {
  const photos=[
    
    {
      idx:1,
      img:photo1,
      love:22,
      comment:3,
    },
    {
      idx:2,
      img:photo2,
      love:22,
      comment:3,
    },
    {
      idx:3,
      img:photo3,
      love:22,
      comment:3,
    },
    {
      idx:4,
      img:photo4,
      love:22,
      comment:3,
    },
    {
      idx:5,
      img:photo5,
      love:22,
      comment:3,
    },
    {
      idx:6,
      img:photo6,
      love:22,
      comment:3,
    },
    
  ];

  return (
    <div className="connection media">
      <div className="media-header">
        <h2>Photos</h2>
        <div className="blue-btn"><i class="fa-solid fa-plus"></i>  Create album</div>
      </div>
      <div className="details">
           <div className="Add-photo">
             <i class="fa-solid fa-camera-retro"></i>
             <h3>ADD PHOTO</h3>
           </div>
          {photos.map((photo)=>(
            <div className="photos" key={photo.key}>
               <img src={photo.img} alt="photo"/>
               <div className="reactions">
                <span className="love"><i class="fa-solid fa-heart"></i></span>
                <span className="comment"><i class="fa-solid fa-comment"></i></span>
               </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Media
