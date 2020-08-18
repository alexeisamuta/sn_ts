import React from "react";
import {stateUsersType, usersType} from "../../redux/users-reducer";
import styles from './users.module.css'


type userType = {
    users: Array<usersType>,
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<usersType>) => void

}

export let Users = (props: userType) => {

    if (props.users.length === 0){
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://abali.ru/wp-content/uploads/2014/02/gerb_belarus_1991_pogona.png",
                followed: false,
                fullName: 'Alexei',
                status: "I am boss",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                photoUrl: "https://abali.ru/wp-content/uploads/2014/02/gerb_belarus_1991_pogona.png",
                followed: false,
                fullName: 'Denis',
                status: "I am boss too",
                location: {city: "Moscow", country: "Russian"}
            },
            {
                id: 3,
                photoUrl: "https://abali.ru/wp-content/uploads/2014/02/gerb_belarus_1991_pogona.png",
                followed: true,
                fullName: 'Pasha',
                status: "I am boss too too",
                location: {city: "Kiev", country: "Ukraine"}
            }
        ])
    }



    return <div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    {/*<button>Follow</button>*/}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
            </div>)
        }
    </div>
}