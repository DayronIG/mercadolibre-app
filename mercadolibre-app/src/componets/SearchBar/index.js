/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useState } from 'react';
import styles from './search.module.scss';
import Search from '../../utils/assets/ic_Search.png';
import {withRouter} from 'react-router-dom'

const index = ({history}) => {
  const [value, setValue] = useState('');
  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!value.trim()) return;
    console.log(`/items?q=${value}`)
    history.push(`/items?q=${value}`)
  };

  return (
    <div className={styles.searchBar}>
      <form onSubmit={handleOnSubmit}>
        <button type="submit">
          <img src={Search} alt="Search" />
        </button>
        <input
          type="text"
          placeholder="Nunca dejes de buscar"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </form>
    </div>
  );
};

//export default index;
export default withRouter(index)
