import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Posts, { loader as postsLoader } from './routes/Posts'
import './index.css'
import NewPost, { action as newPostAction } from './routes/NewPost/NewPost';
import RootLayout from './routes/RootLayout';
import PostDetails, { loader as postDetailLoader } from './routes/PostDetails/PostDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [{
      path: '/',
      element: <Posts />,
      loader: postsLoader, //postLoader will be triggered on page load
      children: [{
        path: 'create-post',
        element: <NewPost />,
        action: newPostAction // newPostAction will be triggered on form submit
      },
      {
        path: ':postId',
        element: <PostDetails />,
        loader: postDetailLoader
      }]
    }]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
)
