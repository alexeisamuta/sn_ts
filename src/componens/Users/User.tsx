import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/icon-image.png";
import {ItemResponseType} from "./UsersContainer";
import {NavLink} from "react-router-dom";


type userTypeFunc = {
    user: ItemResponseType
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    followingInProgress: Array<number>
}

export const User = ({user, followingInProgress, unfollow, follow}: userTypeFunc) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                    <img src={user.photo ? user.photo.small : userPhoto} className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}
                        >Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }
                                  }>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.followed}</div>
                </span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.id}</div>
                </span>
            </span>
        </div>)
}