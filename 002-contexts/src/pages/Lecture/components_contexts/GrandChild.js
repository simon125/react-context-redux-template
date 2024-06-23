import React, { Component, useContext } from "react";
import { LectureContext } from "../../../contexts/LectureContext";

export default class GrandChildClass extends Component {
  render() {
    return (
      <article>
        GrandChild
        <button
          onClick={() => this.props.setCounter((prevState) => prevState + 1)}
        >
          Click me
        </button>
      </article>
    );
  }
}

export const GrandChild = () => {
  const { increaseCounter } = useContext(LectureContext);
  return (
    <article>
      GrandChild
      <button onClick={increaseCounter}>Click me</button>
    </article>
  );
};
