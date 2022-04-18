import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Category } from '../../../common/const';

const getIcon = (category: string) => Category[category].icon as IconProp;

export { getIcon };
