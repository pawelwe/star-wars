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

class VehiclesList extends PureComponent {
  componentDidMount() {
    this.props.fetchVehicles();
  }

  render() {
    const { vehicleList, allVehiclesCount } = this.props;

    if (!vehicleList || !vehicleList.length) return null;

    return (
      <main className="fade-in">
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
    allVehiclesCount: vehicleList.length,
    ...main,
  };
};

export default connect(mapStateToProps, actions)(VehiclesList);
