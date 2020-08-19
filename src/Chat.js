import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, AttachFile, MoreVert } from "@material-ui/icons/";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

import "./Chat.css";

function Chat() {
    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    const sendMessage = (e) => {
        e.preventDefault();
        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">

                <p className={`chat__message ${true && 'chat__reciever'} `}>
                    <span className="chat__name">Piotr Grabowski</span>
                    Hej tutaj Piotrs
                    <span className="chat__timestamp">12:32 pm</span>
                </p>
            </div>


            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Wpisz tutaj wiadomosc..." />
                    <button type="submit" onClick={sendMessage}>Wyslij</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
