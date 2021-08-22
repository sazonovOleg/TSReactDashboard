import React from 'react';

import './style/TasksButton.scss'

interface TasksButtonProps {
    text:string
    onClick: () => void
    disabled?: any
}

const  TasksButton= ({text, onClick, disabled}: TasksButtonProps): JSX.Element => {
  return (
      <button disabled={disabled} onClick={onClick} className="tasks-button">
          {text}
      </button>
  );
};

export { TasksButton };
