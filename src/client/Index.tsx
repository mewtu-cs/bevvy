import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import Login from './component/Login'
import{ BrowserRouter,Routes,Route } from 'react-router-dom'
import SignUp from './component/Signup';


const root = ReactDom.createRoot(document.getElementById("root")!);

root.render(
    <BrowserRouter>
    <Routes>
        <Route path='/App' element={<App/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/Signup' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
);

