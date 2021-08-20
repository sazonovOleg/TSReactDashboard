import React from 'react';

import './style/TasksButton.scss'

interface Props {
    text:string
}

const  TasksButton= ({text}: Props): JSX.Element => {
  return (
      <button className="tasks-button">
          {text}
      </button>
  );
};

export { TasksButton };
