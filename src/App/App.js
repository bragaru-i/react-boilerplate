import React from 'react';
import PropTypes from 'prop-types';

import styles from './App.module.scss';
import LoadingCubes from '../UI/LoadingCubes/LoadingCubes';

const App = ({ title }) => {
  return (
    <div className={styles.App}>
      A simple react boilerplate
      <div className={styles.LoadingCubes}>
        <LoadingCubes />
      </div>
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
