import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import Login from './component/Login'
import{ BrowserRouter,Routes,Route } from 'react-router-dom'
import { Sign } from 'crypto';


const root = ReactDom.createRoot(document.getElementById("root")!);

root.render(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/Login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
);

