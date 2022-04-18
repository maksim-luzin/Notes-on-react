import { useEffect } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { useTypedDispatch, useTypedSelector } from '../../../../common/hooks';
import { notesActions } from "../../../../common/reducer";
import { Routes } from '../../../../common/enums';

import styles from './styles.module.scss';

const ConfirmDelete = () => {
  const searchId = useParams().id || '';
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  const hasId = Boolean(
    searchId
    && useTypedSelector(({ notes }) => (
      notes.find(note => note.id === searchId))
    )
  );

  useEffect(() => {
    if (!hasId) navigate(Routes.NotFound)
  });

  const deletedNote = () => {
    dispatch(notesActions.remove({ id: searchId }));
    navigate(Routes.Active);
  }

  return (
    <div className={styles.confirmBackground}>
      <div className={styles.confirmForm}>
        <div>
          Are you sure, then you want to delete this note?
        </div>
        <div className={styles.confirmAction}>
          <NavLink to={Routes.Active} className={styles.cancel}>Cancel</NavLink>
          <button
            className={styles.deleteAction}
            onClick={deletedNote}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export { ConfirmDelete };
