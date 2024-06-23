import React from "react";

/* <ChildB counter={props.counter} /> */

export const ChildB = (props) => {
  const { counter } = props;
  return (
    <article style={{ background: "#567123" }}>
      ChildB
      <b>Wartość propsów: {counter}</b>
    </article>
  );
};
