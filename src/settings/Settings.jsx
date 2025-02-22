import React from 'react'
import "./settings.css"

const Settings = ({setting}) => {
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
          <h3>Change your password</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At inventore, esse sunt veniam in repudiandae voluptatem eius. Animi dolore aliquam, debitis veritatis rerum possimus?</p>
          <label id="pass">Current password</label>
          <input for="pass" placeholder=""/>
          <label id="Npass">New password</label>
          <input for="Npass" placeholder=""/>
          <label id="Conpass">Confirm password</label>
          <input for="Conpass" placeholder=""/>
          <button className='blue-btn'>Update password</button>
        </div>
       </div>
       </div>
    </div>
  )
}

export default Settings
