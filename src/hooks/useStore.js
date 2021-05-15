import React, { useReducer, useMemo } from "react";
import { getDataReducer } from "../reducers/getDataReducer";

const StoreContext = React.createContext();
const initialState = { data: null, loading: false, error: null };
export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(getDataReducer, initialState);
  const value = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

export const useStore = () => React.useContext(StoreContext);
