import React from 'react';
import PropTypes from 'prop-types';

import styles from './App.module.scss';
import LoadingCubes from '../UI/LoadingCubes/LoadingCubes';

const App = ({ title }) => {
  console.log('text');
  return (
    <div className={styles.App}>
      A simple react boilerplate
      <div className={styles.LoadingCubes}>
        <LoadingCubes />
        sadasd asdasd asdsad sadasd asdasd asdasd asdasd asdasd asdasd
      </div>
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
