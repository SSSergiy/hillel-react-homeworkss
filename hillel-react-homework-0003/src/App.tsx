import { Component, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Modal from './components/madal/Modal';
import AppObj, { AppProps, AppState } from './types/types';

import { translations } from './translations';

export default class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
  }
  state = {
    modalOpened: false,
    users: this.props.data,
  };

  openModal = () => {
    this.setState({ modalOpened: !this.state.modalOpened });
  };
  modalClosed = () => {
    this.setState({ modalOpened: false });
  };
  deleteUsers = (id: string) => {
    const updatedUsers = this.state.users.filter((item: AppObj): boolean => item.id !== id);
    this.setState({ users: updatedUsers });
  };
  addUsers = (item: AppObj) => {
    this.setState({
      users: [...this.state.users, item],
    });
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
            {this.state.users.map((item: AppObj) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.phone}</td>
                  <td>
                    <button onClick={(): void => this.deleteUsers(item.id)}>{translations.buttonDelete}</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={this.openModal}>{translations.buttonModal}</button>
        <Modal modalClosed={this.modalClosed} modalOpened={this.state.modalOpened} addUsers={this.addUsers} />
      </>
    );
  }
}
