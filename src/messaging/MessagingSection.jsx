import React, { useEffect, useState } from "react";
import "./messaging.css";
import { useLocation, useNavigate } from "react-router";

import messagePerson1 from "../Assets/Images/01-person2.jpg";
import messagePerson2 from "../Assets/Images/02-person3.jpg";
import messagePerson3 from "../Assets/Images/07-DLMl_mTI.jpg";
import messagePerson4 from "../Assets/Images/person5.jpg";
import messagePerson5 from "../Assets/Images/person6.jpg";
import messageUsers from "../data/data";

const chats = [
  { id: 1, img: messagePerson1,name:"jerman", response1: "Hello dear sir, how are you?", timeR1: "12:40", reply: "I am good, thanks!", timeRe2: "12:41" },
  { id: 2, img: messagePerson2,name:"jerman", response1: "Hey! Can we talk?", timeR1: "13:10", reply: "Sure, call me.", timeRe2: "13:15" },
  { id: 3, img: messagePerson3,name:"jerman", response1: "Did you check the email?", timeR1: "14:00", reply: "Yes, I'll reply soon.", timeRe2: "14:05" },
  { id: 4, img: messagePerson4,name:"jerman", response1: "Let's meet tomorrow.", timeR1: "15:20", reply: "Sounds good!", timeRe2: "15:25" },
  { id: 5, img: messagePerson5,name:"jerman", response1: "What’s the update?", timeR1: "16:00", reply: "Will send it by evening.", timeRe2: "16:05" }
];

const MessagingSection = ({ message }) => {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(messageUsers);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]); 
  const [type, setType] = useState("");
  const navigate = useNavigate();
  const location = useLocation();


  const searchHandler = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
    setFilteredUsers(
      searchValue.trim() !== ""
        ? messageUsers.filter(user => user.name.toLowerCase().includes(searchValue))
        : messageUsers
    );
  };

  const chooseChat = (user) => {
    const chat = chats.find(chat => chat.id === user.id);
    setSelectedChat(chat);
  };

  const submitChange = (e) => {
    if (e.key === "Enter" && type.trim() !== "") {
      e.preventDefault();
      setMessages([
        ...messages,
        { text: type, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      ]);
      setType(""); 
    }
  };
  
  useEffect(() => {
    if (!message) {
      navigate("/header");
    }
  }, [message, navigate]);


  return (
<div className={`messageContainer container ${(message || location.pathname === "/messages") ? "active" : ""}`}>
      <div className="message2sections">

        {/* Left Section: Active Chats */}
        <div className="leftMessage">
          <div className="headLeftMessage">
            <h3>Active chats</h3>
            <span>{filteredUsers.length}</span>
            <i className="fa-solid fa-pen-to-square"></i>
          </div>
          <div className="search">
            <input 
              type="search" 
              placeholder="Search for Chats" 
              value={search} 
              onChange={searchHandler} 
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="usersForSearch">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <div 
                  className="user" 
                  key={user.id} 
                  onClick={() => chooseChat(user)} 
                  style={{ cursor: "pointer" }}
                >
                  <div className="img">
                    <div className={`state ${user.state === "online" ? "online" : "offline"}`}></div>
                    <img src={user.img} alt={user.name} />
                  </div>
                  <div className="desc">
                    <h4>{user.name}</h4>
                    <p>{user.desc}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No user found</p>
            )}
          </div>
        </div>
        
        {/* Right Section: Chat Window */}
        <div className="rightMessage">
          {selectedChat ? (
            <>
              <div className="headRightMessage">
                <div className="leftHeadRM">
                  <div className="user">
                    <img src={selectedChat.img} alt="Chat Person" />
                    <div className="detUser">
                      <h4>{selectedChat.name}</h4>
                    </div>
                  </div>
                </div>
                <div className="rightHeadRM">
                  <i className="fa-solid fa-phone"></i>
                  <i className="fa-solid fa-video"></i>
                  <i className="fa-solid fa-comment-dots"></i>
                </div>
              </div>

              <div className="bottomRightMessage">
                <div className="chat">
                  <p className="response">{selectedChat.response1}</p>
                  <span>{selectedChat.timeR1}</span>
                  <p className="reply">{selectedChat.reply}</p>
                  <span>{selectedChat.timeRe2}</span>
                  
                  {messages.map((msg, index) => (
                    <p key={index} className="response">
                      {msg.text} <span>{msg.time}</span>
                    </p>
                  ))}
                </div>

                <div className="texting">
                  <input 
                    type="text" 
                    placeholder="Type a message" 
                    value={type} 
                    onChange={(e) => setType(e.target.value)} 
                    onKeyDown={submitChange}
                  />
                  <div className="icons">
                    <i className="fa-solid fa-face-smile"></i>
                    <i className="fa-solid fa-link"></i>
                    <i className="fa-solid fa-paper-plane"></i>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p style={{ textAlign: "center", marginTop: "50px" }}>Select a user to start chatting</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagingSection;
