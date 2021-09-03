import React from 'react';

import {SidebarProfile} from './SidebarProfile'
import {SidebarMenu} from "./SidebarMenu";
import {SidebarTask} from "./SidebarTask";

import { SIDEBAR, SIDEBAR_PROFILE, SIDEBAR_TASK_INFO } from './data'

import './styles/Sidebar.scss';
import { SearchIcon, SidebarLogo, SidebarWrap } from './style'

import sidebarLogo from '../../assets/logos/sidebar-logo.svg'
import searchIcon from '../../assets/sidebar/icon-search.svg'

interface SidebarProps {
    showSidebar: () => void
}

//TODO sidebar-header

const Sidebar = ({showSidebar}: SidebarProps): JSX.Element => {

    return (
        <SidebarWrap>
            <div className="sidebar-header container">
                <h1 className="sidebar-title">
                    <SidebarLogo src={sidebarLogo} alt='logo' />
                    PROJECTUS
                </h1>
                <div className="sidebar-search">
                    <SearchIcon src={searchIcon}/>
                </div>
            </div>
            <SidebarProfile
                images={SIDEBAR_PROFILE.images}
                name={SIDEBAR_PROFILE.name}
                position={SIDEBAR_PROFILE.position}
            />
            <SidebarTask info={SIDEBAR_TASK_INFO}/>
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
        </SidebarWrap>
    )
}

export {Sidebar}