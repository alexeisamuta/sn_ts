import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItems";
import Message from "./Message/Message";
import {ActionsTypes, dialogsPageType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        onNewMessageChange: (body: any) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        onSendMessageClick: () => {
            dispatch(sendMessageAC())
        }
    }
}
//

export default compose(withAuthRedirect, connect(mapStateToProps,mapDispatchToProps))(Dialogs);