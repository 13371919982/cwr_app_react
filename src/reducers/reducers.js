import { combineReducers } from "redux"
import cartCount from "./cartCount"
import user from "./user"


export default combineReducers({
  cartCount,
  user
  // location
})

// 随着应用变得非常复杂 需要对reducer函数进行拆分  拆分后的每一块独立负责 state的一部分
// 把一个由多个不同的reducer函数 作为value的object 合并成一份最终的reducer函数
// 就可以对这个reducer调用createStore 