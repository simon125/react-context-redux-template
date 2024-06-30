import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../../slices/counterSlice";

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  return (
    <article style={{ display: "flex", gap: 30 }}>
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
    </article>
  );
};
