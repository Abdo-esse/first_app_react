import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './router/App';
import reportWebVitals from './reportWebVitals';
import HelloWorld from './holloWorld/HelloWorld';
import TextField from './Forms/TextField';
import Fruit from './Fruits/Fruit';
import Counter from './Counter/Counter';
import Event from './Events/Event';
import Form from './Forms/Form';
import ProductListe from './Tps/store/ProductListe';
import UsersApp from './Tps/Users/UsersApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const fruits=["Appel","Orange","lemon","Strawberry"]
root.render(
  <>
  
  <div className=' container my-5'>
    <UsersApp/>

  </div>
    

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
