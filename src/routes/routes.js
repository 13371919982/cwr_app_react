import Home from "../components/home/home"
import Classify from "../components/classify/classify"
import Shopcart from "../components/shopcart/shopcart"
import User from "../components/user/user"
import Details from "../components/details/details"
import Login from "../components/login/login"
import Setting from "../components/setting/setting"
import NotFound from "../components/notfount/notfound"


const routes = [
  { exact: true, path: '/', component: Home},
  { path: '/home', component: Home},
  { path: '/classify', component: Classify},
  { path: '/shopcart', component: Shopcart},
  { path: '/user', component: User},
  { path: '/details/:lid', component: Details},
  { path: '/login', component: Login },
  { path: '/setting', component: Setting},
  { component: NotFound},

]

export default routes