// action
export function addCart(data) {
  return {
    type: 'ADD_COUNT',
    data
  }
}

export function subCart(data) {
  return {
    type: 'SUB_COUNT',
    data
  }
}

export function getCart(data) {
  return {
    type: 'TOTAL_COUNT',
    data
  }
}