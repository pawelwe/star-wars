import React from 'react';
import { connect } from 'react-redux';
import { PreLoader } from '../PreLoader/PreLoader';
import styles from './Messages.scss';

export const Messages = ({ error, isBusy }) => {
  return (
    <>
      {error && (
        <p className={styles['message']} data-testid="error">
          :( {error}
        </p>
      )}
      {isBusy && (
        <div className={styles['message']} data-testid="messages">
          <PreLoader />
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => {
  const { main } = state;

  return {
    ...main,
  };
};

export default connect(mapStateToProps, null)(Messages);
