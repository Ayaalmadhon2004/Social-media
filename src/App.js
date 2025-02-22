import React, { useState } from 'react';
import Navbar from './navbar/Navbar';
import Settings from './settings/Settings';
import MessagingSection from './messaging/MessagingSection';

const App = () => {
  const [setting, setSetting] = useState(false);
  const [message,setMessage]=useState(false);
  const toggleSetting = () => {
    setSetting(prev => !prev);
    setMessage(false);
  };
  const toggleMessage=()=>{
    setMessage(prev=>!prev);
    setSetting(false);
  }

  return (
    <div>
      <Navbar toggleSetting={toggleSetting}  toggleMessage={toggleMessage}/>
      <Settings setting={setting} />
      <MessagingSection message={message}/>
    </div>
  );
};

export default App;