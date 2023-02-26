import { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        onClick={() => this.props.stateButtons()}
        disabled={this.props.itemMaps[this.props.title]}
      >
        {this.props.title}
      </button>
    );
  }
}
