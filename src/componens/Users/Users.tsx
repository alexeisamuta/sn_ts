import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/icon-image.png";
import {ItemResponseType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";


type userTypeFunc = {
    users: ItemResponseType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onPageChanged: (pageNumber: number) => void
    //toggleFollowingProgress: (isFetching: boolean, userID: number) => void
    followingInProgress: Array<number>
}

export const Users = (props: userTypeFunc) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : ""}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img src={u.photo ? u.photo.small : userPhoto} className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id == u.id)}
                                  onClick={() => { props.unfollow(u.id)}}

                            // props.toggleFollowingProgress(true, u.id)
                            // usersAPI.unFollow(u.id).then(data => {
                            //     if (data.resultCode === 0) {
                            //             props.unfollow(u.id)
                            //         }
                            //     props.toggleFollowingProgress(false, u.id)
                            //     })

                        >Unfollow</button>
                        : <button disabled={props.followingInProgress
                            .some(id => id == u.id)} onClick={() => { props.follow(u.id)}
                            // props.toggleFollowingProgress(true, u.id)
                            // usersAPI.follow(u.id).then(data => {
                            //         if (data.resultCode === 0) {
                            //             props.follow(u.id)
                            //         }
                            //     props.toggleFollowingProgress(false, u.id)
                            //     })

                        }>Follow</button>}
                </div>
            </span>
                <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.followed}</div>
                </span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.id}</div>
                </span>
            </span>
            </div>)
        }
    </div>
}