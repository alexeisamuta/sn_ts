import React, {ComponentClass} from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom"
import {RouteComponentProps} from "react-router";
import {compose} from "redux";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


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
}

export type mapStateToPropsForRedirectType = {
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
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
};
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
//
// let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)

let mapStateToProps = (state: any): mapStateToPropsType => ({
    profile: state.profilePage.profile,
})
// connect(mapStateToProps, {getUserProfile})
// withRouter,

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getUserProfile}))(ProfileContainer);


// connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);