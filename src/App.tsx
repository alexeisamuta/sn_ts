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
import {StoreType} from "./redux/store"
import DialogsContainer from "./componens/Dialogs/DialogsContainer";

export type PropsType = {
   // store: any
}
const App: React.FC<PropsType> = (props) => {

    /*const state = props.store.getState();*/


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/profile' render={() => <Profile /> }/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                </div>
                    <Route path='/settings' component={Settings}/>
                </div>
        </BrowserRouter>
    );
}

export default App;
