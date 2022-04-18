import { NavLink } from "react-router-dom";
import { Routes } from "../../../../common/enums";

import styles from './styles.module.scss';

const CreateNote = () => (
  <div className={styles.rowCreateNote}>
    <NavLink to={Routes.NewNote} className={styles.createNote}>
      Create Note
    </NavLink>
  </div>
)

export { CreateNote };
