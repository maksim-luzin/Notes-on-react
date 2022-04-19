import { useLocation } from 'react-router-dom';
import { useTypedSelector } from '../../../../common/hooks';
import { getArrayCategoryNames } from '../../../../common/helpers';
import { Table } from '../Table';
import { HeadNotes, HeadSummary, NoteInfo, CategorySummary, CreateNote } from "../../components";
import { NoteInfoTableStyle, NoteSummaryTableStyle } from '../../const';

import styles from './styles.module.scss';

const Main = () => {
  const pathname = useLocation().pathname.slice(1);
  const notes = useTypedSelector(({ notes: myNotes }) => myNotes).filter(({ status }) => status === pathname);
  const categories = getArrayCategoryNames();

  return (
    <div className={styles.main}>
      <Table
        key='1'
        Header={HeadNotes}
        Row={NoteInfo}
        dataArray={notes}
        style={NoteInfoTableStyle}
      />
      <CreateNote key='2' />
      <Table
        key='3'
        Header={HeadSummary}
        Row={CategorySummary}
        dataArray={categories}
        style={NoteSummaryTableStyle}
      />
    </div>
  )
};

export { Main };
