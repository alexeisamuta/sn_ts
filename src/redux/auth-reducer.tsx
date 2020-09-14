import React from "react";
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'


type AuthReducerPropsType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

type ActionTypes = ReturnType<typeof setAuthUserData>


export const authReducer = (state: AuthReducerPropsType = initialState, action: ActionTypes) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state
    }
}

export const setAuthUserData = (id: number, login: string, email: string) => ({
    type: SET_USER_DATA,
    data: {id, login, email}
} as const)


export const getAuthUserData = () => {
    return (dispatch: any) => {
        authAPI.me().then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthUserData(id, login, email))
                }
            }
        )
    }
}