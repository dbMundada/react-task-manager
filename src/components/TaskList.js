import React from 'react';
import { STATUS } from '../common/common';
import taskManager from '../services/task-manager.service';

const DateRender = ({ val }) => {
    const date = new Date(val);
    const dateStr = date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();
    return (
      <td>{dateStr}</td>
    );
};

const Status = ({ id }) => <span>{STATUS[id]}</span>;

const TaskList = ({ updateTasks, tasks }) => {
    const deleteTask = (id) => {
      taskManager.delete(id);
      updateTasks();
    };

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Priority</th>
            <th>Due Date</th>
            <th>Created At</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          tasks.map(task => {
            return <tr key={task.id}>
              <td>{task.name}</td>
              <td>P{task.priority}</td>
              <DateRender val={task.dueDate} />
              <td>{task.createdAt}</td>
              <td><Status id={task.status} /></td>
              <td><button onClick={() => deleteTask(task.id)}>Delete</button></td>
            </tr>;
          })
        }
        </tbody>
      </table>
    );
}

export default TaskList;
