import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
     toggleFollowingProgress,
    unfollow,
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

type userType = {
    users: ItemResponseType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    //setUsers: (users: ItemResponseType[]) => void
    setCurrentPage: (pageNumber: number) => void
    //setTotalUsersCount: (totalUsersCount: number) => void
    //toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userID: number) => void
    getUsers: (currentPage: number, pageSize: number) => void

}
export type ItemResponseType = {
    name: string
    id: number
    uniqueUrlName: null
    photo: photosType
    status: null
    followed: boolean
}
type photosType = {
    small: string
    large: string
}


class UsersContainer extends React.Component<userType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   //toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>


    };
}

let mapStateToProps = (state: any) => {
    debugger
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow,unfollow,setCurrentPage,toggleFollowingProgress,getUsers})(UsersContainer)