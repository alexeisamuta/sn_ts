import React from "react";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

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
                ...action.payload
            }

        default:
            return state
    }
}

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {id, login, email, isAuth},
} as const)


export const getAuthUserData = () => {
    return (dispatch: any) => {
        authAPI.me().then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthUserData(id, login, email, true))
                }
            }
        )
    }
}
export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: any) => {
        authAPI.login(email, password, rememberMe).then(data => {
                if (data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    let message =  data.messages.length > 0 ? data.messages[0] : "Some error"
                    dispatch(stopSubmit("login", {_error: message}))
                }
            }
        )
    }
}
export const logout = () => {
    return (dispatch: any) => {
        authAPI.logout().then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            }
        )
    }
}