// export const store = createStore(reducer)

import { createStore } from "redux"
import Reducers from "../reducers/reducers"

export default function (init) {
  // init 参数是state的初始值
  const store = createStore( 
    Reducers,
    init,
    window.devToolsExtension ? window.devToolsExtension() : undefined
  )
  return store
}
