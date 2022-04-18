import { IGetHasCreateUpdate } from '../interfaces';

const getHasCreateUpdate: IGetHasCreateUpdate = ({
  getCategory,
  getName,
  getContent,
  category,
  name,
  content
}) => {
  const noValues = !getCategory || !getName || !getContent;
  if (noValues) return false;

  const valueMatch =
    category === getCategory && name === getName && content === getContent;

  if (valueMatch) return false;

  return true;
};

export { getHasCreateUpdate };
