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
    countTask: number,
    nameTask: string
}

export interface SidebarHeaderProps {
    images: string,
    firstName: string,
    lastName: string,
    position: string,
    tasksInfo: TaskInfoType[]
}

const SidebarHeader = ({ images, firstName, lastName, position, tasksInfo }: SidebarHeaderProps): JSX.Element => {

    return (
        <div>
            <StyledSidebarProfile>
                <Avatar src={images} alt='ava' />
                <StyledWrap>
                    <StyledName>
                        {firstName + ' ' + lastName}
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
                {tasksInfo.map(({ countTask, nameTask }, index: number) => {
                    return (
                        <StyledCol key={index}>
                            <TaskInfoTitle>{countTask}</TaskInfoTitle>
                            <TaskInfoText>{nameTask + ' ' + 'Tasks'}</TaskInfoText>
                        </StyledCol>
                    )
                })}
            </StyledTaskInfo>
        </div>
    )
}

export { SidebarHeader }
