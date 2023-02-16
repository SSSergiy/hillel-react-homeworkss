import { Component } from 'react';
import './App.css';
import data from './data.json';
import { translations } from './translations';

export default class App extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>
              <strong>{translations.titleName}</strong>
            </td>
            <td>
              <strong>{translations.titleUsername}</strong>
            </td>
            <td>
              <strong>{translations.titlePhone}</strong>
            </td>
            <td>
              <strong>{translations.titleAction}</strong>
            </td>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.phone}</td>
                <td>
                  <button>{translations.buttonDelete}</button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <button>{translations.buttonModal}</button>
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    );
  }
}
