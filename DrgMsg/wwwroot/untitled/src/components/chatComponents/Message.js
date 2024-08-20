import React from "react";
export default function Message(props){
    return(
        <div className="message">
            <span className="name2">{props.user}:</span>
            <p className="name"><strong></strong>{props.message}</p>
            
            
        </div>
    )

}