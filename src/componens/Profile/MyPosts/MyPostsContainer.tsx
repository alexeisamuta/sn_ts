import React from 'react';
import {addPostAC, updatePostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";




/*function MyPostsContainer(props: MyPostsContainerType) {


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
};*/

let mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updatePostTextAC: (text: any) => {
            dispatch(updatePostTextAC(text))
        }

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;