import {addPostAC, profileReducer} from "./profile-reducer";
import {dialogsReducer, sendMessageAC} from "./dialogs-reducer";


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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber()






        /* if ( action.type === ADD_POST ) {
            let newPost: postsType = {message: this._state.profilePage.newPostText, likesCount: 0}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._callSubscriber()
        } else if ( action.type === UPDATE_POST_TEXT ) {
            debugger;
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber()
        }else if (action.type === SEND_MESSAGE){
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ""
            this._state.dialogsPage.messages.push({message: body})
            this._callSubscriber()
        }*/
    }
}




export default store