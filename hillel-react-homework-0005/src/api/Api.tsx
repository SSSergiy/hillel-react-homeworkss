import List from '@mui/material/List';
import { useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';
import { v4 as uuidv4 } from 'uuid';
import KartisComponent from '../components/KartisComponent/KartisComponent';
import TitleComponent from '../components/TitleComponent/TitleComponent';
import { css } from '@emotion/react';

const Api = ({ stateCategories: { Peoples, Planets, Starships } }) => {
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
    if (Peoples) {
      return 'people';
    }
    if (Planets) {
      return 'planets';
    }
    if (Starships) {
      return 'starships';
    }
  };

  useEffect(() => {
    fetchData();
  }, [Peoples, Planets, Starships]);

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
			setTimeout(() => {
				setIsLoading(false);
			}, 2000);
  };

  const clickHandle = (id) => {
    const filteredData = itemsState.filter((item) => item.id === id);
    if (filteredData.length > 0) {
      setPersonState(filteredData[0]);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around'
        }}
      >
        <List
          dense
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          {itemsState.map(({ id, name }) => (
            <TitleComponent
              key={id}
              itemName={name}
              handleClick={() => clickHandle(id)}
            />
          ))}
        </List>
        <List dense sx={{ width: '100%', maxWidth: 360 }}>
          <KartisComponent kartisProps={personState} />
        </List>
			
			</div>
      <RingLoader
        size={150}
        color={'#123abc'}
        loading={isLoading}
        css={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
      />
   
      {/* {isLoading && <RingLoader loading={isLoading} size={900} />} */}
    </div>
  );
};

export default Api;
