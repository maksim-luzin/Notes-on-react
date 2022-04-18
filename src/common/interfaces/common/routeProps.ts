import { ReactElement } from 'react';

interface IRouteProps {
  exact: boolean;
  paths: string[];
  component: () => ReactElement;
}

export type { IRouteProps };
