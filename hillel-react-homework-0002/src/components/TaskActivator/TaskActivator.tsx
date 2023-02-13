import { Component, ReactNode } from 'react';
import { MyPropsFunc } from '../../types/types';
import './_TaskActivator.scss';

class TaskActivator extends Component<MyPropsFunc> {
  constructor(props: MyPropsFunc) {
    super(props);
  }
  state = {
    title: '',
    id: Date.now(),
    done: false
  };
  addStateProps = () => {
    const states = this.state;
    this.props.addState(states);
    this.setState({ title: '' });
  };
  render(): ReactNode {
    return (
      <>
        <input
          value={this.state.title}
          onChange={(e) => this.setState({ title: e.target.value })}
        />
        <button
          onClick={() => {
            this.addStateProps();
          }}
        >
          add task
        </button>
      </>
    );
  }
}
export default TaskActivator;
