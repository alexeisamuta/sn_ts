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

export type PropsType = {
    // store: any
}
const App: React.FC<PropsType> = (props) => {

    /*const state = props.store.getState();*/


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                    <Route path='/settings' component={Settings}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
