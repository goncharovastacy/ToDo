const initialState = [
  { task: "сделать что-то" },
  { task: "сделать еще что-то" },
];

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    default:
      return state;
  }
}
