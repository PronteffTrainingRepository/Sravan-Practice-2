import React, { Component } from "react";

const Hello = (props) => {
  //   return (
  //     <div className="dummyClass">
  //       <h1> Hello This is jsx</h1>
  //     </div>
  //   );

  return React.createElement(
    "div",
    {id:'hello', className:'dummyClass'},
    React.createElement("h1", null,'this is without jsx')
  );
};

export default Hello;
