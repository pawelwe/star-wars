import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Pager from '../Pager/Pager';
import * as actions from '../../actions/';
import {
  compareValues,
  extractLastUrlPartFromUrlString,
  calculateVisibleRange,
} from '../../utils/utils.js';
import styles from './PeopleList.scss';
import avatar from './assets/avatar.jpg';
import { loadData, saveData } from '../../utils/utils';

export class PeopleList extends PureComponent {
  async componentDidMount() {
    const cachedData = loadData(`people-list`);

    if (!cachedData) {
      await this.props.fetchPeople();

      const { allPeopleList } = this.props;

      saveData(allPeopleList, `people-list`);
    } else {
      this.props.setPeople(cachedData);
    }
  }

  render() {
    const { peopleList, allPeopleCount } = this.props;

    if (!peopleList || peopleList.length === 0) return null;

    return (
      <main data-testid="people-list" className="fade-in">
        <h2>People</h2>
        <ul>
          {peopleList.map(({ name, url }) => (
            <li key={name} className={styles['list-item']}>
              <img src={avatar} alt="avatar" />
              <NavLink to={`people/${extractLastUrlPartFromUrlString(url)}`}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <Pager itemsCount={allPeopleCount} />
      </main>
    );
  }
}

const mapStateToProps = state => {
  const {
    people: { list: peopleList },
    main,
    main: { currentPage },
  } = state;

  return {
    peopleList: calculateVisibleRange(
      peopleList.sort(compareValues('name')),
      currentPage,
    ),
    allPeopleList: peopleList,
    allPeopleCount: peopleList.length,
    ...main,
  };
};

export default connect(mapStateToProps, actions)(PeopleList);
