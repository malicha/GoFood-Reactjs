import React, { Component } from 'react'
import {Switch, Route} from "react-router-dom";
import Home from './pages/home/Home';
import DashJenis from './material/DashJenis'
import DashFood from './material/DashFood';
// import Checkout from './material/Checkout';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/jenis" exact component={DashJenis}/>
          <Route path="/jenis/:id" component={DashFood}/>
          {/* <Route path="/checkout" component={Checkout}/> */}
        </Switch>
      </div>
    )
  }
}
