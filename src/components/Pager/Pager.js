import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/';
import config from '../../config.js';
import styles from './Pager.scss';

export const Pager = ({ currentPage, itemsCount, setPage }) => {
  if (!itemsCount || itemsCount.length === 0) return null;

  const pages = Array(Math.ceil(itemsCount / config.pageItems)).fill(null);

  return (
    <div className={styles['pager']}>
      <ul>
        <li onClick={currentPage > 1 ? () => setPage(currentPage - 1) : null}>
          prev
        </li>
        {pages.map((page, index) => {
          const currentIndexToPage = index + 1;
          return (
            <li
              onClick={() => setPage(currentIndexToPage)}
              key={index}
              className={
                currentIndexToPage === currentPage
                  ? `${styles['active']}`
                  : null
              }
            >
              {currentIndexToPage}
            </li>
          );
        })}

        <li
          onClick={
            currentPage < pages.length ? () => setPage(currentPage + 1) : null
          }
        >
          next
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { main } = state;

  return {
    ...main,
    itemsCount: ownProps.itemsCount,
  };
};

export default connect(mapStateToProps, actions)(Pager);
