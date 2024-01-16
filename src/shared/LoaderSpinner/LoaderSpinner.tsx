import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import styles from './loaderspinner.css';

export function LoaderSpinner({ visibleSpinner }: { visibleSpinner: boolean }) {
  const spinner = useSelector<RootState, boolean>(
    (state) => state.appReducer.loading
  );

  return (
    <div className={styles.loaderStyles}>
      <TailSpin
        height="80"
        width="80"
        color="rgba(204, 102, 51, 1)"
        ariaLabel="tail-spin-loading"
        radius="2"
        wrapperStyle={{}}
        wrapperClass=""
        visible={visibleSpinner}
      />
    </div>
  );
}
