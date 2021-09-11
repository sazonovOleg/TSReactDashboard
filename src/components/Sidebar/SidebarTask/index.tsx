import React from 'react'
import { SidebarTaskProps } from './SidebarTaskType'
import { StyledTaskInfo, TaskInfoTitle, TaskInfoText, StyledCol } from './style'

const SidebarTask = ({ info }: SidebarTaskProps): JSX.Element => {
    return (
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
    )
}

export { SidebarTask }