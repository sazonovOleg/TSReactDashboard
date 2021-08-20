import React from 'react';

import {TaskType} from "./TaskOpenType";

import './style/TaskOpen.scss'
import {TaskComment} from "./TaskOpenCommment";

interface TaskOpenProps {
    task: TaskType,
    onTaskChecked: (task: TaskType) => void
    titleRename: (task: TaskType) => void
}

const TaskOpen = ({task, onTaskChecked, titleRename}: TaskOpenProps): JSX.Element => {
    const [defaultTitle, setNewTitles] = React.useState(task.title);
    const [defaultDescription, setNewDescription] = React.useState(task.description);

    const handleDone = (task: TaskType): void => {
        const newTask: TaskType = {
            ...task,
            isDone: !task.isDone,
            title: defaultTitle
        }
        onTaskChecked(newTask)
    }

    const setNewTitle = (task: TaskType): void => {
        const newTask: TaskType = {
            ...task,
            title: defaultTitle,
            description: defaultDescription
        }
        titleRename(newTask)
    }

    React.useEffect(() => {
        setNewTitles(task.title)
        setNewDescription(task.description)
    }, [task.title])

    return (
        <div className="task-open">
            <div className="task-open-header">
                <h2 className="app-title app-title--open">
                    <div className="wrap">
                        <textarea className="app-title"
                                  value={defaultTitle}
                                  onChange={event => setNewTitles(event.target.value)}
                        />
                        <a className="change-rename" onClick={() => setNewTitle(task)}>&#9998;</a>
                    </div>
                </h2>
                <div className="wrap">
                    <span className="task-open-by">{task.author}</span>
                    <span className="task-open-by">{' ' + task.createdAt}</span>
                </div>
                <div className="task-open-wrap row">
                    <input type="checkbox" checked={task.isDone} onChange={() => handleDone(task)}
                           className="task-open-checkbox"/>
                    <a className="task-open-set">
                        ...
                    </a>
                </div>
            </div>
            <div className="task-open-info">

                <div className="col">
                    <h3 className="task-open-subtitle">
                        Assign To
                    </h3>
                    <div className="row">
                        <img src={task.avatar} alt=""/>
                        {task.author}
                    </div>
                </div>

                <div className="col">
                    <h3 className="task-open-subtitle">
                        Due On
                    </h3>
                    <div className="row">
                        {task.dueOn}
                    </div>
                </div>

                <div className="col">
                    <h3 className="task-open-subtitle">
                        Tag
                    </h3>
                    {task.tag.map((tag) =>
                        <span key={tag} className={"task-open-tag" + ' ' + `task-open-tag--${tag}`}>{tag}</span>)}
                </div>

                <div className="col">
                    <h3 className="task-open-subtitle">
                        Followers
                    </h3>
                    <div className="row">
                        {task.followers.map((follower) => <img key={follower} src={follower}/>)}
                    </div>
                </div>
            </div>

            <div className="task-open-description">
                <h2 className="task-open-subtitle">
                    Description
                </h2>
                <div className="wrap">
                    <textarea className="task-open-text" value={defaultDescription}
                              onChange={event => setNewDescription(event.target.value)}
                    />
                    <a className="change-rename" onClick={() => setNewTitle(task)}>&#9998;</a>
                </div>
            </div>

            <TaskComment comments={task.comments}/>
        </div>
    );
};

export {TaskOpen};
