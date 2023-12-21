// loginAction.js
export const login = (userData) => {
    return {
      type: "LOGIN_ACTION_TYPE",
      payload: userData,
    };
  };
  