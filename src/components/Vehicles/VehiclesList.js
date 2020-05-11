import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../actions/';
import {
  compareValues,
  extractLastUrlPartFromUrlString,
} from '../../utils/utils';

class VehiclesList extends PureComponent {
  componentDidMount() {
    this.props.fetchVehicles();
  }

  render() {
    const { vehicleList } = this.props;

    if (!vehicleList || vehicleList.length === 0) return null;

    return (
      <main>
        <h2>Vehicles</h2>
        <ul>
          {vehicleList.map(vehicle => (
            <li key={vehicle.name}>
              <NavLink
                to={`vehicles/${extractLastUrlPartFromUrlString(vehicle.url)}`}
              >
                {vehicle.name}
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
    vehicles: { list: vehicleList },
    main,
  } = state;

  return {
    vehicleList: vehicleList.sort(compareValues('name')),
    ...main,
  };
};

export default connect(mapStateToProps, actions)(VehiclesList);
