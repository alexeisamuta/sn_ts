import React from 'react';
import './App.css';
import Header from "./componens/Header/Header";
import Navbar from "./componens/Navbar/Navbar";
import Profile from "./componens/Profile/Profile";
import Dialogs from "./componens/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom'
import Music from "./componens/Music/Music";
import News from "./componens/News/News";
import Settings from "./componens/Settings/Settings";
import {StoreType} from "./redux/state"

export type PropsType = {
    store: StoreType
}
const App: React.FC<PropsType> = (props) => {

    const state = props.store.getState();


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs  dialogsPage={state.dialogsPage} dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    <Route path='/profile' render={() => <Profile profilePage={state.profilePage} dispatch={props.store.dispatch.bind(props.store)} /> }/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                </div>
                    <Route path='/settings' component={Settings}/>
                </div>
        </BrowserRouter>
    );
}

export default App;
