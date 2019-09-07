import React, { Component } from 'react';
import { InputComponent } from './InputComponent';
import { statusList, priorityList } from '../common/common';
import taskManager from '../services/task-manager.service';

class AddTask extends Component {
  state = {
    id: '',
    name: '',
    dueDate: new Date(),
    status: 1,
    priority: 1,
    createdAt: ''
  };

  updateKey = ($evt, key) => {
    console.log(key, $evt.target.value);
    this.setState({
      [key]: $evt.target.value
    });
  };

  clearState() {
    this.setState({
      id: '',
      name: '',
      dueDate: new Date(),
      status: 1,
      priority: 1,
      createdAt: ''
    });
  }

  createTask = () => {
    const { updateTasks } = this.props;
    const state = this.state;
    taskManager.addTask(state);
    updateTasks();
    this.clearState();
  };

  render () {
    const {
      name,
      dueDate,
      status,
      priority,
      createdAt,
    } = this.state;

    return (
        <div className="panel">
          <div className="panel-head">
            <strong>Add Task</strong>
          </div>
          <div className="panel-body">
            <InputComponent
              updateKey={this.updateKey}
              key="name"
              val={'name'}
              label={'Task Name'}
              />
            <InputComponent
              updateKey={this.updateKey}
              key="dueDate"
              val={'dueDate'}
              type={'date'}
              label={'Due Date'}
              />
            <div className="row">
              <strong>Priority: </strong>
              <select onChange={($evt) => this.updateKey($evt, 'priority')}>
              {
                priorityList.map((i) => <option key={i.id} value={i.id}>{i.label}</option>)
              }
              </select>
            </div>
            <div className="row">
              <strong>Status: </strong>
              <select onChange={($evt) => this.updateKey($evt, 'status')}>
              {
                statusList.map((i) => <option key={i.id} value={i.id}>{i.label}</option>)
              }
              </select>
            </div>

            <InputComponent
              updateKey={this.updateKey}
              key="createdAt"
              val={'createdAt'}
              label={'Created At'}
              />

            <div className="row">
              <button onClick={this.createTask}>Add Task</button>
            </div>
          </div>
        </div>
    );
  }
}
export default AddTask;
