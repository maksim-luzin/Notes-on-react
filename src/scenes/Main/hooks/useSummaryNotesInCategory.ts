import { useSelector } from 'react-redux';
import { TStore } from '../../../common/store';

const useSummaryNotesInCategory = (
  categorySummary: string,
  statusSummary: string
) => (
  useSelector(({ notes }: TStore) => notes).reduce(
    (amount: number, { category, status }) =>
      category === categorySummary && status === statusSummary
        ? amount + 1
        : amount,
    0
  )
);

export { useSummaryNotesInCategory };
