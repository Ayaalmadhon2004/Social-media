import React, { useState } from 'react';
import Navbar from './navbar/Navbar';
import Settings from './settings/Settings';
import MessagingSection from './messaging/MessagingSection';
import Header from './Header/Header';
import { Routes, Route, useLocation } from "react-router-dom";
import Profile from './Profile/Profile';
import About from './About/About';
import Connections from './connections/Connections';
import Media from "./media/Media";
import Events from "./Events/Events";
import Activity from "./Activity/Activity";
import HelpCenter from './HelpCenter/HelpCenter';

const App = () => {
  const [setting, setSetting] = useState(false);
  const [message, setMessage] = useState(false);
  const location = useLocation();

  const toggleSetting = () => {
    setSetting(true);
    setMessage(false);
  };

  const toggleMessage = () => {
    setMessage(true);
    setSetting(false);
  };

  return (
    <div>
      <Navbar toggleSetting={toggleSetting} toggleMessage={toggleMessage} />
      
      {!location.pathname.includes("/settings") &&
      !location.pathname.includes("/messages")&& 
      !location.pathname.includes("/profile")&& 
      !location.pathname.includes("/HelpCenter")
      }

      <Routes>
        <Route path="/settings" element={<Settings setting={setting} />} /> 
        <Route path="/messages" element={<MessagingSection message={message} />} />
        <Route path="/HelpCenter" element={<HelpCenter/>}/>
        <Route path="/question/:id" element={<HelpCenter />} />

        <Route path="/profile" element={<Profile />}>
          <Route path="about" element={<About />} />
          <Route path="Connections" element={ <Connections/>} />
          <Route path="Media" element={<Media/>} />
          <Route path="Events" element={<Events/>} />
          <Route path="Activity" element={<Activity/>} /> 
        </Route>

        <Route path="/header" element={<Header/>}/>
      </Routes>
    </div>
  );
};

export default App;
