import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import{ BrowserRouter } from 'react-router-dom'


const root = ReactDom.createRoot(document.getElementById("root")!);

root.render(
    <BrowserRouter>
        <div>hello from index.ts</div>
        <App/>    
    </BrowserRouter>
);
// cons// t index = () </BrowserRouter>=> {
//     // return ReactDOM.render(
//   <BrowserRouter>
//       <App />  
//     </BrowserRouter>, ;
//     document.getElem;);

// }

// export default index
