import React from 'react'
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar, IconButton } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import './Sidebar.css'
import SidebarChat from './SidebarChat';

function SideBar() {

  return (
    <div className='sidebar'>
       <div className='sidebar__header'>
                 <Avatar />
           <div className='sidebar__headerRight'>
                <IconButton>
                  <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                <ChatIcon/>
                </IconButton>
                <IconButton>
                <MoreVertIcon/>
                </IconButton>
           </div>
       </div>
       <div className='sidebar__search'>
              <div className='sidebar__searchContainer'>
                 <SearchOutlined />
                 <input 
                 placeholder='Search or start new chat' 
                 type='text'
                 />
              </div>
       </div>
       <div className='sidebar__chat'>
             <SidebarChat addNewChat/>
             <SidebarChat />
             <SidebarChat />
             <SidebarChat />
             <SidebarChat />
             <SidebarChat />
       </div>
    </div>
  )
} 

export default SideBar