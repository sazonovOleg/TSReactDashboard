import React from 'react';
import {HeaderProfileProps} from "./SidebarProfileType";
import { StyledSidebarProfile, Avatar, StyledName, StyledSetup, StyledPosition, StyledWrap } from './style'

const SidebarProfile = ({name,images,position}:HeaderProfileProps):JSX.Element => {
    return (
        <StyledSidebarProfile>
            <Avatar src={images} alt="ava" />
            <StyledWrap>
                <StyledName>
                    {name}
                </StyledName>
                <StyledPosition>
                    {position}
                </StyledPosition>
            </StyledWrap>
            <StyledSetup>
                ...
            </StyledSetup>
        </StyledSidebarProfile>
    )
}

export {SidebarProfile}