import React from 'react';
import {HeaderProfileProps} from "./SidebarProfileType";

import './style/SidebarProfile.scss';

const SidebarProfile = ({name,images,position}:HeaderProfileProps):JSX.Element => {
    return (
        <div className="sidebar-profile container">
            <img src={images} alt="" className="sidebar-avatar"/>
            <div className="sidebar-wrap">
                <p className="sidebar-profile-name">
                    {name}
                </p>
                <p className="sidebar-profile-position">
                    {position}
                </p>
            </div>
            <div className="sidebar-profile-setup">
                ...
            </div>
        </div>
    )
}

export {SidebarProfile}