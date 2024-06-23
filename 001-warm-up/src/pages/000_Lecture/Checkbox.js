import React from "react";

export const Checkbox = (props) => {
  /**
    <Checkbox label="test" cokolwiek={stateZUseStatu} func={(e)=>{e.target.checked}} />
    <Checkbox label="trelemorele" />
 */

  return (
    <div>
      <label>
        <span>{props.label} </span>
        <input
          type="checkbox"
          checked={props.cokolwiek}
          onChange={props.func}
        />
      </label>
    </div>
  );
};
