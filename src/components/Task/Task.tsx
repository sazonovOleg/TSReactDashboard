import React, {useState} from 'react';

import {TasksList} from "./TasksList";
import {TaskOpen} from "./TaskOpen";

import {TASK_CATEGORY, TaskType} from "./TaskOpen/TaskOpenType";
import {TASKS_LIST} from "./TasksList/data";

const Task = (): JSX.Element => {
    const [tasks, setTasks] = useState<TaskType[]>(TASKS_LIST)

    const openedTask = tasks.find(task => task.isOpened) || TASKS_LIST[0]
    const todoTasks = tasks.filter((task) => task.category === TASK_CATEGORY.TODO);
    const backlogTasks = tasks.filter((task) => task.category === TASK_CATEGORY.BACKLOG);

    const handleDone = (checkedTask: TaskType) => {
        const newTasks = tasks.map((task) => {
            if (task.id === checkedTask.id) {
                return checkedTask
            }
            return task
        })

        setTasks(newTasks)
    }

    const setOpenedTask = (openedTask: TaskType) => {
        const newTasks = tasks.map((task) => {
            return {
                ...task,
                isOpened: openedTask.id === task.id
            }
        })

        setTasks(newTasks)
    }

    const createNewTask = (newTask:TaskType) => {
        const newTasks = [newTask, ...tasks];
        setTasks(newTasks);
    }

    return (
        <div className="app-container">
            <div className="app-task">
                <TasksList title={'BACKLOG'}
                           isOpenTaskId={openedTask.id}
                           tasks={backlogTasks}
                           onTaskClick={setOpenedTask}
                           onTaskChecked={handleDone}
                           onTaskCreated={createNewTask}
                />
                <TasksList title={'TODO'}
                           isOpenTaskId={openedTask.id}
                           tasks={todoTasks}
                           onTaskClick={setOpenedTask}
                           onTaskChecked={handleDone}
                           onTaskCreated={createNewTask}
                />
            </div>
            <TaskOpen task={openedTask} onTaskChecked={handleDone}/>
        </div>
    );
};

export {Task};
