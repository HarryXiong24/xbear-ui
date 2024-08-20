import App from '@/app';
import { ErrorPage, Icon, Button, Card, Tab, Message, Menus } from './components';

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
      {
        name: 'Message',
        path: '/message',
        element: <Message />,
      },
      {
        name: 'Menus',
        path: '/menus',
        element: <Menus />,
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
