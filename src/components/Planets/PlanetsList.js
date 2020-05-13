import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../actions/';
import {
  calculateVisibleRange,
  compareValues,
  extractLastUrlPartFromUrlString,
} from '../../utils/utils';
import Pager from '../Pager/Pager';

class PlanetsList extends PureComponent {
  componentDidMount() {
    this.props.fetchPlanets();
  }

  render() {
    const { planetsList, allPlanetsCount } = this.props;

    if (!planetsList || planetsList.length === 0) return null;

    return (
      <main className="fade-in">
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
        <Pager itemsCount={allPlanetsCount} />
      </main>
    );
  }
}

const mapStateToProps = state => {
  const {
    planets: { list: planetsList },
    main,
    main: { currentPage },
  } = state;

  return {
    planetsList: calculateVisibleRange(
      planetsList.sort(compareValues('name')),
      currentPage,
    ),
    allPlanetsCount: planetsList.length,
    ...main,
  };
};

export default connect(mapStateToProps, actions)(PlanetsList);
