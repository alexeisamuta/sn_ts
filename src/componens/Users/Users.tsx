import React from "react";
import {stateUsersType, usersType} from "../../redux/users-reducer";
import styles from './users.module.css'
import * as axios from 'axios';
import {AxiosResponse} from "axios";
import userPhoto from "../../assets/images/icon-image.png"

type userType = {
    users: ItemResponseType[],
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: ItemResponseType[]) => void
}
type responseType = {
    items: ItemResponseType[]
    totalCount: number
    error: null
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

export class Users extends React.Component<userType, Array<ItemResponseType>> {

    componentDidMount() {
        axios.default.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div> its class
            {
                this.props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photo ? u.photo.small : userPhoto} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            this.props.follow(u.id)
                        }}>Follow</button>}
                    {/*<button>Follow</button>*/}
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

}
