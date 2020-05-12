import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../actions/';
import styles from './VehiclesDetails.scss';
import { DetailsList } from '../DetailsList/DetailsList';

class VehicleDetails extends PureComponent {
  async componentDidMount() {
    const vehicleId = this.props.match.params.id;

    await this.props.fetchVehicle(vehicleId);

    const {
      details: { pilots },
    } = this.props;

    this.props.fetchAdditionalUsersData(pilots);
  }

  render() {
    const { details, userNames, isBusy } = this.props;

    if (!details) return null;

    const { name, vehicle_class, pilots } = details;

    return (
      <main className={`${styles['details']} fade-in`}>
        <h2>{name}</h2>
        <ul>
          <li>
            <strong>Class:</strong> {vehicle_class}
          </li>
          <li>
            <strong>Users: </strong>
            <DetailsList
              namesList={userNames}
              links={pilots}
              linkPrefix="/people"
              isBusy={isBusy}
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
    vehicles: { vehicle, userNames },
    main: { isBusy },
  } = state;

  return {
    details: vehicle,
    userNames,
    isBusy,
  };
};

export default connect(mapStateToProps, actions)(VehicleDetails);
