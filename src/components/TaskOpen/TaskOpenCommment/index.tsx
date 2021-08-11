import React from 'react';
import {TaskOpenItems} from "../TaskOpenType";

interface TaskOpenCommentType {
    items: TaskOpenItems[]
}

const TaskOpenComment = ({items}: TaskOpenCommentType): JSX.Element => {

    return (
        <div className="task-open-discussion">
            {items.map(({title, preview}) => {
                return (
                    <div key={title}>
                        <h2 className="task-open-subtitle">
                            {title}
                        </h2>
                        <form action="">
                            <img src={preview} alt=""/>
                            <input type="text"/>
                        </form>
                    </div>
                )
            })}
        </div>
    );
};

export {TaskOpenComment};
