import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, SearchOutlined } from "@material-ui/icons";
import MoreVert from "@material-ui/icons/MoreVert";
import { InsertEmoticon } from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic"
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './Chat.css';      

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    const {roomId} = useParams();

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
     }, []);

     const sendMessage = (e) =>{
       e.preventDefault();
       console.log("You typed >>>", input);
       
       setInput("");
     }

    return <div className="chat">

        <div className="chat_header">
         <Avatar src = {`https://avatars.dicebear.com/api/human/${seed}.svg `} />

         <div className="chat_headerInfo">
             <h3>Room name</h3>
             <p>Last seen at... </p>
         </div>

         <div className="chat_headerRight">
              <IconButton>
                <SearchOutlined />
              </IconButton>

              <IconButton>
                <AttachFile/>
              </IconButton>
              
              <IconButton>
                <MoreVert />
              </IconButton>
         </div>
        </div>

        <div className="chat_body">
          <p className={`chat_message ${true && "chat_reciever"}`}>
                <span className="chat_name">Adrien</span>
                    Hey guys

                <span className="chat_timestamp">7:05pm</span>
                        <div className="chat_status"> 
                        <p>Unread</p> 
                        </div>   
          </p>
 
        </div>

        <div className="chat_footer">
          <InsertEmoticon/>
          <form>
              <input value={input} onChange={e => setInput(e.target.value)}

              placeholder="Type a message"
              type = "text" />
              <button onClick = {sendMessage} type="submit">Send a message</button>
          </form>
          <MicIcon />
        </div>
    </div>    
}

export default Chat
