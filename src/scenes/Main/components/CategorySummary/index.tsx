import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getIcon } from '../../helpers';
import { ICategorySummary } from '../../interfaces';

import styles from './styles.module.scss';

const CategorySummary: FC<ICategorySummary> = ({ category, active, archived }) => (
  <div className={styles.rowNote}>
    <div className={styles.icon}>
      <div className={styles.iconBackground}>
        <FontAwesomeIcon icon={getIcon(category)} />
      </div>
    </div >
    <div className={styles.noteCategory}>{category}</div>
    <div className={styles.active}>
      {active}
    </div >
    <div className={styles.archived}>
      {archived}
    </div >
  </div >
);

export { CategorySummary };
