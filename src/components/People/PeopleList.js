import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../actions/';
import {
  compareValues,
  extractLastUrlPartFromUrlString,
} from '../../utils/utils';

class PeopleList extends PureComponent {
  componentDidMount() {
    this.props.fetchPeople();
  }

  render() {
    const { peopleList } = this.props;

    if (!peopleList || peopleList.length === 0) return null;

    return (
      <main>
        <h2>People</h2>
        <ul>
          {peopleList.map(character => (
            <li key={character.name}>
              <NavLink
                to={`people/${extractLastUrlPartFromUrlString(character.url)}`}
              >
                {character.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

const mapStateToProps = state => {
  const {
    people: { list: peopleList },
    main,
  } = state;

  return {
    peopleList: peopleList.sort(compareValues('name')),
    ...main,
  };
};

export default connect(mapStateToProps, actions)(PeopleList);
