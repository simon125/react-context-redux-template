import React, { Component } from "react";

export default class GrandChild extends Component {
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

export const GrandChildFunc = (props) => {
  //   <GrandChild setCounter={props.setCounter} />
  return (
    <article>
      GrandChild
      <button onClick={() => props.setCounter((prevState) => prevState + 1)}>
        Click me
      </button>
    </article>
  );
};
