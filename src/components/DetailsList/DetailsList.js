import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DetailsList.scss';
import { extractLastUrlPartFromUrlString } from '../../utils/utils';

export const DetailsList = ({ links, namesList, linkPrefix }) => {
  if (!links || !links.length || !namesList) return 'n/a';

  return links.map((link, index) => {
    const detailId = extractLastUrlPartFromUrlString(link);
    const detailsPath = `${linkPrefix}/${detailId}`;
    const detailName =
      typeof namesList[index] === 'string' ? namesList[index] : '';

    return (
      <span key={index} className={styles['detail-link']}>
        <NavLink to={detailsPath}>{detailName}</NavLink>
        {index !== links.length - 1 && ','}
      </span>
    );
  });
};
