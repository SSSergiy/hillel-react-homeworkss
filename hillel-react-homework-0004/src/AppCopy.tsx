import { Component } from 'react';
import { RingLoader } from 'react-spinners';
import { v4 as uuidv4 } from 'uuid';
import KartisComponent from './components/KartisComponent/KartisComponent';
import TitleComponent from './components/TitleComponent/TitleComponent';

export default class AppCopy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleState: {
        Peoples: props.stateCategories.Peoples,
        Planets: props.stateCategories.Planets,
        Starships: props.stateCategories.Starships
      },
      itemsState: [],
      personState: {
        birth_year: '19BBY',
        eye_color: 'blue',
        gender: 'male',
        id: '665becf8-b443-4323-b083-4b07c35fec39',
        name: 'Luke Skywalker'
      },
      isLoading: false
    };
  }
  requestData = () => {
    if (this.state.titleState.Peoples) {
      return 'people';
    }
    if (this.state.titleState.Planets) {
      return 'planets';
    }
    if (this.state.titleState.Starships) {
      return 'starships';
    }
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.stateCategories.Peoples == prevState.titleState.Peoples) {
      return {
        titleState: nextProps.stateCategories
      };
    }
    if (nextProps.stateCategories.Planets !== prevState.titleState.Planets) {
      return {
        titleState: nextProps.stateCategories
      };
    }
    if (
      nextProps.stateCategories.Starships !== prevState.titleState.Starships
    ) {
      return {
        titleState: nextProps.stateCategories
      };
    }
  }
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.titleState.Peoples !== this.state.titleState.Peoples) {
      this.fetchData();
    }
    if (prevState.titleState.Planets !== this.state.titleState.Planets) {
      this.fetchData();
    }
    if (prevState.titleState.Starships !== this.state.titleState.Starships) {
      this.fetchData();
    }
  }
  fetchData = async () => {
    this.setState({ isLoading: true });
    await fetch(`https://swapi.dev/api/${this.requestData()}`)
      .then((response) => response.json())
      .then((itemsApi) =>
        this.setState({
          itemsState: itemsApi.results.map((item) => ({
            ...item,
            id: uuidv4()
          }))
        })
      );
    this.setState({ isLoading: false });
  };
  clickHandle = (id) => {
    const filteredData = this.state.itemsState.filter((item) => item.id === id);
    if (filteredData.length > 0) {
      this.setState({
        personState: filteredData[0]
      });
    }
  };
  render() {
    const { isLoading } = this.state;
    return (
      <tbody>
        <tr>
          <td>{isLoading && <RingLoader loading={isLoading} />}</td>
          <td>{isLoading && <RingLoader loading={isLoading} />}</td>
        </tr>
        <tr
          style={{
            display: 'flex',
            justifyContent: 'space-around'
          }}
        >
          <td>
            <ul>
              {this.state.itemsState.map((item) => (
                <TitleComponent
                  key={uuidv4()}
                  itemName={item.name}
                  handleClick={() => this.clickHandle(item.id)}
                />
              ))}
            </ul>
          </td>
          <td>
            <div>
              <KartisComponent kartisProps={this.state.personState} />
              {isLoading && <RingLoader loading={isLoading} />}
            </div>
          </td>
        </tr>
      </tbody>
    );
  }
}
