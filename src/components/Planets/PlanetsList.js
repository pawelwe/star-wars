import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../actions/';
import {
  compareValues,
  extractLastUrlPartFromUrlString,
} from '../../utils/utils';

class PlanetsList extends PureComponent {
  componentDidMount() {
    this.props.fetchPlanets();
  }

  render() {
    const { planetsList } = this.props;

    if (!planetsList || planetsList.length === 0) return null;

    return (
      <main>
        <h2>Planets</h2>
        <ul>
          {planetsList.map(({ name, url }) => (
            <li key={name}>
              <NavLink to={`planets/${extractLastUrlPartFromUrlString(url)}`}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

const mapStateToProps = state => {
  const {
    planets: { list: planetsList },
    main,
  } = state;

  return {
    planetsList: planetsList.sort(compareValues('name')),
    ...main,
  };
};

export default connect(mapStateToProps, actions)(PlanetsList);
