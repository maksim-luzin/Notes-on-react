/* eslint-disable no-param-reassign */
import { PayloadAction } from '@reduxjs/toolkit';
import { IPayloadUpdate, INote } from '../../interfaces';

const update = (notes: INote[], { payload }: PayloadAction<IPayloadUpdate>) =>
  notes.map((note) =>
    note.id !== payload.id ? note : { ...note, ...payload }
  );

export { update };
