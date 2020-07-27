let rerenderEntireTree = (state: RootStateType) => {
    console.log(state.profilePage.newPostText)
}

export type messagesType = {
    message: string
}
export type dialogsType = {
    id: number
    name: string
}
export type postsType = {
    message: string
    likesCount: number
}
export type dialogsPageType = {
    messages: Array<messagesType>
    dialogs: Array<dialogsType>
}
export type profilePageType = {
    posts: Array<postsType>
    addPost: () => void
    newPostText: string
    updatePostText: (newText: string) => void
}
export type RootStateType = {
    dialogsPage: dialogsPageType
    profilePage: profilePageType
}

let state: RootStateType = {
    dialogsPage: {
        messages: [
            { message: 'Hi'},
            { message: 'How are you?'},
            { message: 'Good luck'},
            { message: 'Good luck'},
        ],
        dialogs: [
            {id: 1, name: 'Misha'},
            {id: 2, name: 'Alexey'},
            {id: 3, name: 'Karina'},
            {id: 4, name: 'Masha'},
            {id: 5, name: 'Sulim'},
        ]
    },
    profilePage: {
        posts:[
            {message: 'Hi, how are you?', likesCount: 123},
            {message: "It's my first post", likesCount: 23},
        ],
        addPost,
        newPostText: "",
        updatePostText,
    }
}



export function addPost() {
    let newPost: postsType = {
        message: state.profilePage.newPostText, likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    rerenderEntireTree(state)

}export function updatePostText(newText: string) {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)

}

export const subscribe = (observer: (state: RootStateType) => void) => {
    rerenderEntireTree = observer
}




export default state