

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
    newPostText: string
}
export type RootStateType = {
    dialogsPage: dialogsPageType
    profilePage: profilePageType
}

export type StoreType = {
    _state: RootStateType
    subscribe: (observer: () => void) => void
    addPost: () => void
    updatePostText: (newText: string) => void
    _callSubscriber: () => void
    getState: () => RootStateType
}


export const store: StoreType = {
    _state : {
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
        newPostText: "",
    }
},
    subscribe(observer: () => void){
        this._callSubscriber = observer
    },
    addPost(){
        let newPost: postsType = {
            message: this._state.profilePage.newPostText, likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        this._callSubscriber()
    },
    updatePostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },
    _callSubscriber(){
        console.log("Render tree")
    },
    getState() {
        return this._state
    }
}
export default store