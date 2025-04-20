import React from 'react'
import "./connections.css"
import messageUsers from '../data/data'

const Connections = () => {

  return (
    <div className="connections container">
      <div className="header">
        <h2>Connections</h2>
      </div>
      <ul className="details">
        <li>
          {
            messageUsers.map((connection)=>(
              <div className="sub-connections" key={Connections.id}>
                 <img src={connection.img} alt=""/>
                 <div className="details">
                  <div className="right">
                   <div className='jobName'>
                    <h3>{connection.name}</h3>
                    <p>{connection.job}</p>
                   </div>
                  <p>{connection.connectionComment}</p>
                  </div>
                  <div className="btns">
                    <div className="btn-red">Remove</div>
                    <div className="blue-btn">Message</div>
                  </div>
                 </div>
              </div>
            ))
          }
        </li>
      </ul>
    </div>
  )
}

export default Connections
