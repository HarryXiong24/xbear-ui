import App from '@/app';
// import Card from '@/pages/Card';
// import Button from '@/pages/Button';
import ErrorPage from '@/pages/error-page';
import Icon from '@/pages/icon';
import { lazy } from 'react';

// 懒加载组件
// eslint-disable-next-line react-refresh/only-export-components
const Button = lazy(() => import('@/pages/button'));
// eslint-disable-next-line react-refresh/only-export-components
const Card = lazy(() => import('@/pages/card'));

export const router = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
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
        name: 'Icon',
        path: '/icon',
        element: <Icon />,
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
