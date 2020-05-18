import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../actions/';
import styles from './PeopleDetails.scss';
import { DetailsList } from '../DetailsList/DetailsList';
import {
  extractLastUrlPartFromUrlString,
  saveData,
  loadData,
} from '../../utils/utils';
import avatar from './assets/avatar.jpg';

export class PeopleDetails extends PureComponent {
  async componentDidMount() {
    const characterId = this.props.match.params.id;
    const cachedData = loadData(`people-details-${characterId}`);

    if (!cachedData) {
      await this.props.fetchCharacter(characterId);

      const { details: { homeworld, vehicles } = {} } = this.props;

      if (homeworld) {
        await this.props.fetchPlanetInfo(homeworld);
      }

      if (vehicles) {
        await this.props.fetchAdditionalPeopleData(vehicles);
      }
      const { details } = this.props;

      saveData(details, `people-details-${characterId}`);
    } else {
      this.props.setUserCachedData(cachedData);
    }
  }

  render() {
    const { details, isBusy } = this.props;

    if (!details) return null;

    const { name, homeworld, gender, vehicles, world, vehiclesNames } = details;

    return (
      <main
        className={`${styles['details']} fade-in`}
        data-testid="people-details"
      >
        <h2>{name}</h2>
        <img src={avatar} alt="avatar" />
        <ul>
          <li>
            <strong>Gender:</strong> {gender}
          </li>
          <li>
            <strong>Vehicles: </strong>
            <DetailsList
              namesList={vehiclesNames}
              links={vehicles}
              linkPrefix="/vehicles"
              isBusy={isBusy}
            />
          </li>
          <li>
            <strong>Home World: </strong>
            <NavLink
              to={`/planets/${extractLastUrlPartFromUrlString(homeworld)}`}
            >
              {world}
            </NavLink>
          </li>
        </ul>
        <hr />
        <NavLink to="/">Back to people</NavLink>
      </main>
    );
  }
}

const mapStateToProps = state => {
  const {
    people: { character },
    main: { isBusy },
  } = state;

  return {
    details: { ...character },
    isBusy,
  };
};

export default connect(mapStateToProps, actions)(PeopleDetails);
