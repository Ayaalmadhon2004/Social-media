import React, { useState } from "react";
import "./messaging.css";

import messagePerson1 from "../Assets/Images/01-person2.jpg";
import messagePerson2 from "../Assets/Images/02-person3.jpg";
import messagePerson3 from "../Assets/Images/07-DLMl_mTI.jpg";
import messagePerson4 from "../Assets/Images/person5.jpg";
import messagePerson5 from "../Assets/Images/person6.jpg";

const messageUsers = [
  { id: 1, img: messagePerson1, name: "France Geo", desc: "France sent a photo", state: "online" },
  { id: 2, img: messagePerson2, name: "Lori Ferguson", desc: "You missed a call from Lori", state: "offline" },
  { id: 3, img: messagePerson3, name: "Samo Lanson", desc: "France sent a photo", state: "online" },
  { id: 4, img: messagePerson4, name: "Judy Naven", desc: "France sent a photo", state: "offline" },
  { id: 5, img: messagePerson5, name: "Dennis Barry", desc: "France sent a photo", state: "online" }
];

const chats = [
  { id: 1, img: messagePerson1, response1: "Hello dear sir, how are you?", timeR1: "12:40", reply: "I am good, thanks!", timeRe2: "12:41" },
  { id: 2, img: messagePerson2, response1: "Hey! Can we talk?", timeR1: "13:10", reply: "Sure, call me.", timeRe2: "13:15" },
  { id: 3, img: messagePerson3, response1: "Did you check the email?", timeR1: "14:00", reply: "Yes, I'll reply soon.", timeRe2: "14:05" },
  { id: 4, img: messagePerson4, response1: "Let's meet tomorrow.", timeR1: "15:20", reply: "Sounds good!", timeRe2: "15:25" },
  { id: 5, img: messagePerson5, response1: "What’s the update?", timeR1: "16:00", reply: "Will send it by evening.", timeRe2: "16:05" }
];

const MessagingSection = ({ message }) => {
  const [search, setSearch] = useState(""); // 🔹 Store search input
  const [filteredUsers, setFilteredUsers] = useState(messageUsers); // 🔹 Store filtered users
  const [selectedChat, setSelectedChat] = useState(null); // 🔹 Store selected chat

  const searchHandler = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
    if (searchValue.trim() !== "") {
      setFilteredUsers(messageUsers.filter(user => user.name.toLowerCase().includes(searchValue)));
    } else {
      setFilteredUsers(messageUsers);
    }
  };

  const chooseChat = (user) => {
    const chat = chats.find(chat => chat.id === user.id);
    setSelectedChat(chat);
  };

  return (
    <div className={`messageContainer container ${message ? "active" : ""}`}>
      <div className="message2sections">

        <div className="leftMessage">
          <div className="headLeftMessage">
            <h3>Active chats</h3>
            <span>{messageUsers.length}</span>
            <i className="fa-solid fa-pen-to-square"></i>
          </div>
          <div className="search">
            <input type="search" placeholder="Search for Chats" value={search} onChange={searchHandler} />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="usersForSearch">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <div className="user" key={user.id} onClick={() => chooseChat(user)} style={{ cursor: "pointer" }}>
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
                </div>
                <div className="texting">
                <input type="text" placeholder="Type a message" />
                <i class="fa-solid fa-face-smile"></i>
                <i class="fa-solid fa-link"></i>
                <i class="fa-solid fa-paper-plane"></i>
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
