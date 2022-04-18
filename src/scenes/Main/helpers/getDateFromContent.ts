import { DatesRegExp } from '../const';

const getDateFromContent = (content: string) => {
  const dates = content.match(DatesRegExp);
  if (!dates) return '';

  return dates.join(', ');
};

export { getDateFromContent };
