import { useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';
import { v4 as uuidv4 } from 'uuid';
import KartisComponent from '../components/KartisComponent/KartisComponent';
import TitleComponent from '../components/TitleComponent/TitleComponent';

const Api = ({ stateCategories }) => {
  console.log(stateCategories);

  const [itemsState, setItemsState] = useState([]);
  const [personState, setPersonState] = useState({
    birth_year: '19BBY',
    eye_color: 'blue',
    gender: 'male',
    id: '665becf8-b443-4323-b083-4b07c35fec39',
    name: 'Luke Skywalker'
  });
  const [isLoading, setIsLoading] = useState(false);

  const requestData = () => {
    if (stateCategories.Peoples) {
      return 'people';
    }
    if (stateCategories.Planets) {
      return 'planets';
    }
    if (stateCategories.Starships) {
      return 'starships';
    }
  };

  useEffect(() => {
    fetchData();
  }, [
    stateCategories.Peoples,
    stateCategories.Planets,
    stateCategories.Starships
  ]);

  const fetchData = async () => {
    setIsLoading(true);
    await fetch(`https://swapi.dev/api/${requestData()}`)
      .then((response) => response.json())
      .then((itemsApi) =>
        setItemsState(
          itemsApi.results.map((item) => ({
            ...item,
            id: uuidv4()
          }))
        )
      );
    setIsLoading(false);
  };

  const clickHandle = (id) => {
    const filteredData = itemsState.filter((item) => item.id === id);
    if (filteredData.length > 0) {
      setPersonState(filteredData[0]);
    }
  };

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
            {itemsState.map((item) => (
              <TitleComponent
                key={item.id}
                itemName={item.name}
                handleClick={() => clickHandle(item.id)}
              />
            ))}
          </ul>
        </td>
        <td>
          <div>
            <KartisComponent kartisProps={personState} />
            {isLoading && <RingLoader loading={isLoading} />}
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default Api;
