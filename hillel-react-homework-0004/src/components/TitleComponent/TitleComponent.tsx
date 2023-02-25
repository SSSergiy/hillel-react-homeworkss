import { Component } from 'react';

export default class TitleComponent extends Component {
	constructor(props) {
	super(props);
	}
  render() {
		return <button onClick={this.props.handleClick}>{ this.props.itemName}</button>;
  }
}
