import { createContext, useReducer, useContext } from "react";

const initialState = {
  movieList: [],
  addMovie: (state) => {
    console.log("added movie");
  }
};

const StoreContext = createContext(initialState);

const Actions = {};

const reducer = (state, action) => {
  const act = Actions[action.type];
  const update = act(state);
  return { ...state, ...update };
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = (store) => {
  const { state, dispatch } = useContext(StoreContext);
  return { state, dispatch };
};
