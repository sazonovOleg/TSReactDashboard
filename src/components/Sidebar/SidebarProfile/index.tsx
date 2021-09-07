import React from 'react';
import {HeaderProfileProps} from "./SidebarProfileType";
import {StyledSidebarProfile, Avatar} from './style'

const SidebarProfile = ({name,images,position}:HeaderProfileProps):JSX.Element => {
    return (
        <StyledSidebarProfile className="container">
            <Avatar src={images} alt="ava" />
            <div className="sidebar-wrap">
                <p className="sidebar-name">
                    {name}
                </p>
                <p className="sidebar-profile-position">
                    {position}
                </p>
            </div>
            <div className="sidebar-setup">
                ...
            </div>
        </StyledSidebarProfile>
    )
}

export {SidebarProfile}