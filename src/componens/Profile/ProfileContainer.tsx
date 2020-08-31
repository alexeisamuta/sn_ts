import React, {ComponentClass} from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUsersProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom"
import {RouteComponentProps} from "react-router";
import {compose} from "redux";


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
    contacts:contactsType,
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

type mapDispatchTopPropsType = {
    setUsersProfile: (profile: UsersProfileType) => void
}

type PathParamsType = {
    userId: string,
}

type PropsType = mapStateToPropsType & mapDispatchTopPropsType & RouteComponentProps<PathParamsType>



class ProfileContainer extends React.Component<PropsType>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2";
        }
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUsersProfile(response.data)
        })
    }

    render() {
        return (
           <Profile {...this.props} profile={this.props.profile}/>
        );
    }
};

let mapStateToProps = (state: any): mapStateToPropsType => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent =  withRouter(ProfileContainer)


export default connect(mapStateToProps,{setUsersProfile})(withUrlDataContainerComponent);