import React from 'react';

import './style/TasksButton.scss'

interface Props {
    text:string
    onClick: () => void
}

const  TasksButton= ({text, onClick}: Props): JSX.Element => {
  return (
      <button onClick={onClick} className="tasks-button">
          {text}
      </button>
  );
};

export { TasksButton };
