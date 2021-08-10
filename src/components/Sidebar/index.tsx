import React from 'react';

import {SidebarProfile} from '../'
import {SidebarMenu} from "./SidebarMenu";
import {SidebarMenuProps} from "./SidebarMenu/SidebarMenuType";
import {SidebarTask} from "./SidebarTask/SidebarTask";

import {TaskInfoType} from "./SidebarTask/SidebarTaskType";
import {HeaderProfileProps} from "./SidebarProfile/SidebarProfileType";


import './styles/Sidebar.scss';

import avatar from '../../assets/sidebar/avatar.png';

const SIDEBAR_PROFILE: HeaderProfileProps = {
    images: avatar,
    name: 'Emilee Simchenko',
    position: 'Product Owner'
};

const TASK_INFO: TaskInfoType[] = [
    {taskCount: 372, taskText: 'Completed Tasks'},
    {taskCount: 11, taskText: 'Open Tasks'},
]

interface SidebarProps {
    menu:  SidebarMenuProps[]
}

const Sidebar = ({menu}: SidebarProps): JSX.Element => {
    return (
        <div className="sidebar">
            <div className="sidebar-header container">
                <h1 className="sidebar-title">
                    <svg className="sidebar-logo" width="23" height="20" viewBox="0 0 23 20" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M8.90425 0.937311C9.43383 0.41043 10.2904 0.413132 10.8172 0.940013C11.3441 1.46689 11.3441 2.32341 10.8172 2.85029L5.41333 8.2542C5.14854 8.51629 4.80269 8.64869 4.45684 8.64869C4.11099 8.64869 3.76514 8.51629 3.50305 8.2515L0.801093 5.54955C0.274212 5.02266 0.274212 4.16615 0.801093 3.63926C1.32797 3.11238 2.18449 3.11238 2.71137 3.63926L4.45684 5.38743L8.90425 0.937311ZM8.90425 11.7451C9.43383 11.2182 10.2904 11.2209 10.8172 11.7478C11.3441 12.2747 11.3441 13.1312 10.8172 13.6581L5.41333 19.062C5.14854 19.3241 4.80269 19.4565 4.45684 19.4565C4.11099 19.4565 3.76514 19.3241 3.50305 19.062L0.801093 16.3601C0.274212 15.8332 0.274212 14.9767 0.801093 14.4498C1.32797 13.9229 2.18449 13.9229 2.71137 14.4498L4.45684 16.1952L8.90425 11.7451ZM20.6686 3.24478H15.2646C14.5189 3.24478 13.9137 3.85002 13.9137 4.59576C13.9137 5.34149 14.5189 5.94673 15.2646 5.94673H20.6686C21.4143 5.94673 22.0195 5.34149 22.0195 4.59576C22.0195 3.85002 21.4143 3.24478 20.6686 3.24478ZM15.2646 14.0526H20.6686C21.4143 14.0526 22.0195 14.6578 22.0195 15.4036C22.0195 16.1493 21.4143 16.7545 20.6686 16.7545H15.2646C14.5189 16.7545 13.9137 16.1493 13.9137 15.4036C13.9137 14.6578 14.5189 14.0526 15.2646 14.0526Z"
                              fill="#FFC200"/>
                    </svg>
                    PROJECTUS
                </h1>
                <div className="sidebar-search">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" fillRule="evenodd" clipRule="evenodd"
                              d="M15.6084 13.7175L12.1325 10.2417C12.114 10.2232 12.0924 10.2103 12.0731 10.1931C12.757 9.15561 13.1562 7.91371 13.1562 6.57816C13.1562 2.94512 10.2111 0 6.57809 0C2.94512 0 0 2.94512 0 6.57809C0 10.211 2.94506 13.1562 6.57803 13.1562C7.91364 13.1562 9.15549 12.757 10.193 12.0731C10.2102 12.0923 10.223 12.114 10.2415 12.1324L13.7175 15.6084C14.2396 16.1305 15.0862 16.1305 15.6084 15.6084C16.1305 15.0863 16.1305 14.2397 15.6084 13.7175ZM6.57809 10.8758C4.20448 10.8758 2.28035 8.95164 2.28035 6.57809C2.28035 4.20448 4.20455 2.28035 6.57809 2.28035C8.95158 2.28035 10.8758 4.20455 10.8758 6.57809C10.8758 8.95164 8.95158 10.8758 6.57809 10.8758Z"
                              fill="white"/>
                    </svg>
                </div>
            </div>
            <SidebarProfile
                images={SIDEBAR_PROFILE.images}
                name={SIDEBAR_PROFILE.name}
                position={SIDEBAR_PROFILE.position}
            />

            <SidebarTask info={TASK_INFO}/>

            {menu && menu.map((item) => {
                return (<SidebarMenu title={item.title} items={item.items}/>
                )
            })}
        </div>
    )
}

export {Sidebar}