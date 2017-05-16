export default (state = [], action) => {
  switch (action.type) {
    case 'filters/add':
      return [ ...state, action.filter ]
    default:
      return state
  }
}
