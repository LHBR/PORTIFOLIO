import React from 'react'
import './main.css'
import Header from './componentes/header/Header'
import Footer1 from './componentes/Footer1/Footer1'
import Main from './componentes/main/Main'
import Contato from './componentes/contato/Contato'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <>
        <Header/>
        <Main/>
        <Footer1/>
      </>,
  },
  {
    path: "/sobre",
    element: 
    <>
      <Header/>
      <div className='content-main'>Página Sobre!</div>
      <Footer1/>
    </>,
  },
  {
    path: "/contato",
    element: 
      <>
        <Header/>
        <Contato/>
        <Footer1/>
      </>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)