export const states = {
    leads: [],
    loading: false,
    status: null,
    error: null
};

export const  reducer = (state, action) => {
    switch (action.type) {
      case "LOADING_START":
        return { ...state, loading: true };
        break;
      case "LOADING_END":
        return { ...state, loading: false };
        break;
      case "SUCCESS":
        return { ...state, leads: action.payload, status: "success" };
        break;
      case "ERROR":
        return { ...state, error: action.payload, status: "error" };
        break;
      default:
        return state;
    }
  };