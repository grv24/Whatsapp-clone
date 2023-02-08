import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import "./SidebarChat.css";

function SidebarChat({ addNewChat }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
     const roomName = prompt("Please Enter Name For Chat");
     if(roomName){
        //database stuff
     }

  };
  return ! addNewChat ? (
    <div className="sideBarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sideBarChat__info">
        <h2>Room Name</h2>
        <p>This is the last message</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sideBarChat">
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;
