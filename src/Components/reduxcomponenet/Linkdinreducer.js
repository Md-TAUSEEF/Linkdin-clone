// Linkdinreducer.js
const initialState = {
  user: null,
  loginuser: 0,
};

export const loginuser = (userData) => {
  return {
    type: "LOGIN_ACTION_TYPE",
    payload: userData,
  };
};

export const logoutuser = () => {
  return {
    type: "LOGOUT_ACTION_TYPE",
  };
};

const Linkdinreducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ACTION_TYPE":
      return {
        ...state,
        user: action.payload,
        loginuser: state.loginuser + 1,
      };

    case "LOGOUT_ACTION_TYPE":
      return {
        ...state,
        logout: null,
        user: null,
      };

    default:
      return state;
  }
};

export default Linkdinreducer;
