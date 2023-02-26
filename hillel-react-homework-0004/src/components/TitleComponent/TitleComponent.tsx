import { Component } from 'react';

export default class TitleComponent extends Component {
	constructor(props) {
	super(props);
	}
  render() {
		return <button style={{width:350}} onClick={this.props.handleClick}>{ this.props.itemName}</button>;
  }
}
