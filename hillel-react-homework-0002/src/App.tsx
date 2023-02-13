import { Component, ReactNode } from 'react';
import TaskActivator from './components/TaskActivator/TaskActivator';
import Todo from './components/Todo/Todo';
import './_App.scss';

class App extends Component {
  constructor() {
    super();
  }
  state = {
    value: '',
    todoList: [
      {
        title: 'Smth very important',
        id: 1,
        done: false
      },
      {
        title: 'Another very important thing',
        id: 2,
        done: false
      },
      {
        title: 'Ordinary thing',
        id: 3,
        done: true
      }
    ]
  };
  addTodo = (item) => {
    this.setState({
      todoList: [...this.state.todoList, item]
    });
  };

  render(): ReactNode {
    return (
      <>
        <TaskActivator addState={this.addTodo} />
        {this.state.todoList.map((item, index) => {
          return <Todo key={index} item={item} />;
        })}
      </>
    );
  }
}

export default App;
