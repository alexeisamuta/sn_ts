import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItems";
import Message from "./Message/Message";
import {ActionsTypes, dialogsPageType} from "../../redux/store";
import {reduxForm,Field} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


type DialogsType = {
    dialogsPage: dialogsPageType
    onSendMessageClick: (newMessageBody: string) => void
    isAuth: boolean
}

function Dialogs(props: DialogsType) {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messageElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

    // if (!props.isAuth) return <Redirect to={"/login"}/>;

    let addNewMessage = (values: any) => {
        props.onSendMessageClick(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

export default Dialogs;

const maxLength = maxLengthCreator(50)

const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength]}
                       name={"newMessageBody"}
                       placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)