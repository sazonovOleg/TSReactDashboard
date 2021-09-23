import React from 'react'
import { SidebarMenu } from './SidebarMenu'

import {
    StyledSearchIcon,
    StyledSidebarLogo,
    StyledSidebarTitle,
    StyledSidebarWrap,
    StyledSidebarHeader,
    StyledSearchWrap,
} from './style'

import sidebarLogo from '../../assets/logos/sidebar-logo.svg'
import searchIcon from '../../assets/sidebar/icon-search.svg'
import { SidebarHeader } from './SidebarHeader'
import { getLoginUser } from '../../service/user'

interface SidebarProps {
    showSidebar: () => void,
    setNewTitle: any
}

const Sidebar = ({ showSidebar, setNewTitle }: SidebarProps): JSX.Element => {
    const [userInfo, setUserInfo] = React.useState<any | undefined>()

    //TODO разобраться с типизацией documentData
    React.useEffect(() => {
        getLoginUser().then(function(loginUserData: any | undefined) {
            setUserInfo(loginUserData)
        })
    }, [setUserInfo])

    return (
        <StyledSidebarWrap>
            <StyledSidebarHeader>
                <StyledSidebarTitle>
                    <StyledSidebarLogo src={sidebarLogo} alt='logo' />
                    PROJECTUS
                </StyledSidebarTitle>
                <StyledSearchWrap>
                    <StyledSearchIcon src={searchIcon} />
                </StyledSearchWrap>
            </StyledSidebarHeader>
            {userInfo && <SidebarHeader
                images={userInfo.avatar}
                firstName={userInfo.firstName}
                lastName={userInfo.lastName}
                position={userInfo.position}
                tasksInfo={userInfo.tasks}
            />
            }
            <SidebarMenu setNewTitle={setNewTitle} addButton={showSidebar} />
        </StyledSidebarWrap>
    )
}

export { Sidebar }