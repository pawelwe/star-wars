import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../actions/';
import styles from './PlanetDetails.scss';
import { DetailsList } from '../DetailsList/DetailsList';
import swapi from '../../apis/swapi';

class PlanetDetails extends PureComponent {
  async componentDidMount() {
    const planetId = this.props.match.params.id;

    await this.props.fetchPlanet(planetId);

    const {
      details: { residents },
    } = this.props;

    const residentsPromises = residents.map(
      async resident => await swapi.get(resident),
    );

    Promise.all(residentsPromises)
      .then(values => {
        const names = values.map(item => {
          return item.data.name;
        });
        this.props.setResidents(names);
      })
      .catch(({ message }) => {
        console.warn('error:', message);
      });
  }

  render() {
    const { details, residentsNames } = this.props;

    if (!details) return null;

    const { name, population, residents } = details;

    return (
      <main className={styles['details']}>
        <h2>{name}</h2>
        <ul>
          <li>
            <strong>Population:</strong> {population}
          </li>
          <li>
            <strong>Residents: </strong>
            <DetailsList
              namesList={residentsNames}
              links={residents}
              linkPrefix="/people"
            />
          </li>
        </ul>
        <hr />
        <NavLink to="/planets">Back to planets</NavLink>
      </main>
    );
  }
}

const mapStateToProps = state => {
  const {
    planets: { planet, residentsNames },
  } = state;

  return {
    details: planet,
    residentsNames,
  };
};

export default connect(mapStateToProps, actions)(PlanetDetails);
