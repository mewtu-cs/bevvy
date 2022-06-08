import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import Login from './component/Login'
import{ BrowserRouter,Routes,Route } from 'react-router-dom'
import SignUp from './component/Signup';


const root = ReactDom.createRoot(document.getElementById("root")!);

const checkCookie: any = () => {
    fetch('/api/confirmCookies')
    .then(data => data.json())
    .then(data => {
        if(data === false) return false;
        else return true;
        console.log('data', data);
    })
}

root.render(
    <BrowserRouter>
    <Routes>
        {/* {isLoggedIn && <Route path='/App' element={<App/>}/>} */}
        <Route path='/' element={ checkCookie() ? <App/> : <Login/>}/>
        <Route path='/Signup' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
);

