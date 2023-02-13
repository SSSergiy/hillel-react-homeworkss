import { Component, ReactNode } from 'react';
import './_TaskActivator.scss';
type MyProps = {
  addState: (states: MyState) => void;
};
type MyState = {
  title: string;
  id: number;
  done: boolean;
};
class TaskActivator extends Component<MyProps> {
  constructor(props: MyProps) {
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
        {console.log(this.props)}
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
