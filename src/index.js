import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from "./store/store"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Quiz from './container/quiz';
import { QuizAdmin } from './container/Admin';
import { Home } from './container/home';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/admin",
    element: <QuizAdmin />,
  },
])
root.render(
  <Provider store={store} >
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
