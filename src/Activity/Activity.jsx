import React from 'react'
import messageUsers from '../data/data'
import "./Activity.css"

const Activity = () => {
  return (
    <div className="container activity">
      <div className="header">
        <h3>Activity Feedback</h3>
      </div>
      <div className="activity-content">
        {messageUsers.map((activity)=>(
          <ul className="activity">
            <li key={activity.id} className='acitvity-item'>
              <img src={activity.img} alt="activity img"/>
              <div className="activity-info">
                <p>{activity.comment}</p>
              </div>
              <div className="activity-time">
                <p>{activity.time}</p>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Activity
