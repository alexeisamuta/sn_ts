import React from 'react';
import {ActionsTypes, profilePageType} from "../../../redux/store";
import {addPostAC, updatePostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


/*type MyPostType = {
    profilePage:profilePageType
    dispatch:(action: ActionsTypes) => void
}*/

type MyPostsContainerType = {
}


function MyPostsContainer(props: MyPostsContainerType) {


    return (
        <StoreContext.Consumer>
            {(store) => {

                let state = store.getState()

                function addPost() {
                    store.dispatch(addPostAC())
                }

                function onPostChange(text: string) {
                    store.dispatch(updatePostTextAC(text))
                }

                return (<MyPosts posts={state.profilePage.posts}
                                 addPost={addPost}
                                 updatePostTextAC={onPostChange}
                                 newPostText={state.profilePage.newPostText}/>)
            }}
        </StoreContext.Consumer>
    )
};

export default MyPostsContainer;