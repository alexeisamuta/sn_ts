import React from "react";
import s from "./../Dialogs.module.css"
import {messagesType} from "../../../redux/state";

function Message(props: messagesType) {

    let refElement = React.createRef<HTMLTextAreaElement>()

    function addMessage() {
        let messageText = refElement.current?.value
        alert(messageText)
    }


    return (
        <div>
        <div className={s.message}>{props.message}</div>
            <textarea ref={refElement}></textarea> <span><button onClick={addMessage}></button></span>
        </div>
    )
}

export default Message;