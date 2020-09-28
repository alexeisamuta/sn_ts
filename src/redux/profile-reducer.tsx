import React from "react";
import {postsType, profilePageType} from "./store";
import {UsersProfileType} from "../componens/Profile/ProfileContainer";
import {sendMessageAC} from "./dialogs-reducer";
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'


type ActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof setUsersProfile>
    | ReturnType<typeof setStatusAC>


let initialState = {
    posts: [
        {message: 'Hi, how are you?', likesCount: 123},
        {message: "It's my first post", likesCount: 23},
    ],
    profile: null,
    status: ""
}

export const profileReducer = (state: profilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: postsType = {message: action.newPostText, likesCount: 0}
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

export const addPostAC = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const setUsersProfile = (profile: UsersProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatusAC = (status: string) => ({type: SET_STATUS, status} as const)


export const getUserProfile = (userId: string) => {

    return (dispatch: any) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUsersProfile(data))
        })
    }
}
export const getStatus = (userId: string) => {
    return (dispatch: any) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatusAC(data))
        })
    }
}
export const updateStatus = (status: string) => {
    return (dispatch: any) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })
    }
}
