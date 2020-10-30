import React from "react";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'


type AuthReducerPropsType = {
    initialized: boolean

}

let initialState = {
    initialized: false,
}

type ActionTypes = ReturnType<typeof initializedSuccess>


export const appReducer = (state: AuthReducerPropsType = initialState, action: ActionTypes) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS} as const)


export const initializeApp = () => (dispatch: any) => {
    dispatch(getAuthUserData()).then(() => {
        dispatch(initializedSuccess())
    })

    }
//
// export const login = (email: string, password: string, rememberMe: boolean) => {
//     return (dispatch: any) => {
//         authAPI.login(email, password, rememberMe).then(data => {
//                 if (data.resultCode === 0) {
//                     dispatch(getAuthUserData())
//                 } else {
//                     let message =  data.messages.length > 0 ? data.messages[0] : "Some error"
//                     dispatch(stopSubmit("login", {_error: message}))
//                 }
//             }
//         )
//     }
// }
// export const logout = () => {
//     return (dispatch: any) => {
//         authAPI.logout().then(data => {
//                 if (data.resultCode === 0) {
//                     dispatch(setAuthUserData(null, null, null, false))
//                 }
//             }
//         )
//     }
// }