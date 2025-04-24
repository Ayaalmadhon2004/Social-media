import React, { useEffect } from 'react'
import "./settings.css"
import { useNavigate } from 'react-router'

const Settings = ({setting}) => {
  const navigate=useNavigate();

  useEffect(()=>{
    if(!setting) navigate("/header");
  },[setting,navigate]);
  
  return (
    <div className={`settingsContainer container ${setting ? "active":""}`}>
       <div className="setting2Sections">
       <div className="leftSetting">
        <div className="topLeftSetting">
        <ul>
          <li><i class="fa-solid fa-user"></i>    Account</li>
          <li><i class="fa-solid fa-check"></i>   Notifications</li>
          <li><i class="fa-solid fa-unlock"></i>    Privacy and saftety</li>
          <li><i class="fa-solid fa-tower-cell"></i>    Communications</li>
          <li><i class="fa-solid fa-message"></i>   Messaging</li>
          <li><i class="fa-solid fa-folder-closed"></i>   Close account</li>
        </ul>
        <span>View Profile</span>
        </div>
        <div className="bottomLeftSetting">
          <button className="gray-btn">About</button>
          <button className="gray-btn">Settings</button>
          <button className="gray-btn">Support</button>
          <button className="gray-btn">Docs</button>
          <button className="gray-btn">Help</button>
          <button className="gray-btn">Privacy & terms</button>
          <button className="gray-btn">CC 2025</button>
        </div>
       </div>
       <div className="rightSetting">
        <div className="topSection">
        <h3>Account Settings</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui aliquam architecto nulla minima animi accusamus sint nemo dignissimos repudiandae. Corporis necessitatibus debitis nihil quasi consectetur totam. Fuga alias obcaecati deleniti!</p>
         <form>
          <div className='name-section'>
          <label htmlFor="name">First name</label>
          <input id="name" type="text" placeholder='Sam'/>
          <label htmlFor="Lname">Last name</label>
          <input id="Lname" type="text" placeholder='Lanson'/>
          </div>
          <div className='user-section'>
            <label htmlFor="user">User name</label>
            <input id="user"type="text"  placeholder="@samlanson"/>
            <label htmlFor="birthday">Birthday</label>
            <input id="birthday" type="date" placeholder="11/6/2004"/>
          </div >
          <div className="box-section" >
          <input type="checkbox" id="check"/>
          <label htmlFor="check">Allow anyone to add you to their team</label>
          </div>
          <div className='contact-section'>
          <label htmlFor="phone">Phone number</label>
          <input id="phone" type="number" placeholder="(059)21-234-53"/>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="aya@gmail.com"/>
          </div>
          <div className='text-section'>
          <p>Overview</p>
          <textarea defaultValue=""></textarea>
          <span>Character limit:300</span>
          </div>

          <button className='blue-btn'>Save changes</button>
         </form>
        </div>

      <div className="bottomSection">
       <h3>Change Your Password</h3>
       <p>
       Ensure your account's security by updating your password. Choose a strong and unique password.
       </p>

       <form className='bottom-form'>
          <div className="form-group">
          <label htmlFor="current-password">Current Password</label><br/>
          <input type="password" id="current-password" placeholder="Enter current password" />
          </div>

          <div className="form-group">
            <label htmlFor="new-password">New Password</label><br/>
            <input type="password" id="new-password" placeholder="Enter new password" />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label><br/>
            <input type="password" id="confirm-password" placeholder="Re-enter new password" />
          </div>

          <button className="blue-btn">Update Password</button>
       </form>
       </div>
       </div>
       </div>
    </div>
  )
}

export default Settings
