import React from "react";
import {ActionsTypes, postsType, profilePageType} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

let initialState = {
    posts: [
        {message: 'Hi, how are you?', likesCount: 123},
        {message: "It's my first post", likesCount: 23},
    ],
    newPostText: "",
}

export const profileReducer = (state: profilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: postsType = {message: state.newPostText, likesCount: 0}
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        }
        case UPDATE_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST} as const)
export const updatePostTextAC = (text: string) => ({type: UPDATE_POST_TEXT, newText: text} as const)
