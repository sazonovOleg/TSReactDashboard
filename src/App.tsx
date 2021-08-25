import React from 'react';
import {Header} from "./components/Header/";
import {Sidebar} from "./components/Sidebar";
import {Task} from "./components/Task/Task";

import {SIDEBAR} from "./components/Sidebar/data";

import './App.scss';
import {SidebarPopup} from "./components/Sidebar/SidebarPopup/SidebarPopup";

function App() {
    const [sidebarPopup, setShowSidebarPopup] = React.useState<boolean>(true)

    const setSidebarPopup = () => {
        setShowSidebarPopup(!sidebarPopup)
    }

    return (
        <div className="app">
            <Sidebar showSidebar={setSidebarPopup} menu={SIDEBAR}/>
            <div className="app-content">
                <Header title="Website" btn="..."/>
                <Task/>
            </div>
            {!sidebarPopup && <SidebarPopup showSidebar={setSidebarPopup}/>}
        </div>
    );
}

export default App;
