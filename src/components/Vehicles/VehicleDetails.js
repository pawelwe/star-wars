import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../actions/';
import styles from './VehiclesDetails.scss';
import { DetailsList } from '../DetailsList/DetailsList';
import { loadData, saveData } from '../../utils/utils';

class VehicleDetails extends PureComponent {
  async componentDidMount() {
    const vehicleId = this.props.match.params.id;
    const cachedData = loadData(`vehicle-details-${vehicleId}`);

    if (!cachedData) {
      await this.props.fetchVehicle(vehicleId);

      const { details: { pilots } = {} } = this.props;

      if (pilots) {
        await this.props.fetchAdditionalUsersData(pilots);
      }

      const { details } = this.props;

      saveData(details, `vehicle-details-${vehicleId}`);
    } else {
      this.props.setVehiclesCachedData(cachedData);
    }
  }

  render() {
    const { details, isBusy } = this.props;

    if (!details) return null;

    const { name, vehicle_class, pilots, userNames } = details;

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
    vehicles: { vehicle },
    main: { isBusy },
  } = state;

  return {
    details: { ...vehicle },
    isBusy,
  };
};

export default connect(mapStateToProps, actions)(VehicleDetails);
