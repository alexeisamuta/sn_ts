import React from "react";
import {addPostAC, deletePostAC, profileReducer} from "./profile-reducer";


let state = {
    posts: [
        {message: 'Hi, how are you?', likesCount: 123},
        {message: "It's my first post", likesCount: 23},
    ]
}


it("new post should be added", () => {

    let action = addPostAC("yo")
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})

it("message of new post should be correct", () => {


    let action = addPostAC("yo")
    let newState = profileReducer(state, action)

    expect(newState.posts[2].message).toBe("yo")
})

it("after deleting length of message should be decrement", () => {

    let action = deletePostAC(123)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(1)
})

it("after deleting length of message should be decrement", () => {

    let action = deletePostAC(1123)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(2)
})