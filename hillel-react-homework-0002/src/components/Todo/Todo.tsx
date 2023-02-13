import { Component } from 'react';
import './_Todo.scss';
type MyProps = {
  item: {
    title: string;
    id: number;
    done: boolean;
  };
};
type MyState = {
  title: string;
  id: number;
  done: boolean;
};
class Todo extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      title: props.item.title,
      id: props.item.id,
      done: props.item.done
    };
  }
  changeState = () => {
    this.setState({ done: !this.state.done });
  };
  render() {
    return (
      <>
        <table>
          <tbody>
            <tr>
              <td
                onClick={this.changeState}
                className={this.state.done ? 'disabled' : 'item'}
              >
                {this.state.title}
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}
export default Todo;
