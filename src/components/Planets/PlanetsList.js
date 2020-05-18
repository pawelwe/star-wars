import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../actions/';
import {
  calculateVisibleRange,
  compareValues,
  extractLastUrlPartFromUrlString,
  loadData,
  saveData,
} from '../../utils/utils';
import Pager from '../Pager/Pager';

class PlanetsList extends PureComponent {
  async componentDidMount() {
    const cachedData = loadData(`planets-list`);

    if (!cachedData) {
      await this.props.fetchPlanets();

      const { allPlanetsList } = this.props;

      saveData(allPlanetsList, `planets-list`);
    } else {
      this.props.setPlanets(cachedData);
    }
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
    allPlanetsList: planetsList,
    allPlanetsCount: planetsList.length,
    ...main,
  };
};

export default connect(mapStateToProps, actions)(PlanetsList);
