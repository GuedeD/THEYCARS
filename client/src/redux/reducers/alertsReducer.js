const InitialState = {
  loading: false,
};
export const alertsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: action.payload };
    // case ACTION_TYPE_2:
    //   return state;
    default:
      return state;
  }
};
