import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unfollowAC, usersType} from "../../redux/users-reducer";

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<usersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(Users)