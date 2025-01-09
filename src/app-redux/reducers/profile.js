import reduxActions from "utils/constants/reduxActions"

const initState = {}

const profile = (state = initState, action) => {
  switch (action.type) {
    case reduxActions.SET_PROFILE:
      return action.payload
    default:
      return state
  }
}

export default profile