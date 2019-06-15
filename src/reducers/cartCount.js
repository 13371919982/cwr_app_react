// 购物车 
export default function (state={},action) {
  // let goods = action.data
  switch (action.type) {
    case 'ADD_COUNT':
      return 'ADD_COUNT'
    case 'SUB_COUNT':
      return 'SUB_COUNT'
    case 'TOTAL_COUNT':
      return 'TOTAL_COUNT'
    default:
      return '所有商品信息'
  } 
}