import React from 'react';

import {TaskOpenItems, TaskCommentsType} from "../TaskOpenType";

import './style/TaskOpenComment.scss';

import preview1 from "../../../assets/comments/taskopen/preview-1.png";
import preview2 from "../../../assets/comments/taskopen/preview-2.png";
import {TaskAddedComment} from "../TaskAddedComment";

interface TaskOpenCommentType {
    items: TaskOpenItems[],
}


const TASK_OPEN_COMMENTS:TaskCommentsType = {
    comments: [{
        preview: preview1,
        first_name:'Helena',
        last_name: 'Brauer',
        position: 'Designer',
        date: 'Yesterday at 12:37pm',
        text: 'During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes',
    },{
        preview: preview2,
        first_name:'Prescott',
        last_name: 'MacCaffery',
        position: 'Developer',
        date: 'Yesterday at 12:37pm',
        text: 'Software quality assurance activity in which one or several humans check a program mainly',
    }]
}

const TaskOpenComment = ({items}: TaskOpenCommentType): JSX.Element => {

    return (
        <div className="task-open-comment">
            {items.map(({title, preview}) => {
                return (
                    <div key={title}>
                        <h2 className="task-open-subtitle">
                            {title}
                        </h2>
                        <form action="">
                            <img className="task-open-comment-preview task-open-comment-preview--form" src={preview} alt=""/>
                            <input type="text" placeholder="Add a comment…"/>
                        </form>
                    </div>
                )
            })}
            <TaskAddedComment comments={TASK_OPEN_COMMENTS.comments}/>
        </div>
    );
};

export {TaskOpenComment};
