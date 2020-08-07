import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItems";
import Message from "./Message/Message";
import {ActionsTypes, dialogsPageType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


type DialogsType = {
   // store: any
}

function DialogsContainer(props: DialogsType) {
    /*
        let state = props.store.getState()

        function onSendMessageClick() {
            props.store.dispatch(sendMessageAC())
        }

        function onNewMessageChange(body: string) {
            props.store.dispatch(updateNewMessageBodyAC(body))
        }*/

    return (
        <StoreContext.Consumer>
            {(store) => {

                let state = store.getState()

                function onSendMessageClick() {
                    store.dispatch(sendMessageAC())
                }

                function onNewMessageChange(body: string) {
                    store.dispatch(updateNewMessageBodyAC(body))
                }

                return (<Dialogs dialogsPage={state.dialogsPage}
                                 onNewMessageChange={onNewMessageChange}
                                 onSendMessageClick={onSendMessageClick}/>)
            }
            }
        </StoreContext.Consumer>)
}

export default DialogsContainer;