import React from 'react';
import {Header} from "./components/Header/";
import {Sidebar} from "./components/Sidebar";
import {Task} from "./components/Task/Task";

import {SIDEBAR} from "./components/Sidebar/data";

import './App.scss';

function App() {

    return (
        <div className="app">
            <Sidebar menu={SIDEBAR}/>
            <div className="app-content">
                <Header title="Website" btn="..."/>
                <Task/>
            </div>
        </div>
    );
}

export default App;
