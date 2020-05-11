import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../actions/';
import styles from './VehiclesDetails.scss';
import { DetailsList } from '../DetailsList/DetailsList';
import swapi from '../../apis/swapi';

class VehicleDetails extends PureComponent {
  async componentDidMount() {
    const vehicleId = this.props.match.params.id;

    await this.props.fetchVehicle(vehicleId);

    const {
      details: { pilots },
    } = this.props;

    const usersPromises = pilots.map(async pilot => await swapi.get(pilot));

    Promise.all(usersPromises)
      .then(values => {
        const names = values.map(item => {
          return item.data.name;
        });
        this.props.setUserNames(names);
      })
      .catch(({ message }) => {
        console.warn('error:', message);
      });
  }

  render() {
    const { details, userNames } = this.props;

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
              namesList={userNames}
              links={pilots}
              linkPrefix="/people"
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
  } = state;

  return {
    details: vehicle,
    userNames,
  };
};

export default connect(mapStateToProps, actions)(VehicleDetails);
