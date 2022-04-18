import { Category } from '../../../common/const';

const getIcon = (category: string) => Category[category].icon;

export { getIcon };
