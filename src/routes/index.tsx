import App from '@/App';
import Card from '@/pages/Card';
import Button from '@/pages/Button';
import ErrorPage from '@/pages/ErrorPage';

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
        index: true,
      },
      {
        name: 'Card',
        path: '/card',
        element: <Card />,
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
});
