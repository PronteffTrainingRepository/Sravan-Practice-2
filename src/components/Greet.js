import React, { Component } from "react";

// function Greet(){
//         return <h1>Hello Sravan</h1>
// }

const Greet = (props) => {
  const {name} = props
  return (
    <div>
  
    {/* const Greet = ({name}) => ( */}
    <h1>Hello {props.name} this is from functional component</h1>
      {/* //<h1>Hello {name} this is using Destructuring states and props</h1> */}
      <h1>Hello {name} this is using </h1>
    </div>
  );
}

export default Greet;
