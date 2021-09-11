import React from 'react';
import {Header} from "./components/Header/";
import {Sidebar} from "./components/Sidebar";
import {Task} from "./components/Task/";
import {SidebarPopup} from "./components/Sidebar/SidebarPopup/";

import {StyledApp, StyledContent} from './style'

function App() {
    const [sidebarPopup, setShowSidebarPopup] = React.useState<boolean>(true)

    const setSidebarPopup = ():void => {
        setShowSidebarPopup(!sidebarPopup)
    }

    return (
        <StyledApp>
            <Sidebar showSidebar={setSidebarPopup}/>
            <StyledContent>
                <Header/>
                <Task/>
            </StyledContent>
            {!sidebarPopup && <SidebarPopup showSidebar={setSidebarPopup}/>}
        </StyledApp>
    );
}

export default App;
