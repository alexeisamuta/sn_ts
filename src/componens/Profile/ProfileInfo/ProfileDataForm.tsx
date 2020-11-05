import React from "react";

export const ProfileDataForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <input/>
        </div>
        <div>
            <button onClick={props.goToEditMode}>save</button>
        </div>
        <div>
            <b>Full name</b>: {props.profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {props.profile.lookingForAJob ? "Yes" : "No"}
        </div>
        {props.profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me</b>: {props.profile.aboutMe}
        </div>
    </form>
}

