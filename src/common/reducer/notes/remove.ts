/* eslint-disable no-param-reassign */
import { PayloadAction } from '@reduxjs/toolkit';
import { INote, IId } from '../../interfaces';

const remove = (notes: INote[], { payload }: PayloadAction<IId>) =>
  notes.filter(({ id }) => id !== payload.id);

export { remove };
