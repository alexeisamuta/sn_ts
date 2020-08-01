import React from "react";
import {ActionsTypes, postsType, profilePageType} from "./state";

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

export const profileReducer = (state: profilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: postsType = {message: state.newPostText, likesCount: 0}
            state.posts.push(newPost)
            state.newPostText = ""
            return state
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;
            return state
        default:
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST} as const)
export const updatePostTextAC = (text: string) => ({type: UPDATE_POST_TEXT, newText: text} as const)
