import React, {useState, useEffect, useRef} from "react";
import {HubConnectionBuilder} from "@microsoft/signalr";

import {ChatWindow} from "./chatComponents/ChatWindow";
import ChatInput   from "./chatComponents/ChatInput";

export default function MainPage (){

        const [ connection, setConnection ] = useState(null);
        const [ chat, setChat ] = useState([]);
        const latestChat = useRef(null);
        latestChat.current = chat;
        useEffect(() => {
            const newConnection = new HubConnectionBuilder()
                .withUrl('http://26.254.224.223:7022/chat')
                .withAutomaticReconnect()
                .build();

            setConnection(newConnection);
        }, [])
        useEffect(() => {
            if (connection) {
                connection.start()
                    .then(result => {
                        console.log('Connected!');

                        connection.on('ReceiveMessage', message => {
                            const updatedChat = [...latestChat.current];
                            updatedChat.push(message);

                            setChat(updatedChat);
                        });
                    })
                    .catch(e => console.log('Connection failed: ', e));
            }
        }, [connection]);
        const sendMessage = async (user, message) => {
            const chatMessage = {
                user: user,
                message: message
            };
                try {
                    await connection.send('SendMessage', chatMessage);
                }
                catch(e) {
                    console.log(e);
                }

        }
            return(
        <div className={"chat"}>
            <ChatInput sendMessage={sendMessage} />
            <hr />
            <ChatWindow chat={chat}/>
        </div>
    )

}