import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";


export type HeaderContainerType = {
    isAuth: boolean
    login: string | null
    setAuthUserData: (id: number, login: string, email: string) => void
}

class HeaderContainer extends React.Component<HeaderContainerType, any>{

    componentDidMount() {
        usersAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                this.props.setAuthUserData(id, login, email)
            }

        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: any) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}


export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);