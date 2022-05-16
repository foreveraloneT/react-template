import React from 'react';

import classNames from 'classnames';

import styles from './Test.module.scss';

export default function Test() {
  return (
    <div className={styles.Test}>
      <h1 className={classNames('text-3xl font-bold underline', styles['Test-topic'])}>Test</h1>
    </div>
  );
}
