import { Component } from 'react';
import { objPiple } from '../../imagesResurses/imgResurs';

export default class KartisComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      gender,
      population,
      starship_class,
      birth_year,
      rotation_period,
      hyperdrive_rating,
      eye_color,
      diameter,
      length
    } = this.props.kartisProps;

    return (
      <div>
        <table
          style={{ borderRadius: 10, border: '2px solid red', padding: 15 }}
        >
          <thead>
            <tr>
              <td>{name}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{gender || population || starship_class}</td>
            </tr>
            <tr>
              <td>{birth_year || rotation_period || hyperdrive_rating}</td>
            </tr>
            <tr>
              <td>{eye_color || diameter || length}</td>
            </tr>
            <tr>
              <td>
                <img
                  src={objPiple[name]}
                  alt={name}
                  style={{
                    minWidth: 400,
                    minHeight: 300,
                    maxWidth: 400,
                    maxHeight: 300,
                    borderRadius: 10
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
