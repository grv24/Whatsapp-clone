import React, { useState, useEffect } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { Avatar, IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import db from "./Config";
import { useStateValue } from "./StateProvider";

function SideBar() {
  const [rooms, setRooms] = useState([]);
 const [{user},dispatch]=useStateValue();
  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return ()=>{
      unsubscribe();
    }
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user?.photoURL}/>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chat">
      <SidebarChat addNewChat />
       {rooms.map(room=>(
        <SidebarChat key={room.id}
        name={room.data.name}
        id={room.id}
        />
       ))}
       
      </div>
    </div>
  );
}

export default SideBar;
