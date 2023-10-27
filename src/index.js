import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';

import { BuyContextProvider } from './context/context';

import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom";
import Menu from './components/menu';
import Protected from './pages/protected';

function Contact() {
    return (
        <>
        <Menu/>
            <p>f.lemo@itecriocuarto.org.ar.</p>
        </>
    )
}

function Search(props){ //esta funcion debe ser extraida y ser usada con un customhook.
    let {algo} = useParams();//coincide con el endpoint
    return(
        <>
        <Menu/>
            <p>buscando {algo}...</p>
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/contact",
        element: Contact(),
    },
    {
        path: "/protected/",
        element: <Protected/>,
    },
    {
        path: "/busqueda",
        element: <p>Busqueda. Ingrese busqueda</p>,
    },
    {
        path: "/busqueda/:algo",
        element: Search(),
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
//este es el volumen que actualiza cada vez que guardas:
root.render(
    <>
    <BuyContextProvider>
        <RouterProvider router={router} />
    </BuyContextProvider>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
