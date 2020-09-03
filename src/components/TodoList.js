import React from 'react';
import Task from './Task';

const TodoList = (props) => {
    return (
        <div>
            {props.tasks.map((task) =>(
                <Task key={task.id} task={task} toggleTask={props.toggleTask} />
            ))}
            <button onClick={props.clearCompleted}>Clear Completed
            </button>
            <button onClick={props.clearAll}>Clear All</button>
        </div>
    );
};

export default TodoList;