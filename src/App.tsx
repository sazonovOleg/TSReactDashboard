import React from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Task } from './components/Task'
import { SidebarPopup } from './components/Sidebar/SidebarPopup'
import avatar from './assets/sidebar/projects/Icon-2.svg'

import { StyledApp, StyledContent } from './style'

function App() {
    const [sidebarPopup, setShowSidebarPopup] = React.useState<boolean>(true)
    //TODO  стейт до рендеринга
    const [projectStateInfo, setProjectTitleState] = React.useState(['Website', avatar])

    const setSidebarPopup = (): void => {
        setShowSidebarPopup(!sidebarPopup)
    }

    return (
        <StyledApp>
            <Sidebar setNewTitle={setProjectTitleState} showSidebar={setSidebarPopup} />
            <StyledContent>
                <Header info={projectStateInfo} />
                <Task />
            </StyledContent>
            {!sidebarPopup && <SidebarPopup showSidebar={setSidebarPopup} />}
        </StyledApp>
    )
}

export default App
