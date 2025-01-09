import reduxActions from "utils/constants/reduxActions"

const initState = {}

const initData = (state = initState, action) => {
  switch (action.type) {
    case reduxActions.SET_PROVINCES:
      return {...state, provinces: action.payload}
    default:
      return state
  }
}

export default initData