import React from 'react'
import "./about.css"

const About = () => {
  return (
    <div className="About container">
        <h3>Profile Info</h3>
        <div className="box1">
            <h3>Overview</h3>
            <p>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance.</p>
            <div className="miniBoxes">
                <div className="leftAbout">
                   <ul className="leftBoxes">
                    <li> Born: October 20, 1990</li>
                    <li> Lead Developer</li>
                    <li> Joined on: Nov 26, 2019</li>
                    <button className="formal-btn">
                        Add a workplace
                    </button>
                   </ul>
                </div>
                <div className=" rightBoxes rightAbout">
                    <li> Status: Single</li>
                    <li> Lives in: New Hampshire</li>
                    <li> Email: abc@xyz.com</li>
                    <button className="formal-btn">
                        Add an education
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
