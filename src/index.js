import React from 'react'
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import Blogs from './Blogs';
import App from './App'
//import ContactUs from './ContactUs'
import ErrorPage from './ErrorPage';
const routs = (
   < BrowserRouter >
      <div>
         <ul>
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/blogs">Blogs</Link>
            </li>
         </ul>
         <Switch>
            <Route exact path="/" component={App} />
            <Route path="/blogs" component={Blogs} />
            <Route component={ErrorPage} />
         </Switch>
      </div>
   </ BrowserRouter >
);
ReactDOM.render(routs, document.getElementById('root'));