import {FC} from 'react';
import { IStyle } from '../../../common/interfaces';

interface ITable<P> {
  Header: FC;
  Row: FC<P>;
  dataArray: P[];
  style?: IStyle;
}

export type {ITable};
