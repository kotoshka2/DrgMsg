import React from "react";
export default function Message(props){
    return(
        <div>
            <p><strong>{props.user}</strong>:</p>
            <p>{props.message}</p>
        </div>
    )

}