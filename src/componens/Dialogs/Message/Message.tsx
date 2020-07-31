import React from "react";
import s from "./../Dialogs.module.css"
import {messagesType} from "../../../redux/state";

function Message(props: messagesType) {
    return (
        <div>
        <div className={s.message}>{props.message}</div>
        </div>
    )
}

export default Message;