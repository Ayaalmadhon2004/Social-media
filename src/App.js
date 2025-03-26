import React, { useState } from 'react';
import Navbar from './navbar/Navbar';
import Settings from './settings/Settings';
import MessagingSection from './messaging/MessagingSection';
import Header from './Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [setting, setSetting] = useState(false);
  const [message, setMessage] = useState(false);

  // Toggle the setting state and reset message state
  const toggleSetting = () => {
    setSetting((prev) => !prev);
    setMessage(false);
  };

  // Toggle the message state and reset setting state
  const toggleMessage = () => {
    setMessage((prev) => !prev);
    setSetting(false);
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar toggleSetting={toggleSetting} toggleMessage={toggleMessage} />
        {window.location.pathname !== "/header" && setting === false && message === false && <Header />}

        <Routes>
          <Route path="/settings" element={<Settings setting={setting} />} />

          <Route path="/messages" element={<MessagingSection message={message} />} />

          <Route path="/header" element={<Header />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
