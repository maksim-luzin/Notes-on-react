/* eslint-disable no-param-reassign */
import { PayloadAction } from '@reduxjs/toolkit';
import { INote } from '../../interfaces';

const create = (notes: INote[], { payload }: PayloadAction<INote>) => [
  payload,
  ...notes
];

export { create };
