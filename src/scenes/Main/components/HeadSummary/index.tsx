import { NavLink } from 'react-router-dom';
import { Routes } from '../../../../common/enums';

import styles from './styles.module.scss';

const HeadSummary = () => (
  <div className={styles.rowHead}>
    <div className={styles.icon}></div>
    <div className={styles.noteCategory}>Note Category</div>
    <NavLink to={Routes.Active} className={styles.active}>Active</NavLink>
    <NavLink to={Routes.Archived} className={styles.archived}>Archived</NavLink>
  </div >
);

export { HeadSummary };
