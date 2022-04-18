import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCaretSquareDown, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
import { useTypedDispatch } from '../../../../common/hooks';
import { Routes, Status } from '../../../../common/enums';
import { notesActions } from '../../../../common/reducer';
import {
  getIcon,
  getContentForView,
  getDateForView,
  getDateFromContent
} from '../../helpers';
import { INote } from "../../../../common/interfaces";

import styles from './styles.module.scss';

const NoteInfo: FC<INote> = ({
  id,
  category,
  name,
  content,
  created,
  status
}) => {
  const dispatch = useTypedDispatch();
  const editViewRoute = status === Status.Active
    ? `${Routes.EditNote}/${id}`
    : `${Routes.ViewNote}/${id}`

  const confirmDeleteRoute = `${Routes.ConfirmDelete}/${id}`

  const arсhiveUnzip = () => {
    const newStatus = status === Status.Active
      ? Status.Archive
      : Status.Active

    dispatch(notesActions.update({
      id,
      status: newStatus
    }))
  }

  return (
    <div className={styles.rowNote} >
      <div className={styles.icon}>
        <div className={styles.iconBackground}>
          <FontAwesomeIcon icon={getIcon(category)} />
        </div>
      </div>
      <div className={styles.name}>{getContentForView(name)}</div>
      <div className={styles.created}>{getDateForView(created)}</div>
      <div className={styles.category}>{category}</div>
      <div className={styles.content}>{getContentForView(content)}</div>
      <div className={styles.dates}>{getDateFromContent(content)}</div>
      <NavLink to={editViewRoute} className={styles.edit}>
        <FontAwesomeIcon icon={status === Status.Active ? faPen : faEye} />
      </NavLink>
      <div onClick={arсhiveUnzip} className={styles.archive}>
        <FontAwesomeIcon icon={faCaretSquareDown} />
      </div>
      {status === Status.Archive
        ? null
        : (
          <NavLink to={confirmDeleteRoute} className={styles.delete}>
            <FontAwesomeIcon icon={faTrash} />
          </NavLink>
        )
      }
    </div >
  );
}

export { NoteInfo };
