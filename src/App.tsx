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
import {RootStateType, updatePostText} from "./redux/state"
import {addPost} from "./redux/state";

function App(props: RootStateType) {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs messages={props.dialogsPage.messages} dialogs={props.dialogsPage.dialogs}/>}/>
                    <Route path='/profile' render={() => <Profile posts={props.profilePage.posts}
                                                                  addPost={addPost}
                                                                  newPostText={props.profilePage.newPostText}
                                                                  updatePostText={updatePostText}/> }/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
