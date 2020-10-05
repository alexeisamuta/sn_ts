import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";


export type HeaderContainerType = {
    isAuth: boolean
    login: string | null
    // getAuthUserData: () => void
    logout: () => void
}

class HeaderContainer extends React.Component<HeaderContainerType, any>{



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


export default connect(mapStateToProps, {logout}) (HeaderContainer);