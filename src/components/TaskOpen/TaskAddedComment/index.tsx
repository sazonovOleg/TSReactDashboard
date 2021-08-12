import React from 'react';
import {TaskCommentsProps} from "../TaskOpenType";

import '../TaskAddedComment/style/TaskAddedComment.scss';

interface TaskAddedCommentProps {
    comments?:TaskCommentsProps[]
}

const TaskAddedComment = ({comments}: TaskAddedCommentProps): JSX.Element => {
    console.log(comments)
  return (
      <div className="task-added-comment">
          {comments?.map(({preview,first_name,last_name,position,date,text})=> {
              return(
                  <div className="comment" key={first_name}>
                      <img className="comment-preview" src={preview} alt=""/>
                      <div className="comment-wrapper">
                          <div className="comment-header">
                              <div className="comment-info">
                                  <span className="comment-name comment-name--first">{first_name + ' '}</span>
                                  <span className="comment-name comment-name--last">{last_name},</span>
                                  {' ' + position}
                              </div>
                              <span className="comment-date">{date}</span>
                          </div>
                          <p className="comment-text">
                              {text}
                          </p>
                      </div>
                  </div>
              )
          })}
      </div>
  );
};

export { TaskAddedComment };
