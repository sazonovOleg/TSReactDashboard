import React from 'react';

import {TaskOpenProps} from "./TaskOpenType";

import './style/TaskOpen.scss'
import {TaskOpenComment} from "./TaskOpenCommment";


const TaskOpen = ({title, subtitle, header_items, description_items,comment_items}: TaskOpenProps): JSX.Element => {
    return (
        <div className="task-open">
            <div className="task-open-header">
                <h2 className="app-title app-title--open">
                    {title}
                    <span className="task-open-by">{subtitle}</span>
                </h2>
                <div className="task-open-wrap row">
                    <input type="checkbox" className="task-open-checkbox"/>
                    <a className="task-open-set">
                        ...
                    </a>
                </div>
            </div>
            <div className="task-open-info">
                {header_items.map(({title, preview, text, followers,color}) => {
                    return (
                        <div className="col" key={title}>
                            <h3 className="task-open-subtitle">
                                {title}
                            </h3>
                            <div className="row">
                                {Boolean(preview) && <img src={preview} alt={preview} className="task-open-preview"/>}
                                <p className="task-open-text" color={color}>{text}</p>
                                {Boolean(followers?.length) &&
                                <div>{followers?.map((followersAvatar, index) =>
                                    <img className="menu-user-avatar" key={followersAvatar} src={followersAvatar}
                                         alt=""/>)}</div>}
                            </div>
                        </div>
                    )
                })}
            </div>
            {description_items.map(({title, text}) => {
                return (
                    <div className="task-open-description" key={title}>
                        <h2 className="task-open-subtitle">
                            {title}
                        </h2>
                        <p className="task-open-text">
                            {text}
                        </p>
                    </div>
                )
            })}
            <TaskOpenComment items={comment_items}/>
        </div>
    );
};

export {TaskOpen};
