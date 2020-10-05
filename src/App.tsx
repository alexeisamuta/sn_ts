import React from 'react';
import './App.css';
import Navbar from "./componens/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom'
import Music from "./componens/Music/Music";
import News from "./componens/News/News";
import Settings from "./componens/Settings/Settings";
import DialogsContainer from "./componens/Dialogs/DialogsContainer";
import UsersContainer from "./componens/Users/UsersContainer";
import ProfileContainer from "./componens/Profile/ProfileContainer";
import HeaderContainer from "./componens/Header/HeaderContainer";
import Login from "./componens/Login/Login";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./componens/common/Preloader/Preloader";
import {compose} from "redux";

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
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
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
