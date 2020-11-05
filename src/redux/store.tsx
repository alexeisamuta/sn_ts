import {addPostAC} from "./profile-reducer";
import {sendMessageAC} from "./dialogs-reducer";


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
}
export type RootStateType = {
    dialogsPage: dialogsPageType
    profilePage: profilePageType
}

export type StoreType = {
    _state: RootStateType
    subscribe: (observer: () => void) => void
    _callSubscriber: () => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}


export type ActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof sendMessageAC>


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
        ],
    },
    profilePage: {
        posts:[
            {message: 'Hi, how are you?', likesCount: 123},
            {message: "It's my first post", likesCount: 23},
        ],
    }
},
    _callSubscriber(){
        console.log("Render tree")
    },

    getState() {
        return this._state
    },
    subscribe(observer: () => void){
        this._callSubscriber = observer
    },

    dispatch(action){
        this._callSubscriber()
    }
}




export default store