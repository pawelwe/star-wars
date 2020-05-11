import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../actions/';
import styles from './PeopleDetails.scss';
import { DetailsList } from '../DetailsList/DetailsList';
import { extractLastUrlPartFromUrlString } from '../../utils/utils';

class PeopleDetails extends PureComponent {
  componentDidMount() {
    const characterId = this.props.match.params.id;

    this.props.fetchCharacter(characterId);
  }

  render() {
    const { details } = this.props;

    if (!details) return null;

    const { name, homeworld, gender, vehicles } = details;

    return (
      <main className={styles['details']}>
        <h2>{name}</h2>
        <ul>
          <li>
            <strong>Gender:</strong> {gender}
          </li>
          <li>
            <strong>Vehicles: </strong>
            <DetailsList
              title="Vehicle"
              linkPrefix="/vehicles"
              detailsList={vehicles}
            />
          </li>
          <li>
            <strong>Home World: </strong>
            <NavLink
              to={`/planets/${extractLastUrlPartFromUrlString(homeworld)}`}
            >
              Go to planet
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
  } = state;

  return {
    details: character,
  };
};

export default connect(mapStateToProps, actions)(PeopleDetails);
