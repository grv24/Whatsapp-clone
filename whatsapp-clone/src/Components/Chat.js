import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import MicIcon from '@mui/icons-material/Mic';
import React,{useState,useEffect} from 'react'
import'./Chat.css'
import { useParams } from 'react-router-dom';
import db from './Config'

function ChatBar() {

    const [input, setInput] = useState("");
    const {roomId} = useParams();
    const [roomName,setRoomName] = useState("");
    
    useEffect(()=>{
       if(roomId){
        db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot)=>setRoomName
        (snapshot.data().name));
       }
    },[roomId])
    

     const sendMessage=(e)=>{
        e.preventDefault();
        console.log(input)
        setInput("")
      }
  return (
    <div className='chat'>
         <div className='chat__header'>
         <Avatar src={`https://avatars.dicebear.com/api/human/${Math.floor(Math.random() * 5000)}.svg`} />
         <div className='chat__headerInfo'>
                <h3>{roomName}</h3>
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
              <p className={`chat__message ${true &&"chat__receiver"}`}>
              <span className='chat__name'>Sonny</span>
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
                value={input}
                onChange={e=>setInput(e.target.value)}
                placeholder='Type a message'
                type='Text'
              />
              <button
                 onClick={sendMessage}
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