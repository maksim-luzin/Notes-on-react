import { getArrayCategoryNames } from "../../../../common/helpers";

const CategoryOptions = () => (
  <>
    {
      getArrayCategoryNames()
        .sort(({ name: name1 }, { name: name2 }) => name1 > name2 ? 1 : -1)
        .map(({ name }, key) => (
          <option key={key}>{name}</option>
        ))
    }
  </>
);

export { CategoryOptions };
