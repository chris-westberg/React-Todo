import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const tasks = [
  {
    task: 'Take out Garbage', 
    time: 462873, 
    completed: false
  }, 
  {
    task: 'Walk the Dog', 
    time: 89348492, 
    completed: false
  }, 
  {
    task: 'Sweep the floor', 
    time: 567389294, 
    completed: false
  }
]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super();
    this.state={
      tasks: tasks
    }
  }

  toggleTask = (taskId) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task, 
            completed:!task.completed
          };
        }
        return task;
      })
    });
  };

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter ((task) => {
        return !task.completed;
      })
    });
  };

  clearAll = () => {
    this.setState({
      tasks: this.state.tasks.filter ((task) => {
        return 
      })
    });
  };

  addTask = (taskName) => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        { id: Date.now(), name: taskName, completed:false }
      ]
    });
  };

  
  render() {
    return (
      <div>
        <div>
          <h1>Todo List</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList tasks={this.state.tasks} toggleTask={this.toggleTask} clearCompleted={this.clearCompleted} clearAll={this.clearAll}/>
      </div>
    );
  }
}

export default App;
