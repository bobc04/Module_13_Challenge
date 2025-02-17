import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Outlet } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <div>
      <RouterProvider router={router} />
      {/* Optional: Add common layout elements like headers/navigation */}
      <Outlet /> {/* This renders the child routes */}
    </div>
  );
};

// const App: React.FC = () => {
//   return <RouterProvider router={router} />;
// };

export default App;

