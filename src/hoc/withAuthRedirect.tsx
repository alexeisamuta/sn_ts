import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {mapStateToPropsForRedirectType} from "../componens/Profile/ProfileContainer";


let mapStateToPropsForRedirect = (state: any): mapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component: any) => {

    class RedirectComponent extends React.Component<any, any>{
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>;
            return <Component {...this.props}/>
        }
    }


    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;

}