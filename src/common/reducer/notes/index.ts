import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { create } from './create';
import { update } from './update';
import { remove } from './remove';

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    create,
    update,
    remove
  }
});

const notesReducer = notesSlice.reducer;
const notesActions = notesSlice.actions;

type TNotesActions = typeof notesActions;

export { initialState, notesReducer, notesActions };

export type { TNotesActions };
