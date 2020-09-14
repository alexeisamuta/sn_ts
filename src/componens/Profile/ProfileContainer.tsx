import React, {ComponentClass} from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom"
import {RouteComponentProps} from "react-router";
import {compose} from "redux";
import {usersAPI} from "../../api/api";


/*type ProfileType = {
    profilePage: profilePageType
    dispatch:(action: ActionsTypes) => void
}*/

type contactsType = {
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string
}

type photoType = {
    small: string
    large: string
}

export type UsersProfileType = {
    aboutMe: string,
    contacts: contactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: photoType
}


// export type ProfileContainerType = {
//     profile: UsersProfileType
//     setUsersProfile: (profile: UsersProfileType) => void
// }

type mapStateToPropsType = {
    profile: UsersProfileType
    isAuth: boolean
}

type mapDispatchTopPropsType = {
    //setUsersProfile: (profile: UsersProfileType) => void
    getUserProfile: (userId: string) => void
}

type PathParamsType = {
    userId: string,
}

type PropsType = mapStateToPropsType & mapDispatchTopPropsType & RouteComponentProps<PathParamsType>


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2";
        }
        this.props.getUserProfile(userId)

    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"}/>;
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
};

let mapStateToProps = (state: any): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);