import React from "react";
import {postsType, profilePageType} from "./store";
import {UsersProfileType} from "../componens/Profile/ProfileContainer";
import {sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
import {usersAPI} from "../api/api";
import {toggleFollowingProgress, unfollowSuccess} from "./users-reducer";

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'


type ActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof updatePostTextAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof setUsersProfile>


let initialState = {
    posts: [
        {message: 'Hi, how are you?', likesCount: 123},
        {message: "It's my first post", likesCount: 23},
    ],
    newPostText: "",
    profile: null
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

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        default:
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST} as const)
export const setUsersProfile = (profile: UsersProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const updatePostTextAC = (text: string) => ({type: UPDATE_POST_TEXT, newText: text} as const)


export const getUserProfile = (userId: string) => {

    return (dispatch: any) => {
        usersAPI.getProfile(userId).then(data => {
            dispatch(setUsersProfile(data))
        })
    }
}
