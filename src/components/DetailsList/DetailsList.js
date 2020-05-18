import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DetailsList.scss';
import { extractLastUrlPartFromUrlString } from '../../utils/utils';

export const DetailsList = ({ links, namesList, linkPrefix, isBusy }) => {
  if (isBusy) {
    return <span data-testid="loading more">Loading additional data...</span>;
  }

  const noMatchingDetails =
    !links || !links.length || !namesList || !namesList.length;

  if (noMatchingDetails) return 'n/a';

  return links.map((link, index) => {
    const detailId = extractLastUrlPartFromUrlString(link);
    const detailPath = `${linkPrefix}/${detailId}`;
    const isNotLastItem = index !== links.length - 1;
    const detailName =
      typeof namesList[index] === 'string'
        ? `${namesList[index]}${isNotLastItem ? ', ' : ''}`
        : '';

    return (
      <span key={index} className={styles['detail-link']}>
        <NavLink to={detailPath}>{detailName} </NavLink>
      </span>
    );
  });
};
