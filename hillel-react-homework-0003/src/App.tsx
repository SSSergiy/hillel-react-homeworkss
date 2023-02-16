import { Component, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Modal from './components/madal/Modal';
import data from './data.json';
import { translations } from './translations';

export default class App extends Component {
  state = {
    modalOpened: false,
  };
  openModal = () => {
    this.setState({ modalOpened: !this.state.modalOpened });
  };
  modalClosed = () => {
    this.setState({ modalOpened: false });
  };

  render(): ReactNode {
    return (
      <>
        <table>
          <thead>
            <tr>
              {translations.titleTable.map((item) => (
                <td key={uuidv4()}>
                  <strong>{item.title}</strong>
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={uuidv4()}>
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
        </table>
        <button onClick={this.openModal}>{translations.buttonModal}</button>
        <Modal
          modalClosed={this.modalClosed}
          modalOpened={this.state.modalOpened}
        />
      </>
    );
  }
}
