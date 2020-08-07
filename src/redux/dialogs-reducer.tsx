import React from "react";
import {ActionsTypes, dialogsPageType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


let initialState = {
    messages: [
        { message: 'Hi'},
        { message: 'How are you?'},
        { message: 'Good luck'},
        { message: 'Good luck'},
    ],
    dialogs: [
        {id: 1, name: 'Misha'},
        {id: 2, name: 'Alexey'},
        {id: 3, name: 'Karina'},
        {id: 4, name: 'Masha'},
        {id: 5, name: 'Sulim'},
    ],
    newMessageBody: ""
}

export const dialogsReducer = (state: dialogsPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ""
            state.messages.push({message: body})
            return state
        default:
            return state
    }
}

export const updateNewMessageBodyAC = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)
export const sendMessageAC = () => ({type: SEND_MESSAGE} as const)