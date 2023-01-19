import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import MicroFrontend from "./MicroFrontend";

import "./App.css";

const defaultHistory = createBrowserHistory();

// const {
//   REACT_APP_HEADER_HOST: headerHost,
//   REACT_APP_BLOGS_HOST: blogHost,
// } = process.env;

const headerHost = "http://localhost:4002";
// const headerHost = "";
const blogHost = "http://localhost:4001";

function Header({ history }) {
  return <MicroFrontend history={history} host={headerHost} name="Header" />;
}

function Blogs({ history }) {
  return <MicroFrontend history={history} host={blogHost} name="Blogs" />;
}

function BlogDetail({history}) {
  return (
    <div>
      <MicroFrontend history={history} host={blogHost} name="Blogs" />
    </div>
  );
}


function Home({ history }) {

  return (
    <div className="container">
       {/* <Header /> */}
       <Blogs />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/main" component={Blogs} />
          <Route exact path="/blogdetail/:blogid" component={BlogDetail} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
