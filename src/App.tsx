import React from 'react';
import './App.css';
import {Header} from "./components/Header/header";
import {SideBar} from "./components/Sidebar/sideBar";
import ContentContainer from "./components/Content/contentContainer";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import {News} from "./components/News/news";
import {Music} from "./components/Music/music";
import {Settings} from "./components/Settings/settings";
import {DialogsContainer} from "./components/Dialogs/dialogsContainer";
import { UsersContainer} from "./components/Users/UsersContainer";

function App() {
    return (
        <HashRouter>
        <div className="homepage">
            <Header />
            <SideBar />
            <div className='content'>
                <Route path="/messages" render={() => <DialogsContainer/>} />
                <Route path="/profile/:userID?" render={() => <ContentContainer/>}/>
                <Route path="/news" render={() => <News/>} />
                <Route path="/music" render={() => <Music/>} />
                <Route path="/users" render={() => <UsersContainer/>} />
                <Route path="/settings" render={() => <Settings/>} />
            </div>
        </div>
        </HashRouter>
    );
}

export default App;
