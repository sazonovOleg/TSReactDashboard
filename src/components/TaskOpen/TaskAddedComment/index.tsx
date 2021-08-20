import React from 'react';
import {CommentType} from "../TaskOpenType";

import '../TaskAddedComment/style/TaskAddedComment.scss';

interface TaskAddedCommentProps {
    comments: CommentType[]
}

const TaskAddedComment = ({comments}: TaskAddedCommentProps): JSX.Element => {
  return (
      <div className="task-added-comment">
          {comments?.map(comment => {
              return(
                  <div className="comment" key={comment.name}>
                      <img className="comment-preview" src={comment.avatar} alt=""/>
                      <div className="comment-wrapper">
                          <div className="comment-header">
                              <div className="comment-info">
                                  <span className="comment-name comment-name--first">{comment.name}</span>
                                  {' ' + comment.position}
                              </div>
                              <span className="comment-date">{comment.createdAt}</span>
                          </div>
                          <p className="comment-text">
                              {comment.comment}
                          </p>
                      </div>
                  </div>
              )
          })}
      </div>
  );
};

export { TaskAddedComment };
