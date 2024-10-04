import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from 'error-page';
import April2024 from 'April2024';
import May2024 from 'May2024';
import June2024 from 'June2024';
import July2024 from 'July2024';
import August2024 from 'August2024';
import September2024 from 'September2024';
import Hwp2024 from 'Hwp2024';
import { BernardBio } from 'indexbiobernard';
import { ElenaBio } from 'indexbioelena';
import { JillBio } from 'indexbiojill';
import { HarryBio } from 'indexbioharry';
import { LennieBio } from 'indexbiolennie';
import October2024 from 'October2024';



// FIXME: this could be made a lot cleaner. Use a loop. Or something. :)
// to explain what this does...
// each object has three key attributes:
// the `path` is where you will navigate in your site to access the page.
// `/` is the root. Then, `/mypage` would be accessed via mysite.com/mypage
// you must pass the component you want to render on the page as the element.
// this should be exported from each of your pages using `export function MyPage`
// (the name will be different, but you still want to export the function)
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App/>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/april2024',
      element: <April2024/>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/may2024',
      element: <May2024/>,
      errorElement: <ErrorPage/>
    },

    {
      path: '/june2024',
      element: <June2024/>,
      errorElement: <ErrorPage/>
    },

    {
      path: '/july2024',
      element: <July2024/>,
      errorElement: <ErrorPage/>
    },

    {
      path: '/august2024',
      element: <August2024/>,
      errorElement: <ErrorPage/>
    },

    {
      path: '/september2024',
      element: <September2024/>,
      errorElement: <ErrorPage/>
    },

    {
      path: '/october2024',
      element: <October2024/>,
      errorElement: <ErrorPage/>
    },


    {
      path: '/hwp2024',
      element: <Hwp2024/>,
      errorElement: <ErrorPage/>
    },

    // bios
    {
      path: '/bernard-bio',
      element: <BernardBio/>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/elena-bio',
      element: <ElenaBio/>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/jill-bio',
      element: <JillBio/>,
      errorElement: <ErrorPage/>
    } ,
    {
      path: '/lennie-bio',
      element: <LennieBio/>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/harry-bio',
      element: <HarryBio/>,
      errorElement: <ErrorPage/>
    }
  ],
  {basename: process.env.PUBLIC_URL}
)

const root = ReactDOM.createRoot(document.getElementById('root'));
// this is all that is needed to route pages. The router is defined above on line 19.
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
