import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";


export type HeaderContainerType = {
    isAuth: boolean
    login: string | null
    getAuthUserData: () => void
}

class HeaderContainer extends React.Component<HeaderContainerType, any>{

    componentDidMount() {
        this.props.getAuthUserData()
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


export default connect(mapStateToProps, {getAuthUserData}) (HeaderContainer);