import {
  faShoppingCart,
  faHeadSideVirus,
  faLightbulb,
  faQuoteRight
} from '@fortawesome/free-solid-svg-icons';
import { ICategoryObject } from '../interfaces';

const Category: ICategoryObject = {
  Task: {
    name: 'Task',
    icon: faShoppingCart
  },
  RandomThought: {
    name: 'RandomThought',
    icon: faHeadSideVirus
  },
  Idea: {
    name: 'Idea',
    icon: faLightbulb
  },
  Quote: {
    name: 'Quote',
    icon: faQuoteRight
  }
};

export { Category };
