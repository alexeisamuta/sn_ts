import React from "react";
import {ItemResponseType} from "./UsersContainer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";


type userTypeFunc = {
    users: ItemResponseType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
}

export const Users = ({totalUsersCount, pageSize, onPageChanged, currentPage, follow, unfollow, followingInProgress, users}: userTypeFunc) => {

    return (
        <div>
            <Paginator pageSize={pageSize}
                       totalUsersCount={totalUsersCount}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}
            />
            {
                users.map(u => <User key={u.id}
                                           user={u}
                                           follow={follow}
                                           unfollow={unfollow}
                                           followingInProgress={followingInProgress}/>)
            }
        </div>
    )
}

