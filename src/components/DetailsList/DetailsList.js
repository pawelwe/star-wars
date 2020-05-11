import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DetailsList.scss';
import { extractLastUrlPartFromUrlString } from '../../utils/utils';

export const DetailsList = ({ title, detailsList, linkPrefix }) => {
  if (!detailsList || !detailsList.length) return 'n/a';

  return detailsList.map((detailLink, index) => {
    const detailId = extractLastUrlPartFromUrlString(detailLink);
    return (
      <span key={index} className={styles['detail-link']}>
        <NavLink to={`${linkPrefix}/${detailId}`}>
          {`${title} ${detailId}`}
        </NavLink>
        {index !== detailsList.length - 1 && ','}
      </span>
    );
  });
};
