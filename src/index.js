// Thanks to the various sites for Help
import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import App from "./App";
import Blogs from "./Blogs";
import Contests from "./Contests";
import Problems from "./Problems";
import ErrorPage from "./ErrorPage";
const routs = (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/contests">Contests</Link>
        </li>
        <li>
          <Link to="/problems">Problems</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/contests" component={Contests} />
        <Route path="/problems" component={Problems} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
ReactDOM.render(routs, document.getElementById("root"));
