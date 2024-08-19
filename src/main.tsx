import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { router } from './routes/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<div>Loading...</div>}>
    <React.StrictMode>
      <RouterProvider router={createBrowserRouter(router)}></RouterProvider>
    </React.StrictMode>
  </Suspense>
);
