import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DetailsList.scss';
import { extractLastUrlPartFromUrlString } from '../../utils/utils';

export const DetailsList = ({ links, namesList, linkPrefix, isBusy }) => {
  if (isBusy) return <span>Loading additional data...</span>;
  if (!links || !links.length || !namesList) return 'n/a';

  return links.map((link, index) => {
    const detailId = extractLastUrlPartFromUrlString(link);
    const detailsPath = `${linkPrefix}/${detailId}`;
    const isNotLastItem = index !== links.length - 1;
    const detailName =
      typeof namesList[index] === 'string'
        ? `${namesList[index]}${isNotLastItem ? ', ' : ''}`
        : '';

    return (
      <span key={index} className={styles['detail-link']}>
        <NavLink to={detailsPath}>{detailName} </NavLink>
      </span>
    );
  });
};
