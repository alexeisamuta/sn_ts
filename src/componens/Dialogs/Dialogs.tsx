import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItems";
import Message from "./Message/Message";
import {ActionsTypes, dialogsPageType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";


type DialogsType = {
    dialogsPage: dialogsPageType
    onNewMessageChange: (body: string) => void
    onSendMessageClick: () => void
}

function Dialogs(props: DialogsType) {

    function onSendMessageClick() {
        props.onSendMessageClick()
    }

    function onNewMessageChange(e: ChangeEvent<HTMLTextAreaElement>) {
        let body = e.currentTarget.value
        props.onNewMessageChange(body)
    }

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messageElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = props.dialogsPage.newMessageBody

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea
                                   value={newMessageBody}
                                   placeholder="Enter youe message"
                                   onChange={onNewMessageChange}
                    ></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;