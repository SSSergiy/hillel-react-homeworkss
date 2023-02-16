import { Component, ReactNode } from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props);
  }
  render(): ReactNode {
    return (
      <label htmlFor={this.props.htmlFor}>
        {this.props.titleName}
        <input
          placeholder={this.props.placeholder}
          type={this.props.type}
          name={this.props.name}
          id={this.props.id}
        />
      </label>
    );
  }
}
