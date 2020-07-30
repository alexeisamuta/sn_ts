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
                    <Route path='/dialogs' render={() => <Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}/>}/>
                    <Route path='/profile' render={() => <Profile profilePage={state.profilePage} updatePostText={props.store.updatePostText.bind(props.store)} addPost={props.store.addPost.bind(props.store)}/> }/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
