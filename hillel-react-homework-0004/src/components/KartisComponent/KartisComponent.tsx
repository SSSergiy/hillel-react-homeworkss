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
      <table style={{ border: '2px solid red', padding: 15 }}>
        <thead>
          <tr>
            <td>
              <h4>{name}</h4>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>
                {(gender ? 'GENDER: ' + gender : '') ||
                  (population ? 'POPULATION: ' + population : '') ||
                  (starship_class ? 'STARSHIP CLASS: ' + starship_class : '')}
              </strong>
            </td>
          </tr>
          <tr>
            <td>
              <strong>
                {birth_year
                  ? 'BIRTH YEAR: ' + birth_year
                  : '' || rotation_period
                  ? 'ROTATION PERIOD: ' + rotation_period
                  : '' || hyperdrive_rating
                  ? 'HYPERDIVE RATING: ' + hyperdrive_rating
                  : ''}
              </strong>
            </td>
          </tr>
          <tr>
            <td>
              <b>
                {eye_color
                  ? 'EYE COLOR: ' + eye_color
                  : '' || diameter
                  ? 'DIAMETER: ' + diameter
                  : '' || length
                  ? 'LENGTH: ' + length
                  : ''}
              </b>
            </td>
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
    );
  }
}
