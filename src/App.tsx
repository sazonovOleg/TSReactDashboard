import React from 'react';
import {Header} from "./components/Header/";
import {Sidebar} from "./components/Sidebar";
import {Task} from "./components/Task/";

import './App.scss';
import {SidebarPopup} from "./components/Sidebar/SidebarPopup/";

function App() {
    const [sidebarPopup, setShowSidebarPopup] = React.useState<boolean>(true)

    const setSidebarPopup = () => {
        setShowSidebarPopup(!sidebarPopup)
    }

    return (
        <div className="app">
            <Sidebar showSidebar={setSidebarPopup}/>
            <div className="app-content">
                <Header/>
                <Task/>
            </div>
            {!sidebarPopup && <SidebarPopup showSidebar={setSidebarPopup}/>}
        </div>
    );
}

export default App;
