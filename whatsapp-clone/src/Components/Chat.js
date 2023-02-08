import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import MicIcon from '@mui/icons-material/Mic';
import React from 'react'
import'./Chat.css'

function ChatBar() {
  return (
    <div className='chat'>
         <div className='chat__header'>
             <Avatar/>
             <div className='chat__headerInfo'>
                <h3>Room name</h3>
                <p>Last Seen at....</p>
             </div>
             <div className='chat__headerRight'>
                 <IconButton>
                    <SearchOutlined/>
                 </IconButton>
                 <IconButton>
                     <AttachFile/>
                 </IconButton>
                 <IconButton>
                    <MoreVert/>
                 </IconButton>
             </div>
         </div>
         <div className='chat__body'>
              <p className='chat__message'>
              <span className='chat__name'>Sonnny</span>
                  This is a message
              <span className='chat__timestamp'>
                  {new Date().toUTCString()}
              </span>
            </p>
            <p className='chat__message chat__receiver'>
            <span className='chat__name'>Sonnny</span>
                This is a message
            <span className='chat__timestamp'>
                {new Date().toUTCString()}
            </span>
            </p>
            <p className='chat__message'>
            <span className='chat__name'>Sonnny</span>
                This is a message
            <span className='chat__timestamp'>
                {new Date().toUTCString()}
            </span>
          </p>
          
         </div>
          
      <div className='chat__footer'>
         <InsertEmoticon/>
         <form>
            <input
                placeholder='Type a message'
                type='Text'
              />
              <button
                 type='submit'>
                 Send a message
              </button>
         </form>
         <MicIcon/>
      </div>
    </div>
  )
}

export default ChatBar