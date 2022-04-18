import { Category } from '../const';

const getArrayCategoryNames = () =>
  Object.values(Category).map(({ name }) => ({ name }));

export { getArrayCategoryNames };
