import React from 'react'
import {
    Avatar,
    StyledName,
    StyledPosition,
    StyledSetup,
    StyledSidebarProfile,
    StyledWrap,
    StyledCol,
    StyledTaskInfo,
    TaskInfoText,
    TaskInfoTitle,
} from './style'

export type TaskInfoType = {
    taskCount: number,
    taskText: string
}

export interface SidebarHeaderProps {
    images: string,
    name: string,
    position: string,
    info?: TaskInfoType[]
}

const SidebarHeader = ({ images, name, position, info }: SidebarHeaderProps): JSX.Element => {

    return (
        <div>
            <StyledSidebarProfile>
                <Avatar src={images} alt='ava' />
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
            <StyledTaskInfo>
                {info?.map(({ taskCount, taskText }, index) => {
                    return (
                        <StyledCol key={index}>
                            <TaskInfoTitle>{taskCount}</TaskInfoTitle>
                            <TaskInfoText>{taskText}</TaskInfoText>
                        </StyledCol>
                    )
                })}
            </StyledTaskInfo>
        </div>
    )
}

export { SidebarHeader }
