import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../actions/';
import styles from './PlanetDetails.scss';
import { DetailsList } from '../DetailsList/DetailsList';

class VehicleDetails extends PureComponent {
  componentDidMount() {
    const planetId = this.props.match.params.id;

    this.props.fetchPlanet(planetId);
  }

  render() {
    const { details } = this.props;

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
              title="User"
              linkPrefix="/people"
              detailsList={residents}
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
    planets: { planet },
  } = state;

  return {
    details: planet,
  };
};

export default connect(mapStateToProps, actions)(VehicleDetails);
