import React, { Suspense } from 'react';
import './App.css';
import Navbar from "./componens/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom'
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

    componentDidMount() {
        this.props.initializeApp()
    }


    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={() => {
                           return <Suspense fallback={<div>Загрузка...</div>}>
                            <DialogsContainer/>
                           </Suspense>
                        }}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state: any) => ({
    initialized: state.app.initialized
})

export default compose(
    // withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
