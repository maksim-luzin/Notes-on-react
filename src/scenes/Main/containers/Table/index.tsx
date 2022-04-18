import { IGetKey } from '../../../../common/interfaces';
import { ITable } from '../../interfaces';

import styles from './styles.module.scss';

const Table = <P,>({ Header, Row, dataArray, style }: ITable<P>) => {
  const getKey = <T,>(data: IGetKey<T>, key: number) => data!.id || String(key)
  return (
    <div className={styles.table}>
      <Header />
      <div
        className={styles.tableWithRows}
        style={style || {}}
      >
        {
          dataArray
            .map((data, key) => <Row {...data} key={getKey(data as unknown as IGetKey<string>, key)} />)
        }
      </div>
    </div >
  )
}

export { Table };
