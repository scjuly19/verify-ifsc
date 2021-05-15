const initialState = { data: null, loading: false, error: null };

export function getDataReducer(state, action) {
  switch (action.type) {
    case "REQUEST_DATA": {
      return {
        ...state,
        loading: true,
      };
    }

    case "REQUEST_SUCCESSFUL": {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    }
    case "REQUEST_FAILED": {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case "RESET_STORE": {
      state = initialState;
      return { ...state };
    }
  }
}
