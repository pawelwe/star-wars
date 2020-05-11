import React from 'react';
import { connect } from 'react-redux';
import { PreLoader } from '../PreLoader/PreLoader';
import styles from './Messages.scss';

const Messages = ({ error, isBusy }) => {
  return (
    <>
      {error && <p className={styles['message']}>:( {error}</p>}
      {isBusy && (
        <div className={styles['message']}>
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
