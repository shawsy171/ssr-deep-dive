import { FETCH_USERS } from "./actions";

const initalState = [];

const users = (state = initalState, action) => {
  switch(action.type) {
    case FETCH_USERS:
      return [...action.payload.data ];
    default: 
      return state;
  }
}

export default users;