import React from "react";
import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'


type AuthReducerPropsType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    captchaUrl: string | null
}

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
}

type ActionTypes = ReturnType<typeof setAuthUserData> | ReturnType<typeof getCaptchaUrlSuccess>


export const authReducer = (state: AuthReducerPropsType = initialState, action: ActionTypes) => {

    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
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
export const getCaptchaUrlSuccess = (captchaUrl: string | null) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
} as const)


export const getAuthUserData = () => {
    return async (dispatch: any) => {
        let data = await authAPI.me();
        if (data.resultCode === 0) {
            let {id, login, email} = data.data
            dispatch(setAuthUserData(id, login, email, true))
        }

    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null) => {
    return (dispatch: any) => {
        authAPI.login(email, password, rememberMe, captcha).then(data => {
                if (data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    if (data.resultCode === 10) {
                        dispatch(getCaptchaUrl())
                    } else {
                        let message = data.messages.length > 0 ? data.messages[0] : "Some error"
                        dispatch(stopSubmit("login", {_error: message}))
                    }
                }
            }
        )
    }
}
export const getCaptchaUrl = () => async (dispatch: any) => {
    securityAPI.getCaptchaUrl().then((res) => {
        debugger
        dispatch(getCaptchaUrlSuccess(res.data.url))
    })


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