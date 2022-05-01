import { useTypedSelector } from '../../../common/hooks';
import { getArrayCategoryNames } from '../../../common/helpers';
import { Status } from '../../../common/enums';
import { IStats, ICategorySummary } from '../interfaces';

const useGetStatsOfNotes = () => {
  const categoryStatsUndefined = {
    [Status.Active]: 0,
    [Status.Archived]: 0
  };

  const statistics: IStats = useTypedSelector(({ notes }) => notes).reduce(
    (stats: IStats, { category, status }) => {
      const otherStatus =
        status === Status.Active ? Status.Archived : Status.Active;

      if (!stats) {
        return {
          [category]: {
            [status]: 1,
            [otherStatus]: 0
          }
        };
      }

      if (!stats[category]) {
        return { ...stats, [category]: { [status]: 1, [otherStatus]: 0 } };
      }

      const newValue = stats[category][status] + 1;
      return {
        ...stats,
        [category]: { ...stats[category], [status]: newValue }
      };
    },
    {}
  );

  const categories = getArrayCategoryNames();

  return categories.map((category) => ({
    ...categoryStatsUndefined,
    ...statistics[category.name],
    category: category.name
  })) as ICategorySummary[];
};

export { useGetStatsOfNotes };
