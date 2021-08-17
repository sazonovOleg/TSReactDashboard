import React from 'react';
import {TasksList} from "./TasksList";
import {TaskOpen} from "./TaskOpen";
import {TASK_CATEGORY, TaskType} from "./TaskOpen/TaskOpenType";
import {TASKS_LIST} from "./TasksList/data";



const Task = (): JSX.Element => {
    const [openedTask, setOpenedTask] = React.useState<TaskType>(TASKS_LIST[0]);

    const todoTasks = TASKS_LIST.filter((task) => task.category === TASK_CATEGORY.TODO);
    const backlogTasks = TASKS_LIST.filter((task) => task.category === TASK_CATEGORY.BACKLOG);
    return (
      <div className="app-container">
          <div className="app-task">
              <TasksList title={'BACKLOG'}
                         tasks={backlogTasks}
                         onTaskClick={(task => {setOpenedTask(task)})}
              />
              <TasksList title={'TODO'}
                         tasks={todoTasks}
                         onTaskClick={(task => {setOpenedTask(task)})}
              />
          </div>
          <TaskOpen task={openedTask}/>
      </div>
  );
};

export { Task };
