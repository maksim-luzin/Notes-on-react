import { Routes as Switch, Route } from 'react-router-dom';
import { Routes } from '../../enums';
import { Main } from '../../../scenes/Main/containers';
import { Note } from '../../../scenes/Note/components';
import { ConfirmDelete } from '../../../scenes/ConfirmDelete/components';
import { NotFound, Redirect } from '../../components';

const Routing = () => (
  <Switch>
    <Route path={Routes.Active} element={<Main />} />
    <Route path={Routes.Archived} element={<Main />} />
    <Route path={`${Routes.EditNote}/:id`} element={<Note />} />
    <Route path={`${Routes.ViewNote}/:id`} element={<Note />} />
    <Route path={Routes.NewNote} element={<Note />} />
    <Route path={`${Routes.ConfirmDelete}/:id`} element={<ConfirmDelete />} />
    <Route path={Routes.FirstStart} element={<Redirect />} />
    <Route path={Routes.All} element={<NotFound />} />
  </Switch>
);

export { Routing };
