import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, addCustomValue } from "../../slices/counterSlice";

export const Counter = () => {
  const [customValue, setCustomValue] = useState(0);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  // const text = useSelector((state) => state.counter.test);
  // const całySlice = useSelector((state) => state.counter);

  return (
    <article>
      <div style={{ display: "flex", gap: 30 }}>
        <button
          onClick={() => {
            dispatch(increase());
          }}
        >
          +1
        </button>
        <input type="text" value={counter} readOnly />
        <button
          onClick={() => {
            dispatch(decrease());
          }}
        >
          -1
        </button>
      </div>
      <input
        type="text"
        placeholder="Custom value"
        value={customValue}
        onChange={(event) => setCustomValue(event.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addCustomValue(customValue * 1));
          setCustomValue(0);
        }}
      >
        Process custom value
      </button>
    </article>
  );
};
