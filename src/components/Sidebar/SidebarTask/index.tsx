import React from 'react'
import { SidebarTaskProps } from './SidebarTaskType'
import { StyledTaskInfo, TaskInfoTitle, TaskInfoText } from './style'

const SidebarTask = ({ info }: SidebarTaskProps): JSX.Element => {
    return (
        <StyledTaskInfo className='container'>
            {info?.map(({ taskCount, taskText }, index) => {
                return (
                    <div className='col' key={index}>
                        <TaskInfoTitle>{taskCount}</TaskInfoTitle>
                        <TaskInfoText>{taskText}</TaskInfoText>
                    </div>
                )
            })}
        </StyledTaskInfo>
    )
}

export { SidebarTask }