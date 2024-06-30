import { createSlice } from "@reduxjs/toolkit";

// const [stan, funckjaSetująca] = useState(initialState);

// funckjaSetująca(cokolwiek)

const counterSlice = createSlice({
  initialState: {
    value: 0,
    test: "hej kup se klej",
  },
  name: "counter-slice",
  reducers: {
    increase: (state) => {
      console.log(state);
      // {
      //   value: 0,
      // }

      // state.value = state.value + 1;
      state.value += 1;
    },
    decrease: (state) => {
      // state.value = state.value - 1;
      state.value -= 1;
    },
    addCustomValue: (state, action) => {
      // state = state + action.payload;
      state.value += action.payload;

      // action.
    },
  },
});

export const { increase, decrease, addCustomValue } = counterSlice.actions;

/* export defaultowy kawałka naszej pamieci żeby móc go zaimportować i połączyć ze storem */
export default counterSlice.reducer;
