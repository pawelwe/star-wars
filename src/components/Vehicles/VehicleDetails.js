import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../actions/';
import styles from './VehiclesDetails.scss';
import { DetailsList } from '../DetailsList/DetailsList';

class VehicleDetails extends PureComponent {
  componentDidMount() {
    const vehicleId = this.props.match.params.id;

    this.props.fetchVehicle(vehicleId);
  }

  render() {
    const { details } = this.props;

    if (!details) return null;

    const { name, vehicle_class, pilots } = details;

    return (
      <main className={styles['details']}>
        <h2>{name}</h2>
        <ul>
          <li>
            <strong>Class:</strong> {vehicle_class}
          </li>
          <li>
            <strong>Users: </strong>
            <DetailsList
              title="User"
              linkPrefix="/people"
              detailsList={pilots}
            />
          </li>
        </ul>
        <hr />
        <NavLink to="/vehicles">Back to vehicles</NavLink>
      </main>
    );
  }
}

const mapStateToProps = state => {
  const {
    vehicles: { vehicle },
  } = state;

  return {
    details: vehicle,
  };
};

export default connect(mapStateToProps, actions)(VehicleDetails);
