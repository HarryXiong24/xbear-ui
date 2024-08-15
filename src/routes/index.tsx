import App from '@/app';
import ErrorPage from '@/pages/error-page';
import { lazy } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
const Icon = lazy(() => import('@/pages/icon'));
// eslint-disable-next-line react-refresh/only-export-components
const Button = lazy(() => import('@/pages/button'));
// eslint-disable-next-line react-refresh/only-export-components
const Card = lazy(() => import('@/pages/card'));
// eslint-disable-next-line react-refresh/only-export-components
const Tab = lazy(() => import('@/pages/tabs'));

export const router = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        name: 'Icon',
        path: '/icon',
        element: <Icon />,
      },
      {
        name: 'Button',
        path: '/button',
        element: <Button />,
      },
      {
        name: 'Card',
        path: '/card',
        element: <Card />,
      },
      {
        name: 'Tab',
        path: '/tab',
        element: <Tab />,
      },
    ],
  },
];

export const sider = router[0].children.map((item, index) => {
  return {
    name: item.name,
    id: index,
    path: item.path,
  };
}) as {
  name: string;
  id: number;
  path: string;
}[];
