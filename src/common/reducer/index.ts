import {
  notesActions,
  initialState as notesInitialState,
  notesReducer as notes,
  TNotesActions
} from './notes';

const reducer = {
  notes
};

export { reducer, notesInitialState, notesActions };

export type { TNotesActions };
