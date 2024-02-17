import React, {useState} from "react";

export default function ChatInput(props){
    const user = sessionStorage.getItem("user");
    const [message, setMessage] = useState('');

    function onSubmit(e){
        e.preventDefault();
        const isMessageProvided = message && message !== '';
        if (isMessageProvided){
            props.sendMessage(user, message);
        }
        else {
            alert('Please insert a message.');
        }
        setMessage("")
    }
    function onMessageUpdate(e){
        setMessage(e.target.value)
    }
    return(
        <form
            onSubmit={onSubmit}>
            <input id={"Input"} placeholder={"Write a message"}
            type="text"
            name="message"
            value={message}
            onChange={onMessageUpdate}/>
            <button className={"knopk"}>Submit</button>
        </form>
    )
}