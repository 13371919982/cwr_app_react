import React,{ Component } from 'react'
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

// import Details from "./components/details/details"
// import Shopcart from "./components/shopcart/shopcart"
// import User from "./components/user/user"
// import Login from "./components/login/login"

import Home from "./components/home/home"
import NotFound from "./components/notfount/notfound"

// 构造函数只执行一次
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    )
  }
}

export default App