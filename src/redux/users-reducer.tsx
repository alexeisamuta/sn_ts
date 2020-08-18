import React from "react";
import {ActionsTypes, profilePageType} from "./store";
import {addPostAC} from "./profile-reducer";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

type locationType = {
    city: string
    country: string
}
export type usersType = {
    id: number
    photoUrl: string
    fullName: string
    status: string
    location: locationType
    followed: boolean
}
export type stateUsersType = {
    users: Array<usersType>
}

let initialState = {
    users: [
    //     {
    //         id: 1,
    //         photoUrl: "https://abali.ru/wp-content/uploads/2014/02/gerb_belarus_1991_pogona.png",
    //         followed: false,
    //         fullName: 'Alexei',
    //         status: "I am boss",
    //         location: {city: "Minsk", country: "Belarus"}
    //     },
    //     {
    //         id: 2,
    //         photoUrl: "https://abali.ru/wp-content/uploads/2014/02/gerb_belarus_1991_pogona.png",
    //         followed: false,
    //         fullName: 'Denis',
    //         status: "I am boss too",
    //         location: {city: "Moscow", country: "Russian"}
    //     },
    //     {
    //         id: 3,
    //         photoUrl: "https://abali.ru/wp-content/uploads/2014/02/gerb_belarus_1991_pogona.png",
    //         followed: true,
    //         fullName: 'Pasha',
    //         status: "I am boss too too",
    //         location: {city: "Kiev", country: "Ukraine"}
    //     }
    ]
}

type ActionTypes = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

export const usersReducer = (state: stateUsersType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:{
            return {...state, users: [...state.users, ...action.users ]}
        }
        default:
            return state
    }
}

export const followAC = (userID: number) => ({type: FOLLOW, userID} as const)
export const unfollowAC = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsersAC = (users: Array<usersType>) => ({type: SET_USERS, users} as const)
