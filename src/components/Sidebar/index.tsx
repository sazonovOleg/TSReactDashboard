import React from 'react'
import { SidebarMenu } from './SidebarMenu'

import { SIDEBAR } from './data'

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
    showSidebar: () => void
}

const Sidebar = ({ showSidebar }: SidebarProps): JSX.Element => {
    const [userInfo, getUserInfo] = React.useState<any | undefined>()

    //TODO разобраться с типизацией documentData
    React.useEffect(() => {
        getLoginUser().then(function(documentData: any | undefined) {
            getUserInfo(documentData)
        })
    },[getUserInfo])

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
            {SIDEBAR && SIDEBAR.map((item) => {
                return (<SidebarMenu
                        title={item.title}
                        items={item.items}
                        key={item.title}
                        button={item.button}
                        addButton={showSidebar}
                    />
                )
            })}
        </StyledSidebarWrap>
    )
}

export { Sidebar }