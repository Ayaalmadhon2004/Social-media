import React, { useState } from "react";
import "./messaging.css";

import messagePerson1 from "../Assets/Images/01-person2.jpg";
import messagePerson2 from "../Assets/Images/02-person3.jpg";
import messagePerson3 from "../Assets/Images/07-DLMl_mTI.jpg";
import messagePerson4 from "../Assets/Images/person5.jpg";
import messagePerson5 from "../Assets/Images/person6.jpg";
import messageUsers from "../data/data";

const chats = [
  { id: 1, img: messagePerson1, response1: "Hello dear sir, how are you?", timeR1: "12:40", reply: "I am good, thanks!", timeRe2: "12:41" },
  { id: 2, img: messagePerson2, response1: "Hey! Can we talk?", timeR1: "13:10", reply: "Sure, call me.", timeRe2: "13:15" },
  { id: 3, img: messagePerson3, response1: "Did you check the email?", timeR1: "14:00", reply: "Yes, I'll reply soon.", timeRe2: "14:05" },
  { id: 4, img: messagePerson4, response1: "Let's meet tomorrow.", timeR1: "15:20", reply: "Sounds good!", timeRe2: "15:25" },
  { id: 5, img: messagePerson5, response1: "What’s the update?", timeR1: "16:00", reply: "Will send it by evening.", timeRe2: "16:05" }
];

const MessagingSection = ({ message }) => {
  // State for search input, filtered users, selected chat, current input text, and submitted text.
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(messageUsers);
  const [selectedChat, setSelectedChat] = useState(null);
  const [type, setType] = useState("");
  const [submit, setSubmit] = useState("");

  // Handler for search input
  const searchHandler = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
    if (searchValue.trim() !== "") {
      setFilteredUsers(messageUsers.filter(user => user.name.toLowerCase().includes(searchValue)));
    } else {
      setFilteredUsers(messageUsers);
    }
  };

  // Handler for selecting a chat user
  const chooseChat = (user) => {
    const chat = chats.find(chat => chat.id === user.id);
    setSelectedChat(chat);
  };

  // Handler for keydown event on the message input
  // Note: we check for "Enter" (with a capital E)
  const submitChange = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setSubmit(type);
      setType("");
    }
  };

  return (
    <div className={`messageContainer container ${message ? "active" : ""}`}>
      <div className="message2sections">
        {/* Left section: List of users */}
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
        
        {/* Right section: Chat window */}
        <div className="rightMessage">
          {selectedChat ? (
            <>
              <div className="headRightMessage">
                <div className="leftHeadRM">
                  <div className="user">
                    <img src={selectedChat.img} alt={selectedChat.name} />
                    <div className="detUser">
                      <h4>{selectedChat.name}</h4>
                      <p>{selectedChat.state}</p>
                      <div className={`state2 ${selectedChat.state === "online" ? "online" : "offline"}`}></div>
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
                  {/* Display submitted message only if it exists */}
                  {submit && <p>{submit}</p>}
                </div>
                <div className="texting">
                  {/* Text input for message typing with onKeyDown to handle "Enter" key */}
                  <input 
                    type="text" 
                    placeholder="Type a message" 
                    value={type} 
                    onChange={(e) => setType(e.target.value)} 
                    onKeyDown={submitChange}
                  />
                  <i className="fa-solid fa-face-smile"></i>
                  <i className="fa-solid fa-link"></i>
                  <i className="fa-solid fa-paper-plane"></i>
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
