import { combineReducers, createStore } from "redux";

// export const dec = () => {
//   return {
//     type: "DEC",
//   };
// };
// export const res = () => {
//   return {
//     type: "RES",
//   };
// };
// export const inc = () => {
//   return {
//     type: "INC",
//   };
// };

// const initialState = 0;

// const reducers = (state = initialState, action) => {
//   switch (action.type) {
//     case "INC":
//       return state - 1;
//     case "DEC":
//       return state + 1;
//     case "RES":
//       return (state = 0);
//     default:
//       return state;
//   }git
// };

// export const store = createStore(
//   reducers,
//   initialState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
export const qush = () => {
  return {
    type: "QUSH",
  };
};
export const nol = () => {
  return {
    type: "NOL",
  };
};

export const ayir = () => {
  return {
    type: "AYIR",
  };
};
const initialState = 0;

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "QUSH":
      return state + 1;
    case "AYIR":
      return state - 1;
    case "NOL":
      return (state = 0);
  }
};

export const store = createStore(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
