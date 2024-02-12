import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./routes";
import {PostProvider} from "./providers/postProvider";
import {UserProvider} from "./providers/userProvider";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <UserProvider>
        <PostProvider>
            <RouterProvider router={router} />
        </PostProvider>
      </UserProvider>
  </React.StrictMode>
);
