import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import { router } from './routes';

const App = () => {
  return <RouterProvider router={createBrowserRouter(router)} />;
};

export default App;
