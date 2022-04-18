import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getIcon } from '../../helpers';
import { useSummaryNotesInCategory } from '../../hooks';
import { Status } from '../../../../common/enums';
import { ICategorySummary } from '../../../Note/interfaces';

import styles from './styles.module.scss';

const CategorySummary: FC<ICategorySummary> = ({ name }) => (
  <div className={styles.rowNote}>
    <div className={styles.icon}>
      <div className={styles.iconBackground}>
        <FontAwesomeIcon icon={getIcon(name)} />
      </div>
    </div >
    <div className={styles.noteCategory}>{name}</div>
    <div className={styles.active}>
      {useSummaryNotesInCategory(name, Status.Active)}
    </div >
    <div className={styles.archived}>
      {useSummaryNotesInCategory(name, Status.Archive)}
    </div >
  </div >
);

export { CategorySummary };
