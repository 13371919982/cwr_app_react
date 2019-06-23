import React,{ Component } from 'react'
import Routes from "./routes/routes"
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

// 构造函数只执行一次
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
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