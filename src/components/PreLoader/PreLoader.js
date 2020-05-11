import React from 'react';
import styles from './PreLoader.scss';
import preLoaderIcon from './assets/preloader.svg';

export const PreLoader = () => {
  return (
    <div className={styles['wrapper']} data-testid="preloader">
      <img src={preLoaderIcon} alt="pre-loader icon" />
    </div>
  );
};
