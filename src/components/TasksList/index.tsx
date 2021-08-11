import React from 'react';
import classNames from "classnames";

import {TasksListProps} from "./TasksListType";

import './style/TasksList.scss';
import {TasksButton} from "./TasksButton/";


const TasksList = ({title, items}: TasksListProps): JSX.Element => {
    return (
        <div className="tasks-list">
            <div className="tasks-list-wrap row row--jb">
                <h2 className="app-title">
                    {title}
                </h2>
                <TasksButton text="+ Add Task"/>
            </div>
            {items && items.map((items) => {
                return (
                    <div className="tasks-list-col" key={items.text}>
                        <div className="tasks-list-wrap row">
                            <input type="checkbox" checked={items.checkbox} className="tasks-list-checkbox"/>
                            <label className="tasks-list-text">
                                {items.text}
                            </label>
                        </div>
                        <div className="tasks-list-wrap row row--ac">
                            <img className="tasks-list-preview" src={items.preview} alt=""/>
                            <span className="tasks-list-position">{items.position}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export {TasksList};
