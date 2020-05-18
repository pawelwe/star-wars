import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../actions/';
import styles from './PlanetDetails.scss';
import { DetailsList } from '../DetailsList/DetailsList';
import { loadData, saveData } from '../../utils/utils';

export class PlanetDetails extends PureComponent {
  async componentDidMount() {
    const planetId = this.props.match.params.id;
    const cachedData = loadData(`planet-details-${planetId}`);

    if (!cachedData) {
      await this.props.fetchPlanet(planetId);

      const { details: { residents } = {} } = this.props;

      if (residents) {
        await this.props.fetchAdditionalResidentsData(residents);
      }

      const { details } = this.props;

      saveData(details, `planet-details-${planetId}`);
    } else {
      this.props.setPlanetsCachedData(cachedData);
    }
  }

  render() {
    const { details, isBusy } = this.props;

    if (!details) return null;

    const { name, population, residents, residentsNames } = details;

    return (
      <main className={`${styles['details']} fade-in`} data-testid="planet-details">
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
              isBusy={isBusy}
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
    main: { isBusy },
  } = state;

  return {
    details: { ...planet },
    isBusy,
  };
};

export default connect(mapStateToProps, actions)(PlanetDetails);
