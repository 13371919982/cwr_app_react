import React,{ Component } from 'react'
import Routes from "./routes/routes"
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

// import Home from "./components/home/home"
// import User from './components/user/user'
// import Shopcart from './components/shopcart/shopcart'
// import Details from "./components/details/details"
// import Login from "./components/login/login"
// import Setting from './components/setting/setting'
// import NotFound from "./components/notfount/notfound"

// 构造函数只执行一次
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path={ '/' } component={ Home }/>
          <Route path={ '/home' } component={ Home }/>
          <Route path={ '/user' } component={ User }/>
          <Route path={ '/shopcart' } component={ Shopcart }/>
          <Route path={ '/details/:lid' } component={ Details }/>
          <Route path={ '/login' } component={ Login }/>
          <Route path={ '/setting' } component={ Setting }/>
          <Route component={NotFound}/> */}
          {
            Routes.length > 0 && Routes.map((item,i)=> {
              if(item.exact) return <Route key={ i } { ...item }/>
              return <Route key={ i } path={ item.path } render={ (props) => {
                return <item.component { ...props } routes={ item.routes } />
              }} />
            })
          }
        </Switch>
      </Router>
    )
  }
}

export default App