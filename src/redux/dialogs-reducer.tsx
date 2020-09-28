import React from "react";
import {ActionsTypes, dialogsPageType} from "./store";

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
}

export const dialogsReducer = (state: dialogsPageType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [ ...state.messages, {message: body} ]
            }
        default:
            return state
    }
}

export const sendMessageAC = (newMessageBody: string) => ({type: SEND_MESSAGE, newMessageBody} as const)