import React from "react";
import {postsType, profilePageType} from "./store";
import {UsersProfileType} from "../componens/Profile/ProfileContainer";
import {sendMessageAC} from "./dialogs-reducer";
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'


type ActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof setUsersProfile>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof deletePostAC>


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
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.likesCount !== action.likesCount)
            }
        default:
            return state
    }
}

export const addPostAC = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const setUsersProfile = (profile: UsersProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatusAC = (status: string) => ({type: SET_STATUS, status} as const)
export const deletePostAC = (likesCount: number) => ({type: DELETE_POST, likesCount} as const)


export const getUserProfile = (userId: number) => {

    return (dispatch: any) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUsersProfile(data))
        })
    }
}
export const getStatus = (userId: number) => {
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
