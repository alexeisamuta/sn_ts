import React, { Suspense } from 'react';
import './App.css';
import Navbar from "./componens/Navbar/Navbar";
import {HashRouter, Route, Redirect} from 'react-router-dom'
import Music from "./componens/Music/Music";
import News from "./componens/News/News";
import Settings from "./componens/Settings/Settings";

import UsersContainer from "./componens/Users/UsersContainer";
import ProfileContainer from "./componens/Profile/ProfileContainer";
import HeaderContainer from "./componens/Header/HeaderContainer";
import Login from "./componens/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./componens/common/Preloader/Preloader";
import {compose} from "redux";

// import DialogsContainer from "./componens/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import("./componens/Dialogs/DialogsContainer"));


export type PropsType = {
    initialized: boolean
    initializeApp: () => void
}

class App extends React.Component<any> {

    catchAllErrors = (promiseRejectionEvent: any) => {
        alert("Some error accured")
        console.log(promiseRejectionEvent)
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener("unhandledrejection", this.catchAllErrors)
    }
    componentWillUnmount() {
        window.addEventListener("unhandledrejection", this.catchAllErrors)
    }


    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <HashRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={() => {
                           return <Suspense fallback={<div>Загрузка...</div>}>
                            <DialogsContainer/>
                           </Suspense>
                        }}/>
                        <Route exact path='/' render={() => <Redirect to={"/profile"}/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

const mapStateToProps = (state: any) => ({
    initialized: state.app.initialized
})

export default compose(
    // withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
