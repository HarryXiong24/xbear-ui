import App from '@/app';
import Card from '@/pages/Card';
import Button from '@/pages/Button';
import Error from '@/pages/Error';
import ErrorForward from '@/utils/error-forward';

export const router = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorForward />,
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
        name: 'Error',
        path: '/error',
        element: <Error />,
      },
    ],
  },
];

export const sider = router[0].children
  .filter((item) => !item.name?.startsWith('Error'))
  .map((item, index) => {
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
