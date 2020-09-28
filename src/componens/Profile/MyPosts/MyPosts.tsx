import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {postsType} from "../../../redux/store";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const maxLength10 = maxLengthCreator(10)


type MyPostType = {
    posts: Array<postsType>
    addPost: (newPostText: string) => void
    newPostText: string
}


function MyPosts(props: MyPostType) {

    let postsElements = props.posts.map(props => <Post message={props.message} likesCount={props.likesCount}/>)

    let refElement = React.createRef<HTMLTextAreaElement>();


    function addPost(values: any) {
        props.addPost(values.newPostText)

    }

    return (
        <div className={s.postsBlock}>
            <h3> my posts </h3>
            <AddNewPostReduxForm onSubmit={addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );
};

const AddNewPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"}
                       component={Textarea}
                       validate={[required, maxLength10]}
                       placeholder={"Post message"}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostReduxForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;