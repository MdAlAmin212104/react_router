import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Users from './components/User/Users.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Post from './components/Post/Post.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/users",
        loader : ()=>fetch ('https://jsonplaceholder.typicode.com/users'),
        element: <Users/>
      },
      {
        path : "/user/:userId",
        //loader : ({params})=>console.log(params.userId),
        loader : ({ params })=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails/>
      },
      {
        path : "/posts",
        loader : ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Post/>
      },
      {
        path : "/post/:postId",
        loader : ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails/>
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
