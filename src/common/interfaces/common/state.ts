import {INote} from '../notes';

interface IState {
  error: string;
  notes: INote[];
}

export type {IState};
