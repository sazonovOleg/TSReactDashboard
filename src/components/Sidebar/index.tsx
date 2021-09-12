import React from 'react'
import { SidebarMenu } from './SidebarMenu'

import { SIDEBAR, SIDEBAR_PROFILE } from './data'

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

interface SidebarProps {
    showSidebar: () => void
}

const Sidebar = ({ showSidebar }: SidebarProps): JSX.Element => {

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
            <SidebarHeader
                images={SIDEBAR_PROFILE.images}
                name={SIDEBAR_PROFILE.name}
                position={SIDEBAR_PROFILE.position}
                info={SIDEBAR_PROFILE.info}
            />
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