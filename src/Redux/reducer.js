const initialState = [];

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "COMPLETE":
      return state.filter((el) => el.id !== action.payload);
    default:
      return state;
  }
}
