/* eslint-disable no-useless-return */
import { useState, useEffect, MouseEvent } from "react";
import uuid from 'react-uuid';
import { NavLink, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useTypedSelector, useTypedDispatch } from '../../../../common/hooks';
import { CategoryOptions } from '../CategoryOptions';
import { notesActions } from "../../../../common/reducer";
import { getHasCreateUpdate, } from "../../helpers";
import { FieldNames, Actions } from '../../enums';
import { Routes, Status } from '../../../../common/enums';
import { NewNote } from "../../const";

import styles from './styles.module.scss';

const Note = () => {
  const searchId = useParams().id || '';
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  const {
    id,
    category,
    name,
    content,
    status
  } = useTypedSelector(({ notes }) => notes.find(note => note.id === searchId)) || NewNote;

  const newRoute = status === Status.Archive
    ? Routes.Archived
    : Routes.Active

  const disabled = status === Status.Archive
  const [getCategory, setCategory] = useState(category);
  const [getName, setName] = useState(name);
  const [getContent, setContent] = useState(content);

  useEffect(() => {
    if (!id && (pathname !== Routes.NewNote)) {
      navigate(Routes.NotFound);
    }
  });

  const createUpdateNote = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const hasCreateUpdate = getHasCreateUpdate({
      category,
      name,
      content,
      getCategory,
      getName: getName.trim(),
      getContent: getContent.trim()
    })

    if (!hasCreateUpdate) return;

    if (searchId && id) {
      dispatch(notesActions.update({
        id,
        category: getCategory,
        name: getName.trim(),
        content: getContent.trim()
      }))

      navigate(newRoute);
      return;
    };

    dispatch(notesActions.create({
      status,
      id: uuid(),
      category: getCategory,
      name: getName.trim(),
      content: getContent.trim(),
      created: new Date()
    }))

    navigate(newRoute)
  }

  return (
    <form className={styles.createdTask} name={FieldNames.Note}>
      <fieldset className={styles.taskOption}>
        <label className={styles.selectCategory}>
          <span>Category</span>
          <select
            name={FieldNames.Category}
            disabled={disabled}
            value={getCategory}
            onChange={({ target: { value } }) => setCategory(value)}
          >
            <CategoryOptions />
          </select>
        </label>
        <label className={styles.noteName}>
          <span>Name</span>
          <input
            name={FieldNames.Name}
            placeholder='Write your note name'
            value={getName}
            disabled={disabled}
            onChange={({ target: { value } }) => setName(value)}
          />
        </label>
      </fieldset >
      <textarea
        className={styles.noteContent}
        name={FieldNames.Content}
        placeholder='Write your note'
        value={getContent}
        readOnly={disabled}
        onChange={({ target: { value } }) => setContent(value)}
      >
      </textarea>
      < div className={styles.rowNewNote}>
        <NavLink to={newRoute} className={styles.cancelCreate}>Cancel</NavLink>
        {
          status === Status.Archive
            ? null
            : (
              <button onClick={createUpdateNote} className={styles.createAction}>
                {!searchId ? Actions.Create : Actions.Save}
              </button >
            )
        }
      </div >
    </form >
  );
};

export { Note };
