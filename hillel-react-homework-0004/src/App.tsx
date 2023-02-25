import { v4 as uuidv4 } from 'uuid';
import './App.css';
import AppCopy from './AppCopy';
import { titles } from './translations/translations';

import { Component } from 'react';
import Button from './components/Button';

export default class App extends Component {
  state = {
    stateButtons: {
      Peoples: true,
      Planets: false,
      Starships: false
    }
  };

  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>  
              {titles.map((itemMap) => (
             
                <Button
                  key={uuidv4()}
                  itemMaps={this.state.stateButtons}
                  title={itemMap.title}
                  stateButtons={() => {
                    this.setState({
                      ...this.state,
                      stateButtons: {
                        [titles.filter(
                          (itemFilter) => itemFilter.title !== itemMap.title
                        )[0].title]: false,
                        [titles.filter(
                          (itemFilter) => itemFilter.title !== itemMap.title
                        )[1].title]: false,
                        [itemMap.title]: !this.state.stateButtons[itemMap.title]
                      }
                    });
                  }}
                />
              ))}
            </td>
          </tr>
        </thead>
        
        
        <AppCopy stateCategories={this.state.stateButtons} />
        
       
      </table>
    );
  }
}
