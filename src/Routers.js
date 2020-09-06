import React, { Component } from 'react';
import Home from './Pages';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Component/navbar'
import Blogs from './Pages/blogs'
import _404 from './Pages/404'


function Routers() {
  return (
    <Router>
      <Navbar />
       <Switch>
         <Route exact path="/" component={Home} />
         <Route  path="/blogs" component={Blogs} />
         <Route  path="**" component={_404} />
       </Switch>
    </Router>
  );
}

export default Routers;
