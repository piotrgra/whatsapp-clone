import React, { useEffect, useState } from 'react';
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";

function SidebarChat({ addNewChat }) {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])
    
    const createChat = () => {
        const roomName = prompt("Podaj nazwe chatu");

        if(roomName){
            // zrobmy cos tutaj z baza danych
        }
    };

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>Last message..</p>
            </div>
        </div>
    ) : (
            <div onClick={createChat} className="sidebarChat">
                <h2>Add new Chat</h2>
            </div>
        );
}

export default SidebarChat
