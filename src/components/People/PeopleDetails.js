import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../actions/';
import styles from './PeopleDetails.scss';
import { DetailsList } from '../DetailsList/DetailsList';
import { extractLastUrlPartFromUrlString } from '../../utils/utils';

export class PeopleDetails extends PureComponent {
  async componentDidMount() {
    const characterId = this.props.match.params.id;

    await this.props.fetchCharacter(characterId);

    const {
      details: { homeworld, vehicles },
    } = this.props;

    this.props.fetchPlanetInfo(homeworld);

    this.props.fetchAdditionalPeopleData(vehicles);
  }

  render() {
    const { details, planet, vehiclesNames, isBusy } = this.props;

    if (!details) return null;

    const { name, homeworld, gender, vehicles } = details;

    return (
      <main className={styles['details']} data-testid="people-details">
        <h2>{name}</h2>
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
              {planet}
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
    people: { character, world, vehiclesNames },
    main: { isBusy },
  } = state;

  return {
    details: character,
    planet: world,
    vehiclesNames,
    isBusy,
  };
};

export default connect(mapStateToProps, actions)(PeopleDetails);
