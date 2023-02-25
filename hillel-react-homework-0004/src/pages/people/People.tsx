import { Component } from 'react';

export default class People extends Component {
  constructor(props) {
    super(props);
  }

  requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  peoples = async (number) => {
    await fetch(`https://swapi.dev/api/people/${number}`, this.requestOptions)
      .then((response) => response.json())
      .then((planets) => console.log(planets))
      .catch((error) => console.log('error', error));
  };
  componentDidMount(): void {
    this.peoples(1);
  }
  render() {
    return <div>1</div>;
  }
}
