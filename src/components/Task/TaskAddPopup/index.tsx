import React, {useState} from 'react';
import {TaskType} from "../TaskOpen/TaskOpenType";
import {SIDEBAR_PROFILE} from "../../Sidebar/data";
import {TasksButton} from "../TasksButton";

import { StyledForm, StyledPopup, StyledPopupContainer } from './style'
import { StyledColumn } from '../../../commonStyled/StyledCol'

interface TaskAddPopupProps {
    title: string,
    onClickCreateTask: (task: TaskType) => void,
    onClose: () => void
}

const Index = ({title, onClickCreateTask, onClose}: TaskAddPopupProps): JSX.Element => {
    const [taskTitle, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    //ToDo переписать таску
    const newAddedTask: TaskType = {
        id: Date.now(),
        category: title,
        isDone: false,
        title:taskTitle,
        author: SIDEBAR_PROFILE.name,
        avatar: '',
        createdAt: 'Now',
        assignTo: '',
        dueOn: 'Tue, Dec 25',
        tag: ['development'],
        followers: [],
        comments: [],
        description,
        isOpened: false
    }

    return (
        <StyledPopup>
            <StyledPopupContainer>
                <h2 className="popup-title">
                    {title}
                </h2>
                <span className="close" onClick={onClose}>&times;</span>
                <StyledForm>
                    <StyledColumn>
                        <h3 className="form-title">
                            Title
                        </h3>
                        <input
                            onChange={(event => setTitle(event.target.value))}
                            value={taskTitle}
                            type="text"
                            className="form-input"/>
                    </StyledColumn>
                    <StyledColumn>
                        <h3 className="form-title">
                            Description
                        </h3>
                        <textarea
                            onChange={(event => setDescription(event.target.value))}
                            value={description}
                            className="form-input form-input--textarea"/>
                    </StyledColumn>
                    <TasksButton
                        text={'Create Task'}
                        onClick={() => {onClickCreateTask(newAddedTask)
                            onClose()}}
                        disabled={!Boolean(taskTitle) || !Boolean(description)}
                    />
                </StyledForm>
            </StyledPopupContainer>
        </StyledPopup>
    );
};

export {Index};
