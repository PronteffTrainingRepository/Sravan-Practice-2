import React from "react";

function FunctionClick() {
  function clickHandler(params) {
    console.log("hi");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
