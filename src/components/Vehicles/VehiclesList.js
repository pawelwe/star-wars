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

export class VehiclesList extends PureComponent {
  async componentDidMount() {
    const cachedData = loadData(`vehicles-list`);

    if (!cachedData) {
      await this.props.fetchVehicles();

      const { allVehiclesList } = this.props;

      saveData(allVehiclesList, `vehicles-list`);
    } else {
      this.props.setVehicles(cachedData);
    }
  }

  render() {
    const { vehicleList, allVehiclesCount } = this.props;

    if (!vehicleList || !vehicleList.length) return null;

    return (
      <main className="fade-in" data-testid="vehicles-list">
        <h2>Vehicles</h2>
        <ul>
          {vehicleList.map(({ name, url }) => (
            <li key={name}>
              <NavLink to={`vehicles/${extractLastUrlPartFromUrlString(url)}`}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <Pager itemsCount={allVehiclesCount} />
      </main>
    );
  }
}

const mapStateToProps = state => {
  const {
    vehicles: { list: vehicleList },
    main,
    main: { currentPage },
  } = state;

  return {
    vehicleList: calculateVisibleRange(
      vehicleList.sort(compareValues('name')),
      currentPage,
    ),
    allVehiclesList: vehicleList,
    allVehiclesCount: vehicleList.length,
    ...main,
  };
};

export default connect(mapStateToProps, actions)(VehiclesList);
