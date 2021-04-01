import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import styles from './spinner.module.scss';

const Loading = () => {
  return (
    <Loader
      className={styles.container}
      type="Circles"
      color="#ccc"
      height={200}
      width={100}
    />
  );
};

export default Loading;