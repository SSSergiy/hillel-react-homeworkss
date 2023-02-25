import { Component } from 'react';

export default class Planets extends Component {
	state ={}
  constructor(props) {
    super(props);
  }

  requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  peoples = async (number) => {
    await fetch(`https://swapi.dev/api/planets/${number}`, this.requestOptions)
      .then((response) => response.json())
      .then((planets) => this.setState(planets))
      .catch((error) => console.log('error', error));
  };
  componentDidMount(): void {
    this.peoples(7);
  }
	render() {
		console.log(this.state);
		
		return <div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>


		</div>;
  }
}
