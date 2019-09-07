import React, { Component } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';
import { sortKeys } from '../common/common';
import taskManager from '../services/task-manager.service';

class TaskManager extends Component {
  state = {
    tasks: [],
    filteredTasks: [],
  };

  getTasks = () => {
    const taskList = taskManager.get();
    this.setState({
      tasks: taskList,
      filteredTasks: taskList
    });
  }

  sortByKey = ($evt) => {
    const key = $evt.target.value;
    const tasks = this.state.filteredTasks;
    console.log(key);
    this.setState({
      tasks: tasks.sort((t1, t2) => t1[key] - t2[key])
    });
  };

  filterByName = ($evt) => {
    const query = $evt.target.value;
    const tasks = this.state.tasks;

    this.setState({
      filteredTasks: tasks.filter(task => task.name.match(query))
    });
  };

  componentDidMount() {
    this.getTasks();
  }
  render () {
    const { tasks, filteredTasks } = this.state;

    return (
      <div>
        <div className="panel">
          <div className="panel-head">
            <strong>Task List</strong>
            <span className="align-right">
              <span className="pad-sm">
                <strong>Search By: </strong>
                <input
                  type="text"
                  placeholder="Search by Name..."
                  onKeyPress={this.filterByName} />
              </span>
              <span className="pad-sm">
                <strong>Sort By: </strong>
                <select onChange={this.sortByKey}>
                {
                  sortKeys.map((i) => <option key={i.id} value={i.id}>{i.label}</option>)
                }
                </select>
              </span>
            </span>
          </div>
          <TaskList
            tasks={filteredTasks}
            updateTasks={this.getTasks}/>
        </div>
        <br/>
        <AddTask
          updateTasks={this.getTasks} />
      </div>
    );
  }
}
export default TaskManager;
